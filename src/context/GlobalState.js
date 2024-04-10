import React, { createContext, useReducer } from "react";

import appReducer from "./AppReducer";

const initialState = {
  cities: [
    // {
    // name: 'Ha Noi',
    // province: 'Hai Phong',
    // country: 'Viet Nam',
    // }
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addCity(city) {
    dispatch({
      type: "ADD_CITY",
      payload: city
    });
  }

  function updateCity(city) {
    dispatch({
      type: "UPDATE_CITY",
      payload: city
    });
  }

  function deleteCity(id) {
    dispatch({
      type: "DELETE_CITY",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        cities: state.cities,
        addCity,
        updateCity,
        deleteCity
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};