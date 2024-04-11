import MyButton from "../MyButton";
import "../../styles/components/_myform.scss";

const MyForm = ({ setDataCity, dataCity, onSubmit }) => {
  const handleOnChange = (cityKey, newValue) =>
  setDataCity({ ...dataCity, [cityKey]: newValue });

  return (
    <div className="my-form">
      <form className="my-form--form" onSubmit={onSubmit}>
        <div className="my-form--form--input">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => handleOnChange("name", e.target.value)}
            value={dataCity.name}
            required
          />
        </div>
        <div className="my-form--form--input">
          <label>Province</label>
          <input
            type="text"
            onChange={(e) => handleOnChange("province", e.target.value)}
            value={dataCity.province}
            required
          />
        </div>
        <div className="my-form--form--input">
          <label>Country</label>
          <input
            type="text"
            onChange={(e) => handleOnChange("country", e.target.value)}
            value={dataCity.country}
            required
          />
        </div>
        <div className="my-form--form--button">
          <MyButton>Save</MyButton>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
