import React, { useState } from "react";
import "./modal.css";

const Modal = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    // do something with the file and text
    setFile(null);
    setText("");
  };

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <h2>Add Group</h2>
        <form>
          <div className='form-group'>
            <div class='text-box'>
              <label
                htmlFor='name'
                className='labels'
                style={{
                  marginTop: "-25px",
                }}
              >
                Group Name
              </label>
              <input
                type='text'
                id='name'
                placeholder='Enter your text here...'
              />
              <label className='labels-name'>
                This will be your new group name, Ex Newsletter.
              </label>
            </div>
            <label
              htmlFor='name'
              className='labels'
              style={{
                marginTop: "-25px",
              }}
            >
              Select File
            </label>
            <label htmlFor='file-upload' className='file-upload-label'>
              {file ? file.name : "Choose file"}
            </label>
            <label className='labels-name'>
              Select the CSV file that includes email addresses.
            </label>
            <input
              type='file'
              id='file-upload'
              accept='.csv'
              onChange={handleFileUpload}
              className='file-upload'
            />
          </div>
          {/* <div className='form-group'>
            <label htmlFor='text-input'>Text</label>
            <input
              type='text'
              id='text-input'
              value={text}
              onChange={handleTextChange}
            />
          </div> */}
          <button type='button' className='cancel-button'>
            Cancel
          </button>
          <button
            type='button'
            className='submit-button'
            onClick={handleSubmit}
            disabled={!file && !text}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
