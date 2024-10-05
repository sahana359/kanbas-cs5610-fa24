import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        id="wd-account-signin-link"
        to={`/Kanbas/Account/Signin`}
        className="list-group-item active border border-0"
      >
        {" "}
        Signin{" "}
      </Link>{" "}
      <br />
      <Link
        id="wd-account-signup-link"
        to={`/Kanbas/Account/Signup`}
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Signup{" "}
      </Link>{" "}
      <br />
      <Link
        id="wd-account-profile-link"
        to={`/Kanbas/Account/Profile`}
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Profile{" "}
      </Link>{" "}
      <br />
    </div>
  );
}
