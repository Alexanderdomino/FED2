import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <NavLink to="/Login" >
                Log out
            </NavLink>
        </nav>
    );
}