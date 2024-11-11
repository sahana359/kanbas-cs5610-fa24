import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <>
        <Link
          key = {link}
          id={"wd-account-signin-link"}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item active border border-0 ${pathname.includes(link)? "active" : "text-danger"}`}
        >
          {link}{" "}
        </Link> {" "}
        <br />
        </>
      ))}
    </div>
  );
}
