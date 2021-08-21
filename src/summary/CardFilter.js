//Spare code (Kept just in case)


// import { useState } from 'react'
// import Card from './Card';

// export default function CardFilter({cards, onAdd }){
//     const [cardTerm, setcardTerm] = useState('')

//     return(
//         <div>
//             <div className="filtersmth">
//                 {cards.filter((val)=>{
//                     if (cardTerm === ""){
//                         return val
//                     } else if (val.uid.toLowerCase().includes(cardTerm.toLowerCase())){
//                         return val
//                     }

//                 }).map((val, key) =>{
//                     return (
//                         <Card
//                         key={val.id}
//                         card={val}
//                         onAdd={onAdd}/>

//                     )
                
//                 })}
//             </div>
//         </div>
//     )
// }