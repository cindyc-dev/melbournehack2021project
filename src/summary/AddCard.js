import { useState } from 'react'

export default function AddCard({ onAdd }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0.00)

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd( { name, price })

        setName('')
        setPrice(0.00)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input
                    type='text'
                    placeholder='Add Subscription Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Price</label>
                <input
                    type='number' step="0.01"
                    placeholder='Enter Subscription Price'
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
            </div>

            <input type='submit' value='Save Flashcard' className='btn-block' />

        </form>
    )
}