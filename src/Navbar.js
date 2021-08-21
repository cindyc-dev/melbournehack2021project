import { FaCog, FaHome, FaTh } from 'react-icons/fa'
import { BrowserRouter as Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className="navbar">
        
            <Link to="/home">
                <div className="navbar-item">
                    <FaHome />
                </div>
            </Link>
        
            <Link to="/mysubscriptions">
                <div className="navbar-item-1">
                    <FaTh/>
                </div>
            </Link>
            
            
            <Link to="/settings">
                <div className="navbar-item">
                    <FaCog/>
                </div>
            </Link>
            
        </div>
    )
}