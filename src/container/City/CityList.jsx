import React, { useContext, useState, useMemo, useEffect } from "react";
import { API_KEY, DEFAULT_PAGE_SIZE } from "../../constants/index.js";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";
import "../../styles/pages/_cities.scss";
import { GlobalContext } from "../../context/GlobalState.js";
import detailIcon from "../../assets/visibility_24px.svg";
import deleteIcon from "../../assets/delete_24px.svg";
import updateIcon from "../../assets/create_24px.svg";
import { handleDeleteDataFromAPI } from "../../utils/handleAPIServices.js";

const CityList = () => {
  const navigate = useNavigate();
  // const { cities, deleteCity } = useContext(GlobalContext);
  const [dataCity, setDataCity] = useState([]);

  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(`https://crudcrud.com/api/${API_KEY}/cities2`, requestOptions)
      .then((response) => response.json())
      .then((data) => setDataCity(data))
      .catch((error) => console.log(error));
    return dataCity;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [page] = useState(["Home /", "Cities"]);

  const handleClickPageBar = (e) => {
    navigate("/");
  };

  const handleDeleteCity = async (id) => {
    await handleDeleteDataFromAPI(id);
    fetchData();
  };
  const totalPageCount = Math.ceil(dataCity.length / DEFAULT_PAGE_SIZE);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * DEFAULT_PAGE_SIZE;
    const lastPageIndex = firstPageIndex + DEFAULT_PAGE_SIZE;
    return dataCity.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataCity]);

  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="cities__main__title">
          <h1>Cities</h1>
        </div>
        <div className="cities__main--btn">
          <MyButton onClick={() => navigate("/create")}>Create city</MyButton>
        </div>
        <span className="cities__main--span">
          Showing {currentPage}-{totalPageCount} of {dataCity.length} items.
        </span>
        <table className="cities__main__list">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Province</th>
              <th>Country</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((city, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{city.name}</td>
                <td>{city.province}</td>
                <td>{city.country}</td>
                <td>
                  <img
                    src={detailIcon}
                    alt=""
                    onClick={() => navigate(`/detail/${city._id}`)}
                  />
                  <img
                    src={updateIcon}
                    alt=""
                    onClick={() => navigate(`/update/${city._id}`)}
                  />
                  <img
                    src={deleteIcon}
                    alt=""
                    onClick={() => {
                      handleDeleteCity(city._id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cities__main__pagination">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={dataCity.length}
            pageSize={DEFAULT_PAGE_SIZE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CityList;
