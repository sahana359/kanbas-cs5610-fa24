import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.webp" alt = "React Logo" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/neu.webp" alt = "NEU Logo" width={200} />
            <div>
              <h5>CS5010 Programming in Design Paradigm</h5>
              <p className="wd-dashboard-course-title">
                Programming in Design Paradigm
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/neu.webp" alt = "NEU Logo" width={200} />
            <div>
              <h5>CS5800 Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/neu.webp" alt = "NEU Logo" width={200} />
            <div>
              <h5>CS5610 Web Development</h5>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/neu.webp" alt = "NEU Logo" width={200} />
            <div>
              <h5>CS6140 Machine Learning</h5>
              <p className="wd-dashboard-course-title">
                Machine Learning
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/neu.webp" alt = "NEU Logo" width={200} />
            <div>
              <h5>CS6650 Building Scalable Distributed Systems</h5>
              <p className="wd-dashboard-course-title">
                Building Scalable Distributed Systems
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/neu.webp" alt = "NEU Logo" width={200} />
            <div>
              <h5>CS6220 Data Mining</h5>
              <p className="wd-dashboard-course-title">
                Data Mining
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/neu.webp" alt = "NEU Logo" width={200} />
            <div>
              <h5>CS5520 Mobile Application Development</h5>
              <p className="wd-dashboard-course-title">
                Mobile Application Development
              </p>
              <button> Go </button><br/><br/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
