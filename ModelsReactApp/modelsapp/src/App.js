import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import Login from './components/Login/Login';
import ManagerPage from './components/Manager/ManagerPage';
<<<<<<< HEAD
import  ModelPage from './components/Model/ModelPage';
=======
import ModelPage from "./components/Model/ModelPage";
import './App.css';
>>>>>>> 5c52560fdf69422ef88f65496958929161f5791d

function App() {
    
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/manager" element={<ManagerPage />} />
<<<<<<< HEAD
                    <Route path="/model" element={<ModelPage/> } />
=======
                    <Route path="/model" element={<ModelPage />} />
>>>>>>> 5c52560fdf69422ef88f65496958929161f5791d
                </Routes>
            </div>
        </Router>
    );
}

export default App;
