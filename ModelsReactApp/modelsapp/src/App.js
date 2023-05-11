import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import Login from './components/Login/Login';
import ManagerPage from './components/Manager/ManagerPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/manager" element={<ManagerPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;