import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";

const initialState = {
    enrollments: enrollments || []
}
console.log("enrollments: ");
console.log(enrollments);
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers:{
        addEnrollments : (state, {payload: enrollment}) => {
            state.enrollments = [...state.enrollments, enrollment]
        },
        deleteEnrollments : (state, {payload: enrollment}) => {
            state.enrollments = state.enrollments.filter((currEnrollment) => currEnrollment.course !== enrollment.course && currEnrollment.user !== enrollment.updateModule)
        }
    }
});
export const {addEnrollments, deleteEnrollments} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;