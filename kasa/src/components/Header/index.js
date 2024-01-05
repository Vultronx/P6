import { NavLink } from 'react-router-dom'
import logo from '../../images/logo_header.png';
import '../../styles/App.scss';

function Header() {
    return (
            <header className='header'>
                <img className="logo" src={logo} alt="logo" />
                <nav className="navbar">
                    <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/">Accueil</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/about">A Propos</NavLink>
                </nav>
            </header>
    )
}

export default Header