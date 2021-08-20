import React from 'react'

export default function SearchCard({ searchcard, onDelete }) {
    const currency = '$'

    return (
        <div className="search-card">
            <div className="searchname">
                {searchcard.name}
            </div>
            <div className="searchprice">
                {currency}{searchcard.price.toFixed(2)}
            </div>
        </div>
    )
}