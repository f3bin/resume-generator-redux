
import React from "react";
import { useDispatch, useSelector} from "react-redux";
import "./Form1.scss";
import { updateName } from "../../redux/formSlice";


const Form1 = () => {
  const dispatch = useDispatch();
  const DATA = useSelector(state=> state.form)

  return (
    <div className="form1-container">
      <div className="form-items">
        <h2>Enter your Name Here </h2>
        <input
          onChange={(e) => dispatch(updateName(e.target.value))}
          type="text"
          name="name"
          value={DATA.name}
          required
        />
      </div>
    </div>
  );
};

export default Form1;
