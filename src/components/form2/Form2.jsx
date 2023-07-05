import React from "react";
import { UseSelector, useSelector } from "react-redux";
import "./Form2.scss";

const Form2 = () => {
  const name = useSelector(state =>state.form.name)
  return (
    <div className="form2-container">
      <h3>Tell more about you !</h3>
      <div className="form2-aboutYou">
        <div className="form2-aboutYou-left">
          <label>name</label>
          <input type="text" value={name} disabled />
          <label>age</label>
          <input type="number" />
          <label>city</label>
          <input type="text" />
          <label>phone</label>
          <input type="number" />
          <label>email</label>
          <input type="email" />
        </div>
        <div className="form2-aboutYou-right">
          <input className="icon-fileUpload" type="file" name="profile" />
        </div>
      </div>
    </div>
  );
};

export default Form2;
