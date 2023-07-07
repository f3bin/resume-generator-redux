import { useState } from "react";
import React from "react";
import { useDispatch} from "react-redux";
import "./Form1.scss";
import { updateName } from "../../redux/formSlice";
import { MdOutlineDownloadDone } from "react-icons/md";

const Form1 = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmitForm1 = () => {
    name && dispatch(updateName(name)) 
  };

  return (
    <div className="form1-container">
      <div className="form-items">
        <h2>Enter your Name Here </h2>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          value={name}
          required
        />
      </div>
      <MdOutlineDownloadDone
        onClick={handleSubmitForm1}
        size={35}
        color="blue"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Form1;
