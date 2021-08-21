import './App.css';

// Import Components
import Header from './header/Header'
import Summary from './summary/Summary'
import SearchArea from './search-area/SearchArea';
import Navbar from './Navbar'
import LoginPage from './header/LoginPage';
import RegisterPage from './header/RegisterPage';
import Reset from './header/Reset';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";


import { auth, db } from "./header/firebase";
import firebase from 'firebase'

export default function App() {

  // Getting user data from 'users' db
  const [user, loading] = useAuthState(auth);
  const [userId, setUserId] = useState('')
  const [data, setData] = useState(null)  // the whole User Object
  const [name, setName] = useState('')
  const [sublist, setSubList] = useState([])

  const fetchUserId = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUserId(doc.id)
          })
        })      
    } catch (err) {
      console.error(err);
    //   alert("An error occured while fetching user data");
    }
  }

  const fetchUserData = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get()
      const data = await query.docs[0].data();
      setData(data)
      setName(data.name)
      setSubList(data.subscriptionList.map((sub) => (
        sub.trim()
      )))
      
    } catch (err) {
      console.error(err);
    //   alert("An error occured while fetching user data");
    }
  }

  const [searchResults, setSearchResults] = useState([])
  const [mySubscriptions, setMySubscriptions] = useState([])
  const fetchSearchData = async () => {
    try {
      const query = await db
        .collection("subscriptions")
        .get()
        .then((querySnapshot) => {
          var res= []
          var sub=[]
          querySnapshot.forEach((doc) => {
              var docObject = doc.data()
              res.push({
                "id": doc.id, 
                "name": docObject['sub-name'], 
                "price": docObject['sub-price'] || 0})

              if (sublist.includes(String(doc.id))){
                sub.push({
                  "id": doc.id, 
                  "name": docObject['sub-name'], 
                  "price": docObject['sub-price'] || 0})
              }
          })
          setSearchResults(res)
          setMySubscriptions(sub)
        })
    } catch (err) {
      console.error(err);
    //   alert("An error occured while fetching user data");
    }
  }

  const addCard = (subid) => {
    var docRef = db.collection("users").doc(userId)
    docRef.update({
      subscriptionList: firebase.firestore.FieldValue.arrayUnion(subid)
    })
  }
  const deleteCard = (subid) => {
    var docRef = db.collection("users").doc(userId)
    docRef.update({
      subscriptionList: firebase.firestore.FieldValue.arrayRemove(subid)
    })
  }

  useEffect(() => {
    if (loading) return
    fetchUserData();
    fetchSearchData();
    fetchUserId();
  })
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/reset" component={Reset} />
          <Route path="/dashboard">
            {user? null:<Redirect exact to="/" />}
            
            <Header name={name} email={data?data.email:null} uid={userId} />
            <SearchArea onAdd={addCard} searchResults={searchResults}/>
            <Summary onDelete={deleteCard} mySubs={mySubscriptions}/>
            <Navbar />
          </Route>
        </Switch>
        {/* <img src = "/images/niwhna0y24v61 (2).png" alt="test"/> */}
      </div>
    </Router>
  );
}
