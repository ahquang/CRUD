import { handleSaveData } from "../utils/handleSaveData";
import { ADD_CITY, DELETE_CITY, UPDATE_CITY } from "../constants";

export default function appReducer(state, action) {
  switch (action.type) {
    case ADD_CITY:
      const newData = {
        ...state,
        cities: [...state.cities, action.payload],
      };
      // handlePostDataToAPI(newData);
      return newData;

    case UPDATE_CITY:
      const updatedCity = action.payload;

      const updatedCities = state.cities.map((city) => {
        console.log(city);
        if (city._id === updatedCity._id) {
          return updatedCity;
        }
        return city;
      });

      const newDataUpdate = {
        ...state,
        cities: updatedCities,
      };
      // handleSaveData(newDataUpdate);
      return newDataUpdate

    case DELETE_CITY:
      const newDataDelete = {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
      // handleSaveData(newDataDelete);
      return newDataDelete;
      

    default:
        return state;
  }
}
