import { useNavigate } from "react-router-dom";
import React from "react";
import Layout from "../../components/Layout";
import PageBar from "../../components/PageBar";
import MyButton from "../../components/MyButton";
import Pagination from "../../components/Pagination";

const UserList = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="cities__main">
        <PageBar />
        <div className="cities__main__title">
          <h1>Users</h1>
        </div>
        <div className="cities__main--btn">
          <MyButton onClick={() => navigate("/user/create")}>
            Create user
          </MyButton>
        </div>
        {/* <span className="cities__main--span">
          Showing {currentPage}-{totalPageCount} of {dataCity.length} items.
        </span> */}
        {/* <table className="cities__main__list">
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
        </div> */}
      </div>
    </Layout>
  );
};

export default UserList;
