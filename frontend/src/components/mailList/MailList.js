import React from "react";
import "./mailList.css";

function MailList({ data }) {
  return (
    <div>
      <table class='fl-table'>
        <thead>
          <tr>
            <th>Slno.</th>
            <th>Group</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Date</th>
            <th>Time</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.groupId.name}</td>
              <td>{data.subject}</td>
              <td>Pending</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MailList;
