import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import UserForm from "../../components/UserForm/index.jsx";
import "../../styles/pages/_cities.scss";
import { getUserDetailAPI, updateUserAPI } from "../../services/users.js";

const UserUpdate = () => {
  const navigate = useNavigate();
  const params = useParams();

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
  // useEffect(() => {
  //   const cityId = currentUserId;
  //   const selectedUser = cities.find(
  //     (currentselectedUser) => currentselectedUser.id === parseInt(cityId)
  //   );
  //   setselectedUser(selectedUser);
  // }, [currentUserId, cities]);

  const page = ["Home /", "Users /", `${selectedUser.name} /`, "Update"];

  const handleClickPageBar = (e) => {
    navigate('/');
  }

  const handleUpdateUser = (updatedUser) => {
    // updateCity(selectedUser);
    const selectedUserRemoveId = Object.fromEntries(Object.entries(updatedUser).slice(1));
    updateUserAPI(selectedUserRemoveId,selectedUser._id)
    navigate("/user/list");
  };


  if (!selectedUser || !selectedUser._id) {
    return <div>Invalid City ID</div>;
  }

  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar}/>
        <div className="cities__main__title">
          <h1>Update User</h1>
        </div>
        <UserForm selectedUser={selectedUser} onSubmit={handleUpdateUser}/>
      </div>
    </Layout>
  );
};

export default UserUpdate;
