import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "../../components/NavBar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import "../../styles/pages/_cities.scss";

const CityUpdate = () => {
  let navigate = useNavigate();
  let params = useParams();
  const { cities, updateCity } = useContext(GlobalContext);

  const [selectedCity, setSelectedCity] = useState({
    id: null,
    name: "",
    province: "",
    country: "",
  });

  const currentCityId = params.id;

  useEffect(() => {
    const cityId = currentCityId;
    const selectedCity = cities.find(
      (currentSelectedCity) => currentSelectedCity.id === parseInt(cityId)
    );
    setSelectedCity(selectedCity);
  }, [currentCityId, cities]);

  const onSubmit = (e) => {
    e.preventDefault();
    updateCity(selectedCity);
    navigate("/list");
  };

  const handleOnChange = (cityKey, newValue) =>
    setSelectedCity({ ...selectedCity, [cityKey]: newValue });

  if (!selectedCity || !selectedCity.id) {
    return <div>Invalid City ID</div>;
  }

  return (
    <div className="cities">
      <NavBar />
      <div className="cities__main">
        <PageBar>
          <span>Home / Cities / {selectedCity.name} / Update</span>
        </PageBar>
        <div className="cities__main__title">
          <h1>Update City</h1>
        </div>
        <div className="cities__main__update">
          <form className="cities__main__update--form" onSubmit={onSubmit}>
            <div className="cities__main__update--form--input">
              <label>Name</label>
              <input
                type="text"
                value={selectedCity.name}
                onChange={(e) => handleOnChange("name", e.target.value)}
                required
              />
            </div>
            <div className="cities__main__update--form--input">
              <label>Province</label>
              <input
                type="text"
                value={selectedCity.province}
                onChange={(e) => handleOnChange("province", e.target.value)}
                required
              />
            </div>
            <div className="cities__main__update--form--input">
              <label>Country</label>
              <input
                type="text"
                value={selectedCity.country}
                onChange={(e) => handleOnChange("country", e.target.value)}
                required
              />
            </div>
            <div className="cities__main__update--form--btn">
              <MyButton>Save</MyButton>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CityUpdate;
