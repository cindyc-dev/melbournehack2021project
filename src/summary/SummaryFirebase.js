import React, { Component } from 'react'
import firebase from 'firebase'

const db = firebase.firestore()
var collectionRef = db.collection("users")

export default class SummaryFirebase extends Component{
    constructor(props) {
        super(props);
        this.state = {results: []}
        collectionRef.get().then((querySnapshot) => {
            var resultsArray = []
            querySnapshot.forEach((doc) => {
                // Object { "sub-name": "LinkedIn Premium", "sub-image": "", "sub-price": 10.2 }
                var docObject = doc.data()

                resultsArray.push({
                    "id": doc.id, 
                    "name": docObject['sub-name'], 
                    "price": docObject['sub-price'] || 0})
                
                
            })
            // console.log(resultsArray)
            this.setState(prevState => ({
                results: resultsArray
            }))
            
        })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}