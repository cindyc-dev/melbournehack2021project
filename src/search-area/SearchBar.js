import DATA from "./DATA.json"
import {useState} from 'react'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <input className="search-bar" type='text' placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}}></input>
            {DATA.filter((val) => {
                if (searchTerm === ""){
                    return null
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
                return null
             }).map((val, key) => {
                return (
                    <div>
                        <p>{val.name}</p>
                    </div>
                )
// {SearchCard{val.name}} ??

            })}
        </div>
    )
}

