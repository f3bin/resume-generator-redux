import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";
import "./StepperPart.scss";
import Form2 from "../form2/Form2";
import Form1 from "../form1/Form1";
import FinalResume from "../finalResume/FinalResume";

const StepperPart = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="stepper-container">
      <Stepper
        steps={[
          { title: "Name" },
          { title: "Details" },
          { title: "Final Resume" },
        ]}
        activeStep={currentPage}
      />

      {currentPage === 0 && <Form1 />}
      {currentPage === 1 && <Form2 />}
      {currentPage === 2 && <FinalResume />}
      
    <div className="stepper-button-container">
      <button className="stepper-button" disabled={currentPage === 0} onClick={handlePrevious}>
        Previous
      </button>
      <button className="stepper-button" disabled={currentPage === 2} onClick={handleNext}>
        Next
      </button>
      </div>

      
    </div>
  );
};

export default StepperPart;
