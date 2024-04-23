import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import PageBar from "../../components/PageBar";
import UserForm from "../../components/UserForm";
import { postUserAPI } from "../../services/users";

const UserCreate = () => {
  const navigate = useNavigate();
  const page = ["Home /", "Users /", "Create User"];

  const handleClickPageBar = (e) => {
    navigate("/user/list");
  };

  const handleAddUser = async (newUser) => {
    // addCity(newCity);
    await postUserAPI(newUser);
    navigate("/user/list");
  };
  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="cities__main__title">
          <h1>Create User</h1>
        </div>
        <UserForm onSubmit={handleAddUser}/>
      </div>
    </Layout>
  );
};

export default UserCreate;
