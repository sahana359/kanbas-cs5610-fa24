import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollments } from "./reducer";
import ProtectedCourseRoute from "./ProtectedCourseRoute"

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "neu.webp",
    description: "New Description",
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const addNewCourse = () => {
    const courseId = new Date().getTime().toString();
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
    dispatch(addEnrollments({_id: new Date().getTime().toString(), course: courseId, user: currentUser._id}))
  };

  const deleteCourse = (courseIndex: string) => {
    console.log("hello in here");
    setCourses(courses.filter((course) => course._id !== courseIndex));
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "neu.webp",
      description: "New Description",
    });
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) return course;
        else return c;
      })
    );
  };
  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={<ProtectedRoute>
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              /> </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={ <ProtectedCourseRoute><Courses courses={courses} /></ProtectedCourseRoute>}
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
