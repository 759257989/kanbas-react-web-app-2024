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

        <br></br>
        <tr>
          Assignment Group
          <select name="assignmentgroup">
            <option value="A1">a1</option>
            <option value="A2">a2</option>
            <option value="A3">a3</option>
          </select>
        </tr>
        <br></br>

        <tr>
          Display Grade as
          <select name="grade">
            <option value="Percentage">Percentage</option>
            <option value="Letter">Letter</option>
          </select>
        </tr>

        <br></br>
        <tr>
          Submission Type
          <select name="type">
            <option value="Online">Online</option>
            <option value="Paper">Paper</option>
          </select>
        </tr>

        <br></br>
        <tr>
          Submission Type
          <select name="type">
            <option value="Online">Online</option>
            <option value="Paper">Paper</option>
          </select>
        </tr>

        <td align="right" valign="top">
          <label htmlFor="wd-points">Online Entry Options</label>
          <div id="wd-select-many-genre">
            <div>
              <input
                type="checkbox"
                id="option-textentry"
                value="TEXTENTRY"
                defaultChecked
              />
              <label htmlFor="option-textentry">Text Entry</label>
            </div>
            <div>
              <input type="checkbox" id="option-website" value="WEBSITE" />
              <label htmlFor="option-website">Website URL</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option-media"
                value="MEDIA"
                defaultChecked
              />
              <label htmlFor="option-media">Media Recordings</label>
            </div>
            <div>
              <input type="checkbox" id="option-student" value="STUDENT" />
              <label htmlFor="option-student">Student Annotation</label>
            </div>
            <div>
              <input type="checkbox" id="option-file" value="FILE" />
              <label htmlFor="option-file">File Uploads</label>
            </div>
          </div>
        </td>

        <br></br>
        <tr>
          Assign to
          <input
            id="assign"
            type="text"
            title="assign"
            placeholder="Everyone"
          />
        </tr>

        <br></br>

        <tr>
          <td>
            <label htmlFor="dueDate">Due</label>
          </td>
          <td>
            <input type="date" id="dueDate" value="2011-11-22" />
          </td>
        </tr>

        <br></br>
        <tr>
          <td>
            <td>
              <label htmlFor="Available">Available from</label>
            </td>
            <td>
              <input type="date" id="available" value="2011-11-22" />
            </td>
          </td>

          <td>
            <label htmlFor="Until">Until</label>
          </td>
          <td>
            <input type="date" id="until" value="2011-11-22" />
          </td>
        </tr>
      </table>
    </div>
  );
}
