export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-assignment-group">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
              <option value="ASSIGNMENTS1">ASSIGNMENTS1</option>
              <option value="ASSIGNMENTS2">ASSIGNMENTS2</option>
              <option value="ASSIGNMENTS3">ASSIGNMENTS3</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-grade">Display Grade as</label>
          </td>
          <td>
            <select id="wd-assignment-grade">
              <option value="Percentage">Percentage</option>
              <option value="GPA">GPA</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-submission-type">
              Submission Type
            </label>
          </td>
          <td>
            <select id="wd-assignment-submission-type">
              <option value="Online">Online</option>
              <option value="InClass">In-Class</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <p>Online Entry Options</p>
            <input
              type="checkbox"
              name="check-online-options"
              id="wd-chkbox-text-entry"
            />
            <label htmlFor="wd-chkbox-comedy">Text Entry</label>
            <br />
            <input
              type="checkbox"
              name="check-online-options"
              id="wd-chkbox-website-url"
            />
            <label htmlFor="wd-chkbox-drama">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="check-online-options"
              id="wd-chkbox-media-recordings"
            />
            <label htmlFor="wd-chkbox-scifi">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-online-options"
              id="wd-chkbox-student-annotation"
            />
            <label htmlFor="wd-chkbox-fantasy">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              name="check-online-options"
              id="wd-chkbox-file-upload"
            />
            <label htmlFor="wd-chkbox-fantasy">File Upload</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <p>Due</p>
            <input
              type="date"
              id="wd-assignment-due"
              defaultValue="2024-05-13"
            />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <p>Available from &nbsp; &nbsp; &nbsp; Until</p>
            <input
              type="date"
              id="wd-assignment-available-from"
              defaultValue="2024-05-06"
            />{" "}
            &nbsp;
            <input
              type="date"
              id="wd-assignment-until"
              defaultValue="2024-05-20"
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="right" valign="top">
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
