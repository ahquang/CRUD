import React from "react";
import "../../styles/components/_formitem.scss";

const FormItem = ({ label, value, handleOnChange, required = true }) => {
  return (
    <div className="form-item">
      <label>{label}</label>
      <input
        type="text"
        onChange={handleOnChange}
        value={value}
        required={required}
      />
    </div>
  );
};

export default FormItem;
