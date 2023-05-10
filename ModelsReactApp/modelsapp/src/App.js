import './App.css';
import { 
    BrowserRouter as Router, 
    Routes, 
    Route } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import Login from './components/Login/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
