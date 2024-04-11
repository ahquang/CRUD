import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyForm from "../../components/MyForm/index.jsx";
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    updateCity(selectedCity);
    navigate("/list");
  };

  if (!selectedCity || !selectedCity.id) {
    return <div>Invalid City ID</div>;
  }

  return (
    <Layout>
      <div className="cities__main">
        <PageBar>
          <span>Home / Cities / {selectedCity.name} / Update</span>
        </PageBar>
        <div className="cities__main__title">
          <h1>Update City</h1>
        </div>
        <MyForm dataCity={selectedCity} setDataCity={setSelectedCity} onSubmit={handleOnSubmit}/>
      </div>
    </Layout>
  );
};

export default CityUpdate;
