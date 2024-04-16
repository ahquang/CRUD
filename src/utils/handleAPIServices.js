import { API_KEY } from "../constants/index";
export const handleDeleteDataFromAPI = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(
    `https://crudcrud.com/api/${API_KEY}/cities2/${id}`,
    requestOptions
  );
};

export const handlePostDataToAPI = (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch(`https://crudcrud.com/api/${API_KEY}/cities2`, requestOptions)
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
