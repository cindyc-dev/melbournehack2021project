import React from 'react'
import CardDropDown from './CardDropDown';

export default function Card({ card, onDelete }) {
    const currency = '$'
    
    return (
        <div className="card">
            <div className="card-name">
                {card.name}
            </div>
            
            <div className="card-price">
                {currency}{card.price}
                {/* .toFixed(2) */}
            </div>
            <CardDropDown onDelete={onDelete} card={card}/>
        </div>
    )
}