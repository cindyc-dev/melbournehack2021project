import React from 'react'

export default function SearchCard({ searchcard, onAdd }) {
    const currency = '$'

    return (
        <div className="search-card" onClick={onAdd(searchcard.id, searchcard.name, searchcard.price)}>
            <div className="searchname">
                {searchcard.name}
            </div>
            <div className="card-image">
                
            </div>
            <div className="searchprice">
                {currency}{typeof(searchcard.price)=="number" ? searchcard.price.toFixed(2):searchcard.price} 
            </div>
        </div>
    )
}