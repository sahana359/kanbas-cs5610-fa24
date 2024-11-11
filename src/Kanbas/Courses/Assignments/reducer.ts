import { assignments } from "../../Database";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: assignments || [],
};
const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const selectAssignment = state.assignments.find(
        (currAssignment) => assignment._id === currAssignment._id
      );
      if (selectAssignment) {
        state.assignments = state.assignments.map((currentAssignment) => currentAssignment._id === assignment._id ? assignment:currentAssignment);
      } else {
        state.assignments = [...state.assignments, assignment] as any;
      }
    },
    deleteAssignment: (state, {payload:assignmentId}) =>{
        state.assignments = state.assignments.filter((currAssignment)=>currAssignment._id !== assignmentId)
    }
  },
});
export const { addAssignment, deleteAssignment} = assignmentSlice.actions;
export default assignmentSlice.reducer;
