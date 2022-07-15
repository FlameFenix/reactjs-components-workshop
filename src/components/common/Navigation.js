import { Link } from 'react-router-dom'
import './Navigation.css'

export const Navigation = () => {
    return (
        <nav class="nav">
                <ul class="list-items">
                    <li class="list-item"><Link to="/">Home</Link></li>
                    <li class="list-item"><Link to="/Users">Users</Link></li>
                    <li class="list-item"><Link to="/Catalogue">Catalogue</Link></li>
                    <li class="list-item"><Link to="/Contacts">Contacts</Link></li>
                </ul>
        </nav>
    );
}