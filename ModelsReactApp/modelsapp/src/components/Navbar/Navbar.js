import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <NavLink to="/Login" >
                Login page
            </NavLink>
        </nav>
    );
}