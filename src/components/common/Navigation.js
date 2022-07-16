import { Link } from 'react-router-dom'
import './Navigation.css'

export const Navigation = () => {
    return (
        <nav className="nav">
                <ul className="list-items">
                    <li className="list-item"><Link to="/">Home</Link></li>
                    <li className="list-item"><Link to="/Users">Users</Link></li>
                    <li className="list-item"><Link to="/Catalogue">Catalogue</Link></li>
                    <li className="list-item"><Link to="/Contacts">Contacts</Link></li>
                </ul>
        </nav>
    );
}