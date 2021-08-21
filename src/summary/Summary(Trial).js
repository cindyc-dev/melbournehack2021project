import React, { useState } from 'react'
import CardList from './CardList'
import AddCard from './AddCard'
import FeeTotal from './FeeTotal'
import firebase from 'firebase'

const db = firebase.firestore()
var collectionRef = db.collection("users";
)
export default class Summary extends React.Component {
    constructor(propstrial){
        super(propstrial);
        this.state = {subresults:[]}
        collectionRef.get().then((querySnapshot)=>{
            var subresultsArray = []
            querySnapfor.forEach((| ))
        }
  
const user = firebase.auth().currentUser
  console.log(user)
  const [cards, setCards] = useState([
    {
      id: 1,
      name : 'Netflex',
      price : 10.00,
    },
    {
      id: 2,
      name: 'YewTube',
      price: 20.00,
    }
  ])

  // Add Subscription Card
  const addCard = (card) => {
    const id = Math.floor(Math.random()*1000) + 1 // creates a random id
    const newCard = { id, ...card }
    setCards([...cards, newCard])
  }

  // Delete Card
  const deleteCard = (id) =>{
    setCards(cards.filter((card) => card.id !== id))
  }

  return (
    <div className="summary">

      <FeeTotal cards={cards}/>

      <p className="summary-title">Your Subscriptions</p>
      
      <CardList
        cards={cards}
        onDelete={deleteCard}
      />
      <AddCard onAdd={addCard} />

    </div>
  );
}