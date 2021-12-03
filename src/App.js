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

// Comment Test for Ant Git



import { auth, db, config } from "./config/Config";
import firebase from 'firebase'

// class App extends React.Component {
//   constructor(props){
//     super(props)
//     firebase.initializeApp(config)

//     this.state = {
//       user: useAuthState(auth),
//       userId: '',
//       data: null
//     }
//   }

//   componentDidMount() {
//     this.fetchUserId()
//     this.fetchUserData()
//     this.fetchSearchData()
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState !== this.state) {
//       this.writeUserData()
//     }
//   }

//   writeUserData = () => {
//     firebase.database()
//       .set(this.state)
//     console.log("DATA SAVED")
//   }

//   fetchUserData = () => {

//   }

export default function App() {

  // Getting user data from 'users' db
  const [user, loading] = useAuthState(auth);
  const [userId, setUserId] = useState('')  // Id in `users` db
  const [data, setData] = useState(null)  // the whole User Object
  const [name, setName] = useState('')
  const [sublist, setSubList] = useState([])
  const [rerender, setRerender] = useState(false)

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
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setData(doc.data())
            setName(doc.data()['name'])
            setSubList(doc.data()['subscriptionList'].map((sub) => (
              sub.trim()
            )))
          })
        })    

    } catch (err) {
      console.log(err);
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
                // i think it's addCard problem ;-; wurps Apps
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
      console.log(err);
    //   alert("An error occured while fetching user data");
    }
  }

  const addCard = (subid) => {
    console.log("ADDCARD CALLED")
    console.log("!SUBID ADDED",subid)
    db.collection("users").doc(userId).update({
      subscriptionList: firebase.firestore.FieldValue.arrayUnion(subid)
    })
    .catch((error) => {
        console.error(error)
    })
  }

  const deleteCard = (subid) => {
    console.log("DELETE CALLED")
    console.log("!SUBID DELETED",subid)
    var docRef = db.collection("users").doc(userId)
    return docRef.update({
      subscriptionList: firebase.firestore.FieldValue.arrayRemove(String(subid))
    })
    .then(()=> {
      console.log('Deleted Card Successfully')
    })
    .catch((error) => {
        console.error(error)
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
            <SearchArea sublist={sublist} onAdd={addCard} searchResults={searchResults}/>
            <Summary onDelete={deleteCard} mySubs={mySubscriptions}/>
            <Navbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
