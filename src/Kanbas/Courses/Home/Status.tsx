import { MdUnpublished } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { LuImport } from "react-icons/lu";
import { FaFileImport } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { TfiAnnouncement } from "react-icons/tfi";
import { GrAnalytics } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
export default function CourseStatus() {
    return (
      <div id="wd-course-status" className="p-2 p-md-4 p-lg-5" style={{ width: "370px" }}>
        <h2>Course Status</h2>
        <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-block btn-secondary w-100">
            <MdUnpublished className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-block btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div>
      <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <LuImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <FaFileImport className="me-2 fs-5" /> Import from Commons </button>

        <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> Choose Home Page </button>

        <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <SiCoursera className="me-2 fs-5" /> View Course Stream </button>

        <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <TfiAnnouncement className="me-2 fs-5" /> New Announcement </button>

        <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <GrAnalytics className="me-2 fs-5" /> New Analytics </button>

        <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <IoIosNotifications className="me-2 fs-5" /> View Course Notification </button>
      </div>
  );}
  