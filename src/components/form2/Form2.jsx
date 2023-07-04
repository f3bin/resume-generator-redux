import React from "react";
import "./Form2.scss";
const Form2 = () => {
  return (
    <div className="form2-container">
      <h3>Tell more about you !</h3>
      <div className="form2-aboutYou">
        <div className="form2-aboutYou-left">
          <label>name</label>
          <input type="text" value="" disabled />
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
