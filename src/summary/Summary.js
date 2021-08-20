import React, { useState } from 'react'
import CardList from './CardList'
import AddCard from './AddCard'
import FeeTotal from './FeeTotal';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export default function Summary() {

  const cardsRef = firebase.collection('Cards')
  const query = cardsRef.orderBy('createdAt').limit(25);

  const [cards, setCards] = useCollectionData(query, {idField: 'id'})

  // const [cards, setCards] = useState([
  //   {
  //     id: 1,
  //     name : 'Netflex',
  //     price : 10.00,
  //   },
  //   {
  //     id: 2,
  //     name: 'YewTube',
  //     price: 20.00,
  //   }
  // ])

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

      <AddCard onAdd={addCard} />

      <CardList
        cards={cards}
        onDelete={deleteCard}
      />

      <FeeTotal cards={cards}/>

      
      
    </div>
  );
}