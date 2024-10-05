import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Ted</span>{" "}
              <span className="wd-last-name">Mosby</span></td>
            <td className="wd-login-id">002415879</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-11-10</td>
            <td className="wd-total-activity">08:17:22</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Robin</span>{" "}
              <span className="wd-last-name">Scherbatsky</span></td>
            <td className="wd-login-id">0021456987</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-01-21</td>
            <td className="wd-total-activity">07:17:00</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Lily</span>{" "}
              <span className="wd-last-name">Aldrin</span></td>
            <td className="wd-login-id">002415698</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-04-14</td>
            <td className="wd-total-activity">08:08:08</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Marshall</span>{" "}
              <span className="wd-last-name">Erikson</span></td>
            <td className="wd-login-id">002415987</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-11-10</td>
            <td className="wd-total-activity">12:08:33</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Barney</span>{" "}
              <span className="wd-last-name">Stinson</span></td>
            <td className="wd-login-id">002458963</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2019-11-10</td>
            <td className="wd-total-activity">01:08:33</td> </tr>
        </tbody>
      </table>
    </div> );}