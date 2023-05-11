import { Outlet } from "react-router-dom";

export function MainPage() {
    return (
        <>
            <h1>Welcome to the Model Agency system</h1>
            
            <Outlet />
            <img src="https://voresbrabrand.dk/wp-content/uploads/2022/10/cm-Jytte-scaled.jpg" alt="Jytte" />

            <footer>
                <p>Made by the Three Fellas: Rasmus, Asger & Alexander</p>
            </footer>
        </>
    )
}