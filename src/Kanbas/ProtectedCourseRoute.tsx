import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
export default function ProtectedCourseRoute({ children }: { children: any }) {
  const { cid } = useParams();
  console.log("in protected");
  console.log(cid);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  type enrollmentType = {
    _id: string;
    user: string;
    course: string;
  };

  const enrolled = enrollments.some(
    (enrollment: enrollmentType) =>
      enrollment.user === currentUser._id && enrollment.course === cid
  );
  if (enrolled) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard"/>;
  }
}
