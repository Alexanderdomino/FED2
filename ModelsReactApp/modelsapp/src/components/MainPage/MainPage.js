import { Outlet } from "react-router-dom";

export function MainPage() {
    return (
        <>
            <h1>Welcome to the Model Agency system</h1>
            
            <Outlet />
            <footer>
                <p>Made by the Three Fellas: Rasmus, Asger & Alexander</p>
            </footer>
        </>
    )
}