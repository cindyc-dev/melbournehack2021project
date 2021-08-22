
import {useState} from 'react'
import SearchCard from './SearchCard'


export default function SearchBar({ sublist, onAdd, searchcards }) {
    const [searchTerm, setSearchTerm] = useState('')
   
    return (
        <div>
            <input className="search-bar" type='text' placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}}></input>
            <div className="search-list">
                {searchcards.filter((val) => {
                    if (searchTerm === ""){
                        if (! sublist.includes(val.id)){
                            return val
                        }
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                    return null
                }).map((val, key) => {
                    return (
                        <SearchCard
                            key={val.id}
                            sublist={sublist}
                            searchcard={val}
                            onAdd={onAdd} />
                        
                    )
                })}
            </div>
        </div>
    )
}

