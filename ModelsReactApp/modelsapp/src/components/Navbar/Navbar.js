import { NavLink } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
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
            <NavLink to="/Login" >
                Log out
            </NavLink>
        </nav>
    );
}