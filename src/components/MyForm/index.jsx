import MyButton from "../MyButton";
import { useState } from "react";
import "../../styles/components/_myform.scss";
import FormItem from "../FormItem";

const MyForm = ({ selectedCity, onSubmit }) => {
  const [dataCity, setDataCity] = useState(
    selectedCity || {
      name: "",
      province: "",
      country: "",
    }
  );

  const handleOnChange = (cityKey) => (e) => {
    const newValue = e.target.value;
    setDataCity({ ...dataCity, [cityKey]: newValue });
  };

  const handleClickSubmit = (e) => {
    onSubmit(dataCity);
  };

  return (
    <div className="my-form">
      <form className="my-form--form" onSubmit={handleClickSubmit}>
        <FormItem label={'Name'} handleOnChange={handleOnChange("name")} value={dataCity.name} required/>
        <FormItem label={'Province'} handleOnChange={handleOnChange("province")} value={dataCity.province} required/>
        <FormItem label={'Country'} handleOnChange={handleOnChange("country")} value={dataCity.country} required/>
        <div className="my-form--form--button">
          <MyButton>Save</MyButton>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
