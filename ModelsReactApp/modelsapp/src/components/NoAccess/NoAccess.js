import { Outlet } from "react-router-dom";

export function NoAccess() {
    return (
        <>
            <h1>No Access</h1>
            <p>You do not have access to this page.</p>
            <Outlet />
            <footer>
                <p>Made by the Three Fellas: Rasmus, Asger & Alexander</p>
            </footer>
        </>
    )
}
