import React from 'react'
import SearchBar from './SearchBar'
import SearchList from './SearchList'
import SearchHeader from './SearchHeader'
import DATA from "./DATA.json"

export default function SearchArea() {
    const searchcards = DATA

    return (
        <div className="search-area">
            <SearchHeader />
            <SearchBar/>
            <SearchList
                searchcards={searchcards}
            />
        </div>
    )
}