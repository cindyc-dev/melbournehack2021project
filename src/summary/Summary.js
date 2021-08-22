import React from 'react'
import CardList from './CardList'
import AddCard from './AddCard'
import FeeTotal from './FeeTotal'
// import CardFilter from './CardFilter'

export default function Summary({  onDelete, mySubs }) {

  return (
    <div className="summary">
      <FeeTotal cards={mySubs}/>

      <p className="summary-title">Your Subscriptions</p>

      {/* Subscriptions: {mySubs.map((sub)=>(
        <div>{sub.id}</div>
      ))} */}
      
      <CardList
        cards={mySubs}
        onDelete={onDelete}
      />
      <AddCard />

    </div>
  );
}