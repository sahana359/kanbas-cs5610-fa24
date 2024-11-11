import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
const dispatch = useDispatch();
const navigate = useNavigate();
const signin = () => {
const user = db.users.find(
(u: any) => u.username === credentials.username && u.password === credentials.password);
console.log("in here")
if (!user) return;
dispatch(setCurrentUser(user));
navigate("/Kanbas/Dashboard");
};
  return (
    <div id="wd-css-styling-forms">
      <h2>Signin</h2>
      <div className="mb-3">
        <div className="p-2">
          <input
          defaultValue={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            className="form-control"
            id="wd-username"
            placeholder="username"
          />
        </div>
        <div className="p-2">
          <input
          defaultValue={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="form-control"
            id="wd-password"
            placeholder="password"
          />
        </div>
        <div className="p-2">
        <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
        </div>
        <div className="p-2">
          <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
