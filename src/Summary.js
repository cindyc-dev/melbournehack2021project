import './App.css';
import React, { useState } from 'react'
import CardList from './summary/CardList'
import AddCard from './AddCard'
import FeeTotal from './summary/FeeTotal';

function Summary() {
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

      <AddCard onAdd={addCard} />

      <CardList
        cards={cards}
        onDelete={deleteCard}
      />

      <FeeTotal cards={cards}/>

      
      
    </div>
  );
}

export default Summary;