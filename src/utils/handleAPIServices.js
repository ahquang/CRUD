import { API_KEY } from "../constants/index";
export const handleDeleteDataFromAPI = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(
    `${process.env.REACT_APP_CITY_BASE_URL}/cities2/${id}`,
    requestOptions
  );
};

export const handlePostDataToAPI = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch(`${process.env.REACT_APP_CITY_BASE_URL}/cities2`, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const handleUpdateDataToAPI = async (data, id) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch(
    `https://crudcrud.com/api/${API_KEY}/cities2/${id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
