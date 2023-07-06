import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     name: '',
     age: 0,
     city: '',
     number: 0,
     email: '',
     educationDetails: [{ institute: "", course: "" }],
     experiences: [{jobTitle:"",employer:"",duration:''}],
     skills: [{skill:""}],
}

const formSlice = createSlice({
     name: "form",
     initialState,
     reducers: {
          updateName: (state, action) => {
               state.name = action.payload
          },
          updateAge: (state, action) => {
               state.age = action.payload
          },
          updateCity: (state, action) => {
               state.city = action.payload
          },
          updateNumber:(state,action) =>{
               state.number = action.payload
          },
          updateEmail: (state, action) => {
               state.email = action.payload
          },
          addEducationDetail: (state) => {
               state.educationDetails.push({ institute: '', course: '' });
          },
          updateEducationDetail: (state, action) => {
               const { index, institute, course } = action.payload;
               state.educationDetails[index][institute] = course;
          },

          addExperienceDetail: (state, action) => {
               state.experiences.push({jobTitle:'',employer:'',duration:''})
          },
          
          addSkills: (state, action) => {
               state.skills.push({skill:''})
          },
     }
})

export default formSlice.reducer;
export const { updateName, updateAge,updateNumber, updateCity, updateEmail, 
     addEducationDetail,updateEducationDetail, addExperienceDetail, addSkills } = formSlice.actions;