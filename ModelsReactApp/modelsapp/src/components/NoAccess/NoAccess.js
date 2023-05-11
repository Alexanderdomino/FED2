import { Outlet } from "react-router-dom";

export function NoAccess() {
    return (
        <>
            <h1>No Access</h1>
            <p>You do not have access to this page.</p>
            <Outlet />
            <img src="https://c8.alamy.com/comp/F0806Y/a-sad-crying-emoji-emoticon-smiley-face-character-with-tears-streaming-F0806Y.jpg" alt="sad smiley" />
            <footer>
                <p>Made by the Three Fellas: Rasmus, Asger & Alexander</p>
            </footer>
        </>
    )
}
