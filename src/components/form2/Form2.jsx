import React from "react";
import { useDispatch } from "react-redux";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  updateAge,
  updateCity,
  updateEmail,
  updateImage,
  updateNumber
} from "../../redux/formSlice";
import "./Form2.scss";
import useFormHandles from "../../hooks/useFormHandles";


const Form2 = () => {
  const {
    DATA,
    handleAddEducation,
    handleAddExperience,
    handleAddSkill,
    handleChangeEducation,
    handleChangeExperience,
    handleChangeSkills,
  } = useFormHandles();
  const dispatch = useDispatch();

  const handleFileChange = (e) =>{
    const file = e.target.files[0];
    dispatch(updateImage(file));
  }
  // const handleSubmitForm2 = () => {
  //   if (!DATA.name || !DATA.age || !DATA.city || !DATA.number || !DATA.email) {
  //    dispatch(updateStepper(false)) }
  //    else{
  //     dispatch(updateStepper(true))
  //    } 
  // };

  return (
    <div className="form2-container">
      <h3>Tell more about you !</h3>
      <div className="form2-aboutYou">
        <div className="form2-aboutYou-part1">
          <label>name</label>
          <input type="text" value={DATA.name} />
          <label>age</label>
          <input
            type="number"
            required
            value={DATA.age}
            onChange={(e) => dispatch(updateAge(e.target.value))}
          />
        </div>
        <div className="form2-aboutYou-part2">
          <label>phone</label>
          <input
            type="number"
            value={DATA.number}
            onChange={(e) => dispatch(updateNumber(e.target.value))}
          />
          <label>city</label>
          <input
            type="text"
            value={DATA.city}
            onChange={(e) => dispatch(updateCity(e.target.value))}
          />
        </div>
        <div className="form2-aboutYou-part3">
          <label>Upload image here</label>
          <input className="icon-fileUpload" type="file" name="profile"  onChange={handleFileChange}/>
          <label>email</label>
          <input
          type="email"
            value={DATA.email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
        </div>
      </div>

      <h3>Other details</h3>
      <div className="otherDetails">
        <div className="otherDetails-education-part">
          <h3>Educational Details</h3>
          {DATA.educationDetails.map((education, index) => (
            <div key={index} className="otherDetails-education">
              <input
                type="text"
                name="institute"
                placeholder="institute"
                value={education.institute}
                onChange={(e) => handleChangeEducation(e, index)}
              />

              <input
                type="text"
                name="course"
                placeholder="course"
                value={education.course}
                onChange={(e) => handleChangeEducation(e, index)}
              />
            </div>
          ))}
          <IoIosAddCircleOutline
            size={30}
            style={{ cursor: "pointer" }}
            onClick={handleAddEducation}
          />
        </div>

        <div className="otherDetails-skills-part">
          <h3>Skills</h3>
          {DATA.skills.map((skillItem, index) => (
            <div key={index} className="otherDetails-skills">
              <input
                type="text"
                placeholder="skill"
                name="skill"
                value={skillItem.skill}
                onChange={(e) => handleChangeSkills(e, index)}
              />
            </div>
          ))}
          <IoIosAddCircleOutline
            size={30}
            style={{ cursor: "pointer" }}
            onClick={handleAddSkill}
          />
        </div>

        <div className="otherDetails-experience-part">
          <h3>Experiences</h3>
          {DATA.experiences.map((experience, index) => (
            <div key={index} className="otherDetails-experience">
              <input
                type="text"
                name="jobTitle"
                placeholder="job title"
                value={experience.jobTitle}
                onChange={(e) => handleChangeExperience(e, index)}
              />

              <input
                type="text"
                name="employer"
                placeholder="employer"
                value={experience.employer}
                onChange={(e) => handleChangeExperience(e, index)}
              />

              <input
                type="number"
                name="duration"
                placeholder="duration"
                value={experience.duration}
                onChange={(e) => handleChangeExperience(e, index)}
              />
            </div>
          ))}
          <IoIosAddCircleOutline
            size={30}
            style={{ cursor: "pointer" }}
            onClick={handleAddExperience}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Form2;
