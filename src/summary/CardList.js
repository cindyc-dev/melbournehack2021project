import Card from './Card'

export default function CardList( { cards, onDelete } ){
    return (
        <div className="card-list">
            

            {cards.map((card) => (
                <Card
                key={card.id}
                card={card}
                onDelete={onDelete} />
            ))}
        </div>
    )
}

