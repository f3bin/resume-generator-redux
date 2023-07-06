import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  addEducationDetail,
  updateEducationDetail,
  addExperienceDetail,
  addSkills,updateAge,updateCity,updateEmail,
  updateNumber
} from "../../redux/formSlice";
import "./Form2.scss";

const Form2 = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.form.name);

  const DATA = useSelector((state) => state.form);

  const handleAddEducation = () => {
    dispatch(addEducationDetail());
  };
  const handleAddExperience = () => {
    dispatch(addExperienceDetail());
  };
  const handleAddSkill = () =>{
    dispatch(addSkills());
  }

  const handleChangeEducation = (e, index) => {
    const { name, value } = e.target;
    dispatch(updateEducationDetail({ index, name, value }));
  };

  return (
    <div className="form2-container">
      <h3 >Tell more about you !</h3>
      <div className="form2-aboutYou">
        <div className="form2-aboutYou-left">
          <label>name</label>
          <input type="text" value={name} />
          <label>age</label>
          <input type="number" onChange={e => dispatch(updateAge(e.target.value))}/>
          <label>city</label>
          <input type="text" onChange={e => dispatch(updateCity(e.target.value))}/>
        </div>
        <div className="form2-aboutYou-right">
          <input className="icon-fileUpload" type="file" name="profile" />
          <label>phone</label>
          <input type="number" nChange={e => dispatch(updateNumber(e.target.value))}/>
          <label>email</label>
          <input type="email" onChange={e => dispatch(updateEmail(e.target.value))}/>
        </div>
      </div>

      <h3>Other details</h3>
      <div className="otherDetails">
        <div className="otherDetails-education-part">
          <h3>Educational Details</h3>
          {DATA.educationDetails.map((education, index) => (
            <div key={index} className="otherDetails-education">
              <label>Institute</label>
              <input
                type="text"
                name="institute"
                value={education.institute}
                onChange={(e) => handleChangeEducation(e, index)}
              />
              <label>Course</label>
              <input
                type="text"
                name="course"
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
              <label>Add your skill</label>
              <input type="text" name="skill" value={skillItem.skill} />
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
              <label>Job title</label>
              <input type="text" name="jobTitle" value={experience.jobTitle} />
              <label>Employer</label>
              <input type="text" name="employer" value={experience.employer} />
              <label>Duration(years)</label>
              <input
                type="number"
                name="duration"
                value={experience.duration}
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
