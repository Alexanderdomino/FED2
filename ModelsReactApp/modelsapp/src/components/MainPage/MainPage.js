import { Outlet } from "react-router-dom";
import { Navbar } from '../Navbar/Navbar';

export function MainPage() {
    return (
        <>
            <h1>Welcome to the Model Agency system</h1>
            <Navbar />
            <Outlet />
            <footer>
                <p>Made by the Three Fellas: Rasmus, Asger & Alexander</p>
            </footer>
        </>
    )
}