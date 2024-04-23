import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import "../../styles/pages/_cities.scss";
import { getUserDetailAPI, deleteUserAPI } from "../../services/users.js";

const UserDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  // const { cities, deleteCity } = useContext(GlobalContext);

  const [selectedUser, setSelectedUser] = useState([]);
  const currentUserId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserDetailAPI(currentUserId)
      setSelectedUser(userData)
    //  getUserDetailAPI(currentUserId)
    //     .then((response) => response.json())
    //     .then((data) => setSelectedUser(data))
    //     .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  console.log(selectedUser);

  // useEffect(() => {
  //   const cityId = currentUserId;
  //   const selectedUser = cities.find(
  //     (currentselectedUser) => currentselectedUser.id === parseInt(cityId)
  //   );
  //   setselectedUser(selectedUser);
  // }, [currentUserId, cities]);

  const handleDeleteBtn = () => {
    deleteUserAPI(selectedUser._id);
    navigate("/user/list");
  };
  const page = ["Home /", "Users /", selectedUser.firstname];

  const handleClickPageBar = (e) => {
    navigate("/");
  };

  // if (!selectedUser || !selectedUser._id) {
  //   return <div>Invalid City ID</div>;
  // }

  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="cities__main__title">
          <h1>{selectedUser.name}</h1>
        </div>
        <div className="cities__main__detail">
          <div className="cities__main__detail__btn">
            <MyButton
              className="cities__main__detail__btn__update"
              onClick={() => navigate(`/user/update/${selectedUser._id}`)}
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
              <td>{selectedUser._id}</td>
            </tr>
            <tr>
              <th>First Name</th>
              <td>{selectedUser.firstname}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{selectedUser.lastname}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{selectedUser.age}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{selectedUser.country}</td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetail;
