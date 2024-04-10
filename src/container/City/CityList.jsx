import React, { useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "../../components/NavBar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";
import "../../styles/pages/_cities.scss";
import { GlobalContext } from "../../context/GlobalState.js";

let PageSize = 5;

const CityList = () => {
  const navigate = useNavigate();
  const { cities, deleteCity } = useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPageCount = Math.ceil(cities.length / PageSize) 

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cities.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="cities">
      <NavBar />
      <div className="cities__main">
        <PageBar>
          <span>Home / Cities</span>
        </PageBar>
        <div className="cities__main__title">
          <h1>Cities</h1>
        </div>
        <div className="cities__main--btn">
          <MyButton onClick={() => navigate("/create")}>Create city</MyButton>
        </div>
        <span className="cities__main--span">Showing {currentPage}-{totalPageCount} of {cities.length} items.</span>
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
                <td>{city.id}</td>
                <td>{city.name}</td>
                <td>{city.province}</td>
                <td>{city.country}</td>
                <td>
                  <i
                    className="bi bi-eye"
                    onClick={() => navigate(`/detail/${city.id}`)}
                  ></i>
                  <i
                    className="bi bi-pencil"
                    onClick={() => navigate(`/update/${city.id}`)}
                  ></i>
                  <i
                    className="bi bi-trash"
                    onClick={() => deleteCity(city.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cities__main__pagination">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={cities.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CityList;
