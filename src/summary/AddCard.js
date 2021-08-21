import { useState } from 'react'
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa'

export default function AddCard({ onAdd }) {



    const [name, setName] = useState('')
    const [price, setPrice] = useState(0.00)

    const [nameerror, setNameError] = useState(false)
    const [priceerror, setPriceError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            setNameError(true)
        } else {
            setNameError(false)
        }

        if (!price) {
            setPriceError(true)
        } else {
            setPriceError(false)
        }

        if (name && price) {
            onAdd( { name, price })
            setName('')
            setPrice(0.00)
        }
        
    }

    const [showaddcard, setShowAddCard] = useState(false)

    return (
        <div className="add-card">
            <div className={`button open-add-card ${showaddcard ? "hide" : "show"}`} onClick={() => {setShowAddCard(!showaddcard)}}>
                <FaPlusCircle />
            </div>
            <div className= {`button close-add-card ${showaddcard ? "show" : "hide"}`} onClick={() => {setShowAddCard(!showaddcard)}}>
                <FaTimesCircle />
            </div>
            
            <form className={`add-card-form ${showaddcard ? "show" : "hide"}`} onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Name</label>
                    <input
                        type='text'
                        placeholder='Add Subscription Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className={`form-error ${nameerror ? "show" : "hide"}`}><p>Please add a Subscription Name</p></div> 
                </div>
                <div className="form-control">
                    <label>Price</label>
                    <input
                        type='number' step="0.01"
                        placeholder='Enter Subscription Price'
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                    />
                    <div className={`form-error ${priceerror ? "show" : "hide"}`}><p>Please add a Subscription Price</p></div> 
                </div>

                <input type='submit' value='Save Flashcard' className='btn-block' />

            </form>
        </div>
    )
}