import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import CityCreate from "./container/City/CityCreate";
import CityDetail from "./container/City/CityDetail";
import CityList from "./container/City/CityList";
import CityUpdate from "./container/City/CityUpdate";
import UserCreate from "./container/User/UserCreate";
import UserList from "./container/User/UserList";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Routes>
            {/* <Route path="/" element={<CityList />} /> */}
            <Route path="/city/create" element={<CityCreate />} />
            <Route path="/city/list" element={<CityList />} />
            <Route path="/city/update/:id" element={<CityUpdate />} />
            <Route path="/city/detail/:id" element={<CityDetail />} />
            <Route path="/user/create" element={<UserCreate />} />
            <Route path="/user/list" element={<UserList />} />
            <Route path="/user/update/:id" element={<CityUpdate />} />
            <Route path="/user/detail/:id" element={<CityDetail />} />
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
