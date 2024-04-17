import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyForm from "../../components/MyForm/index.jsx";
import "../../styles/pages/_cities.scss";
import { handleUpdateDataToAPI } from "../../utils/handleAPIServices.js";
import { API_KEY } from "../../constants/index.js";

const CityUpdate = () => {
  const navigate = useNavigate();
  const params = useParams();
  // const { updateCity, cities } = useContext(GlobalContext);

  const [selectedCity, setSelectedCity] = useState([]);

  const currentCityId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      await fetch(
        `https://crudcrud.com/api/${API_KEY}/cities2/${currentCityId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => 
          setSelectedCity(data)
        )
        .catch((error) => console.log(error));
      return selectedCity;
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const cityId = currentCityId;
  //   const selectedCity = cities.find(
  //     (currentSelectedCity) => currentSelectedCity.id === parseInt(cityId)
  //   );
  //   setSelectedCity(selectedCity);
  // }, [currentCityId, cities]);

  const page = ["Home /", "Cities /", `${selectedCity.name} /`, "Update"];

  const handleClickPageBar = (e) => {
    navigate('/');
  }

  const handleUpdateCity = (updatedCity) => {
    // updateCity(selectedCity);
    handleUpdateDataToAPI(updatedCity,selectedCity._id)
    console.log('abc' + updatedCity);
    navigate("/city/list");
  };

  const selectedCityRemoveId = Object.fromEntries(Object.entries(selectedCity).slice(1));

  if (!selectedCity || !selectedCity._id) {
    return <div>Invalid City ID</div>;
  }

  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar}/>
        <div className="cities__main__title">
          <h1>Update City</h1>
        </div>
        <MyForm selectedCity={selectedCityRemoveId} onSubmit={handleUpdateCity}/>
      </div>
    </Layout>
  );
};

export default CityUpdate;
