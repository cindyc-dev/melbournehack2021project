import { FaChartLine } from "react-icons/fa";

export default function FeeTotal({cards}){

    var totalprice = 0.00;
    cards.map((card) => (
        totalprice = totalprice + card.price
    ))
    return (
        <div className="total-fee">
            
            <p className="summary-title"><FaChartLine />Expected Expense</p>
            <p className="total-price">${totalprice}</p>
            {/* .toFixed(2) */}
            
        </div>
    )
}
