import React, { useState, useEffect } from "react";
import Stepper from "react-stepper-horizontal";
import "./StepperPart.scss";
import Form2 from "../form2/Form2";
import Form1 from "../form1/Form1";
import FinalResume from "../finalResume/FinalResume";
import { useSelector } from "react-redux";

const StepperPart = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [mandatoryFieldsFilled2, setMandatoryFieldsFilled2] = useState(false);
  const [mandatoryFieldsFilled1, setMandatoryFieldsFilled1] = useState(false);
  const DATA = useSelector((state) => state.form);

  useEffect(() => {
    // Check if all the mandatory fields are filled
    const isFieldsFilled1 = DATA.name !== "";
    const isFieldsFilled2 =
      DATA.age !== "" &&
      DATA.city !== "" &&
      DATA.number !== "" &&
      DATA.email !== "";

    // Update the completion status
    setMandatoryFieldsFilled1(isFieldsFilled1);
    setMandatoryFieldsFilled2(isFieldsFilled2);
  }, [DATA.name, DATA.age, DATA.city, DATA.number, DATA.email]);

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
        <button
          className="stepper-button-previous"
          disabled={currentPage === 0}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="stepper-button-next"
          disabled={
            (currentPage === 0 && !mandatoryFieldsFilled1) ||
            (currentPage === 1 && !mandatoryFieldsFilled2) ||
            currentPage === 2
          }
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperPart;
