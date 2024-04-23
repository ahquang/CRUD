const baseUrl = `${process.env.REACT_APP_BASE_URL}/cities2`

export const getCityListAPI = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return await fetch(`${process.env.REACT_APP_BASE_URL}/cities2`, requestOptions)
};

export const deleteCityAPI = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`${process.env.REACT_APP_BASE_URL}/cities2/${id}`, requestOptions);
};

export const postCityAPI = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch(`${process.env.REACT_APP_BASE_URL}/cities2`, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const updateCityAPI = async (data, id) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch(`${process.env.REACT_APP_BASE_URL}/cities2/${id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const getCityDetailAPI = async (id) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return await fetch(`${process.env.REACT_APP_BASE_URL}/cities2/${id}`, requestOptions)
};
