import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import CityCreate from "./container/City/CityCreate";
import CityDetail from "./container/City/CityDetail";
import CityList from "./container/City/CityList";
import CityUpdate from "./container/City/CityUpdate";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<CityList />} />
            <Route path="/create" element={<CityCreate />} />
            <Route path="/list" element={<CityList />} />
            <Route path="/update/:id" element={<CityUpdate />} />
            <Route path="/detail/:id" element={<CityDetail />} />
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
