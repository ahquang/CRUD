import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import "../../styles/pages/_cities.scss";
import { handleDeleteDataFromAPI } from "../../utils/handleAPIServices.js";
import { API_KEY } from "../../constants/index.js";

const CityDetail = () => {
  let navigate = useNavigate();
  let params = useParams();
  // const { cities, deleteCity } = useContext(GlobalContext);

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
        .then((data) => setSelectedCity(data))
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

  const handleDeleteBtn = () => {
    handleDeleteDataFromAPI(selectedCity._id);
    navigate("/list");
  };
  const page = ["Home /", "Cities /", selectedCity.name];

  const handleClickPageBar = (e) => {
    navigate("/");
  };

  // if (!selectedCity || !selectedCity._id) {
  //   return <div>Invalid City ID</div>;
  // }

  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="cities__main__title">
          <h1>{selectedCity.name}</h1>
        </div>
        <div className="cities__main__detail">
          <div className="cities__main__detail__btn">
            <MyButton
              className="cities__main__detail__btn__update"
              onClick={() => navigate(`/update/${selectedCity._id}`)}
            >
              Update
            </MyButton>
            <MyButton
              className="cities__main__detail__btn__delete"
              onClick={handleDeleteBtn}
            >
              Delete
            </MyButton>
          </div>
          <table className="cities__main__detail--table">
            <tr>
              <th>ID</th>
              <td>{selectedCity._id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{selectedCity.name}</td>
            </tr>
            <tr>
              <th>Province</th>
              <td>{selectedCity.province}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{selectedCity.country}</td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default CityDetail;
