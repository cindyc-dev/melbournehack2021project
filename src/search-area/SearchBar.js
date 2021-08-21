
import {useState} from 'react'
import SearchCard from './SearchCard'


export default function SearchBar({ onAdd, searchcards }) {
    const [searchTerm, setSearchTerm] = useState('')
   
    return (
        <div>
            <input className="search-bar" type='text' placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}}></input>
            <div className="search-list">
                {searchcards.filter((val) => {
                    if (searchTerm === ""){
                        return val
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                    return null
                }).map((val, key) => {
                    return (
                        <SearchCard
                            key={val.id}
                            searchcard={val}
                            onAdd={onAdd} />
                        
                    )
                })}
            </div>
        </div>
    )
}

