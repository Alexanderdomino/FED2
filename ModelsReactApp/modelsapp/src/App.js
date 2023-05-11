import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import Login from './components/Login/Login';
import ManagerPage from './components/Manager/ManagerPage';
import ModelPage from "./components/Model/ModelPage";
import './App.css';
import {useEffect, useState} from "react";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
    const [tokenPayload, setTokenPayload] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    };
    
    function parseJwt(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const payload = parseJwt(token);
            setTokenPayload(payload);
        }
    }, [isLoggedIn]);
    
    return (
        <Router>
            <div className="App">
                <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <Routes>
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/" element={<MainPage />} />
                    {tokenPayload?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Manager' ? (
                        <Route path="/manager" element={<ManagerPage />} />
                    ) : (
                        <Route path="/manager" element={<MainPage />} />
                    )}
                    {tokenPayload?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Model' ? (
                        <Route path="/model" element={<ModelPage />} />
                    ) : (
                        <Route path="/model" element={<MainPage />} />
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
