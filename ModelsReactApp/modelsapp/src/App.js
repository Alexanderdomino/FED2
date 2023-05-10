import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} >
              {/*<Route path="/weathercity" element={<WeatherCity />} />*/}
            </Route>
          </Routes>
        </div>
      </Router>
  )
}

export default App;
