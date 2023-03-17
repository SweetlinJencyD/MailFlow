import React from "react";
import "../styles/dashboard.css";

function Send() {
  return (
    <div>
      <div class='email-card'>
        <h2 class='email-card__title'>Compose New Email</h2>
        <form class='email-card__form'>
          <div class='form-group'>
            <label for='emailTo'>To:</label>
            <select class='form-control' id='emailTo'>
              <option>Select a group</option>
              <option>Group A</option>
              <option>Group B</option>
              <option>Group C</option>
            </select>
          </div>
          <div class='form-group'>
            <label for='emailSubject'>Subject:</label>
            <input type='text' class='form-control' id='emailSubject' />
          </div>
          <div class='form-group'>
            <label for='emailMessage'>Message:</label>
            <textarea
              class='form-control'
              id='emailMessage'
              rows='8'
            ></textarea>
          </div>
          <div class='email-card__actions'>
            <button type='submit' class='btn btn-primary'>
              Send
            </button>
            <button type='button' class='btn btn-secondary'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Send;
