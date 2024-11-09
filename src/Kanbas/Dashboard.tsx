import { Link } from "react-router-dom";
import * as db from "./Database";
import { useState } from "react";
export default function Dashboard() {
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
  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };

  const deleteCourse = (courseIndex: string) => {
    console.log("hello in here");
    setCourses(courses.filter((course) => course._id !== courseIndex));
  };

  const updateCourse = () => {
    setCourses(courses.map((c)=>{
      if(c._id == course._id)
        return course;
      else
        return c;
    }))
  }
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <br />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          {" "}
          Add{" "}
        </button>
        <button id="wd-update-course-click" className="btn btn-warning float-end me-3" onClick = {updateCourse}>Update</button>
      </h5> <br/>
      <input
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        className="form-control mb-2"
      />
      <textarea
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        className="form-control"
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              className="wd-dashboard-course  col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <img
                    src={`/images/courses/${course.image}`}
                    alt="neu"
                    width="100%"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    
                    <button
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
