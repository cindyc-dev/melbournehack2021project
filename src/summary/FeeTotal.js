import { FaChartLine } from "react-icons/fa";

export default function FeeTotal({cards}){
// wats happening is that it is just doing string addition i think.
    var totalprice = 0.00;
    const n = cards.map((card) => (
        totalprice = totalprice + parseFloat(card.price)

    ))
    
    return (
        <div className="total-fee">
            
            <p className="summary-title"><FaChartLine />Expected Expense</p>
            <p className="total-price">${totalprice}</p>
            {/* .toFixed(2) */}
            
        </div>
    )
}
