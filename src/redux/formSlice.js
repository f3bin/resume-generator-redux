import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     name: '',
     age: 0,
     city:'',
     number: '',
     email: '',
     qualifications: [],
     skills: [],
}

const formSlice = createSlice({
     name: "form",
     initialState,
     reducers: {
          updateName: (state, action) => {
               state.name = action.payload
          }
     }
})

export default formSlice.reducer;
export const { updateName } = formSlice.actions;