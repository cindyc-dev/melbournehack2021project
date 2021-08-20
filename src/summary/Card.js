import React from 'react'
import CardDropDown from './CardDropDown';

export default function Card({ card, onDelete }) {
    const currency = '$'
    

    return (
        <div className="card">
            <div className="name">
                {card.name}
            </div>
            <div className="price">
                {currency}{card.price.toFixed(2)}
            </div>
            <CardDropDown onDelete={onDelete} card={card}/>
        </div>
    )
}