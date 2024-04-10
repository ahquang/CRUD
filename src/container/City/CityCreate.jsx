import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "../../components/NavBar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import "../../styles/pages/_cities.scss";

const CityCreate = () => {
  let navigate = useNavigate();

  const { addCity, cities } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  const newCity = {
    id: cities.length + 1,
    name,
    province,
    country,
  };

  const handleAddCity = (e) => {
    e.preventDefault();
    addCity(newCity);
    navigate("/list");
  };

  return (
    <div className="cities">
      <NavBar />
      <div className="cities__main">
        <PageBar>
          <span>Home / Cities / Create City</span>
        </PageBar>
        <div className="cities__main__title">
          <h1>Create City</h1>
        </div>
        <div className="cities__main__create">
          <form className="cities__main__create--form" onSubmit={handleAddCity}>
            <div className="cities__main__create--form--input">
              <label>Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="cities__main__create--form--input">
              <label>Province</label>
              <input
                type="text"
                onChange={(e) => setProvince(e.target.value)}
                value={province}
                required
              />
            </div>
            <div className="cities__main__create--form--input">
              <label>Country</label>
              <input
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                required
              />
            </div>
            <div className="cities__main__create--form--button">
              <MyButton>Save</MyButton>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CityCreate;
