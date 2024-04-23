export const getUserListAPI = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, requestOptions)
      const data = await res.json()
      return data;
    } catch(e) {
      console.log(e);
    }
  };
  
  export const deleteUserAPI = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(`${process.env.REACT_APP_BASE_URL}/users/${id}`, requestOptions);
  };
  
  export const postUserAPI = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch(`${process.env.REACT_APP_BASE_URL}/users`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  
  export const updateUserAPI = async (data, id) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch(`${process.env.REACT_APP_BASE_URL}/users/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  
  export const getUserDetailAPI = async (id) => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/users/${id}`, requestOptions)
      const data = await res.json()
      return data;
    } catch(e) {
      console.log(e);
    }
  };
  