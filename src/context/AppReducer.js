import { handleSaveData } from "../utils/handleSaveData";
export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_CITY":
      const newData = {
        ...state,
        cities: [...state.cities, action.payload],
      };
      handleSaveData(newData);
      return newData;

    case "UPDATE_CITY":
      const updatedCity = action.payload;

      const updatedCities = state.cities.map((city) => {
        if (city.id === updatedCity.id) {
          return updatedCity;
        }
        return city;
      });

      return {
        ...state,
        cities: updatedCities,
      };

    case "DELETE_CITY":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    default:
      return state;
  }
}
