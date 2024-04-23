import { useState } from "react";
import "../../styles/components/_myform.scss";
import MyButton from "../MyButton";
import FormItem from "../FormItem";

const UserForm = ({ selectedUser, onSubmit }) => {
  const [dataUser, setDataUser] = useState(
    selectedUser || {
      firstname: "",
      lastname: "",
      age: "",
      country: "",
    }
  );

  const handleOnChange = (cityKey) => (e) => {
    const newValue = e.target.value;
    setDataUser({ ...dataUser, [cityKey]: newValue });
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    onSubmit(dataUser);
  };
  return (
    <div className="my-form">
      <form className="my-form--form" onSubmit={handleClickSubmit}>
        <FormItem
          label={"First Name"}
          handleOnChange={handleOnChange("firstname")}
          value={dataUser.firstname}
          required
        />
        <FormItem
          label={"Last Name"}
          handleOnChange={handleOnChange("lastname")}
          value={dataUser.lastname}
          required
        />
        <FormItem
          label={"Age"}
          handleOnChange={handleOnChange("age")}
          value={dataUser.age}
          type="number"
          required
        />
        <FormItem
          label={"Country"}
          handleOnChange={handleOnChange("country")}
          value={dataUser.country}
          required
        />
        <div className="my-form--form--button">
          <MyButton>Save</MyButton>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
