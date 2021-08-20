export default function FeeTotal({cards}){

    var totalprice = 0.00;
    cards.map((card) => (
        totalprice = totalprice + card.price
    ))
    return (
        <div className="total-fee">
            <p>The total price is ${totalprice.toFixed(2)}</p>
            
        </div>
    )
}
