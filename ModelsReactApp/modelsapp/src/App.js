import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard } from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard/>}>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
