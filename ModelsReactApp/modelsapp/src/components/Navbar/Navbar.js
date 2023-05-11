import { NavLink } from "react-router-dom";
import './Navbar.css';

export function Navbar({ isLoggedIn, handleLogout }) {
    return (
        <nav>
            <NavLink to="/" >
                Home
            </NavLink>
            <NavLink to="/Manager" >
                Manager page
            </NavLink>
            <NavLink to="/Model" >
                Model page
            </NavLink>
            {isLoggedIn ? (
                <NavLink to="/Login" onClick={handleLogout}>
                    Log out
                </NavLink>
            ) : (
                <NavLink to="/Login">
                    Log in
                </NavLink>
            )}
        </nav>
    );
}
