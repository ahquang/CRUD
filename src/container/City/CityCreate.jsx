import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyForm from "../../components/MyForm/index.jsx";
import "../../styles/pages/_cities.scss";

const CityCreate = () => {
  let navigate = useNavigate();

  const { addCity, cities } = useContext(GlobalContext);

  const [newCity, setNewCity] = useState({
    id: cities.length + 1,
    name: "",
    province: "",
    country: "",
  });

  const handleAddCity = (e) => {
    e.preventDefault();
    addCity(newCity);
    navigate("/list");
  };
  
  return (
    <Layout>
      <div className="cities__main">
        <PageBar>
          <span>Home / Cities / Create City</span>
        </PageBar>
        <div className="cities__main__title">
          <h1>Create City</h1>
        </div>
        <MyForm dataCity={newCity} setDataCity={setNewCity} onSubmit={handleAddCity}/>
      </div>
    </Layout>
  );
};

export default CityCreate;
