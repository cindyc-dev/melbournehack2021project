import React, { Component } from 'react'
import SearchBar from './SearchBar'

import SearchHeader from './SearchHeader'

export default function SearchArea({onAdd, searchResults}){
        return (
            <div className="search-area">
                <SearchHeader />
                <SearchBar onAdd={onAdd} searchcards={searchResults}/>
            </div>
        )
}
// export default class SearchArea extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {results: []}
//         collectionRef.get().then((querySnapshot) => {
//             var resultsArray = []
//             querySnapshot.forEach((doc) => {
//                 // Object { "sub-name": "LinkedIn Premium", "sub-image": "", "sub-price": 10.2 }
//                 var docObject = doc.data()

//                 resultsArray.push({
//                     "id": doc.id, 
//                     "name": docObject['sub-name'], 
//                     "price": docObject['sub-price'] || 0})
//             })
//             // console.log(resultsArray)
//             this.setState(prevState => ({
//                 results: resultsArray
//             }))
            
//         })
//     }
//     render() {
//         return (
//             <div className="search-area">
//                 <SearchHeader />
//                 <SearchBar searchcards={this.state.results}/>
//             </div>
//         )
//     }
// }