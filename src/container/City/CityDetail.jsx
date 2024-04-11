import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "../../components/NavBar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import "../../styles/pages/_cities.scss";

const CityDetail = () => {
  let navigate = useNavigate();
  let params = useParams();
  const { cities, deleteCity } = useContext(GlobalContext);

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
  console.log(selectedCity);
  const handleDeleteBtn = () => {
    deleteCity(selectedCity.id);
    navigate("/list");
  };

  if (!selectedCity || !selectedCity.id) {
    return <div>Invalid City ID</div>;
  }

  return (
    <div className="cities">
      <NavBar />
      <div className="cities__main">
        <PageBar>
          <span>Home / Cities / {selectedCity.name}</span>
        </PageBar>
        <div className="cities__main__title">
          <h1>{selectedCity.name}</h1>
        </div>
        <div className="cities__main__detail">
          <div className="cities__main__detail__btn">
            <MyButton
              className="cities__main__detail__btn__update"
              onClick={() => navigate(`/update/${selectedCity.id}`)}
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
              <td>{selectedCity.id}</td>
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
      <Footer />
    </div>
  );
};

export default CityDetail;
