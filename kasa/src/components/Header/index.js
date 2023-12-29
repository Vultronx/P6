import { Link } from 'react-router-dom'
import logo from '../../images/logo_header.png';
import '../../styles/App.css';

function Header() {
    return (
        <div className="Header">
            <header className='App-header'>
                <img src={logo} alt="logo" />
                <nav>
                    <Link className='App-link' to="/">Accueil</Link>
                    <Link className='App-link' to="/about">A Propos</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header