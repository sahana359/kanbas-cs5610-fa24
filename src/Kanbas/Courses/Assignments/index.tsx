import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import GreenCheckmark from "./GreenCheckmark";
import { IoAddOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignment" className="list-group rounded-0">
        <li className="wd-module" list-group-item p-0 mb-5 fs-5 border-gray>
          <div className="wd-title p-3 ps-2 bg-secondary ps-1 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <button className="btn btn-lg btn-secondary me-2 float-end"><IoMdArrowDropdown /></button>
              <h3 id="wd-assignments-title">
                ASSIGNMENTS
              </h3>
            </div>
            <div>
              <button className="btn btn-lg btn-secondary me-2 float-end"><IoAddOutline /></button>
              <span className="border border-dark p-1 rounded me-2  float-end"> 40% of Total</span></div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-2 fs-3" />
                <p>
                  <a className="wd-assignment-link text-dark text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/123"><h5>A1 - ENV + HTML</h5></a>
                  <span className="text-danger">Multiple modules</span> | <b>Not available until</b> May 6 at 12:00am | <br />
                  <b> Due</b> May 13 at 11:59pm | 100 pts
                </p>
              </div>
              <div>
                <GreenCheckmark />
                <button className="btn btn-lg btn-transparent me-2 float-end"><IoEllipsisVertical className="fs-4" /></button>

              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-2 fs-3" />
                <p><a className="wd-assignment-link text-dark text-decoration-none"
                  href="#/Kanbas/Courses/1234/Assignments/123"><h5>A2 - CSS + BOOTSTRAP</h5></a>
                  <span className="text-danger">Multiple modules</span> | <b>Not available until</b> May 13 at 12:00am | <br />
                  <b> Due</b> May 20 at 11:59pm | 100 pts
                </p>
              </div>
              <div>
                <GreenCheckmark />
                <button className="btn btn-lg btn-transparent me-2 float-end"><IoEllipsisVertical className="fs-4" /></button>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-2 fs-3" />
                <p><a className="wd-assignment-link text-dark text-decoration-none"
                  href="#/Kanbas/Courses/1234/Assignments/123"><h5>A3 - JAVASCRIPT + REACT</h5></a>
                  <span className="text-danger">Multiple modules</span> | <b>Not available until</b> May 20 at 12:00am | <br />
                  <b> Due</b> May 27 at 11:59pm | 100 pts
                </p>
              </div>
              <div>
                <GreenCheckmark />
                <button className="btn btn-lg btn-transparent me-2 float-end"><IoEllipsisVertical className="fs-4" /></button>
              </div>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  );
}