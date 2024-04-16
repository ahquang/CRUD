import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyForm from "../../components/MyForm/index.jsx";
import "../../styles/pages/_cities.scss";
import { handlePostDataToAPI } from "../../utils/handleAPIServices.js";

const CityCreate = () => {
  let navigate = useNavigate();

  // const { addCity } = useContext(GlobalContext);
  const [page] = useState(["Home /", "Cities /", "Create City"]);

  const handleClickPageBar = (e) => {
    navigate('/');
  }

  const handleAddCity = (newCity) => {
    // addCity(newCity);
    handlePostDataToAPI(newCity);
    navigate("/list");
  };
  
  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar}/>
        <div className="cities__main__title">
          <h1>Create City</h1>
        </div>
        <MyForm onSubmit={handleAddCity}/>
      </div>
    </Layout>
  );
};

export default CityCreate;
