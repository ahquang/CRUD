import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_PAGE_SIZE } from "../../constants";
import Layout from "../../components/Layout";
import PageBar from "../../components/PageBar";
import MyButton from "../../components/MyButton";
import Pagination from "../../components/Pagination";
import detailIcon from "../../assets/visibility_24px.svg";
import deleteIcon from "../../assets/delete_24px.svg";
import updateIcon from "../../assets/create_24px.svg";
import FormItem from "../../components/FormItem";
import TableList from "../../components/TableList";
import "../../styles/pages/_cities.scss";
import { getUserListAPI, deleteUserAPI } from "../../services/users";

const UserList = () => {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const page = ["Home /", "Users"];

  const handleClickPageBar = (e) => {
    navigate("/user/list");
  };

  const fetchData = async () => {
    const userData = await getUserListAPI();
    setDataUser(userData)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    await deleteUserAPI(id);
    fetchData();
  };

  const filteredItems = dataUser.filter(
    (item) =>
      item.age.toLowerCase().includes(filterText.toLowerCase().trim()) ||
      item.firstname.toLowerCase().includes(filterText.toLowerCase().trim()) ||
      item.lastname.toLowerCase().includes(filterText.toLowerCase().trim()) ||
      item.country.toLowerCase().includes(filterText.toLowerCase().trim())
  );

  const handleOnFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  // const column = ["firstname", "lastname", "age", "country"];
  // const handleClickDelete = (data) => {
  //   handleDeleteUser(data._id);
  // };

  // const handleClickDetail = (data) => {
  //   navigate(`/user/detail/${data._id}`);
  // };

  // const handleClickUpdate = (data) => {
  //   navigate(`/user/update/${data._id}`);
  // };

  const totalPageCount = Math.ceil(filteredItems.length / DEFAULT_PAGE_SIZE);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * DEFAULT_PAGE_SIZE;
    const lastPageIndex = firstPageIndex + DEFAULT_PAGE_SIZE;
    return filteredItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredItems]);

  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="cities__main__title">
          <h1>Users</h1>
        </div>
        <div className="cities__main--btn">
          <MyButton onClick={() => navigate("/user/create")}>
            Create user
          </MyButton>
        </div>
        <span className="cities__main--span">
          Showing {currentPage}-{totalPageCount} of {dataUser.length} items.
        </span>
        <FormItem label={"Filter"} handleOnChange={handleOnFilterChange} />
        <table className="cities__main__list">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Country</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((user, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.age}</td>
                <td>{user.country}</td>
                <td>
                  <img
                    src={detailIcon}
                    alt=""
                    onClick={() => navigate(`/user/detail/${user._id}`)}
                  />
                  <img
                    src={updateIcon}
                    alt=""
                    onClick={() => navigate(`/user/update/${user._id}`)}
                  />
                  <img
                    src={deleteIcon}
                    alt=""
                    onClick={() => {
                      handleDeleteUser(user._id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <TableList
          data={currentTableData}
          columns={column}
          // handleClickDelete={handleClickDelete}
          // handleClickDetail={handleClickDetail}
          // handleClickUpdate={handleClickUpdate}
        /> */}
        <div className="cities__main__pagination">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredItems.length}
            pageSize={DEFAULT_PAGE_SIZE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default UserList;
