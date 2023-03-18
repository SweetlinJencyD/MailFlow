import React, { useState } from "react";
import Papa from "papaparse";
import validator from "validator";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import "./modal.css";

const GroupModal = ({ handleModal }) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [validEmails, setvalidEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const validEmail = [];

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        results.data.forEach((mail) => {
          if (validator.isEmail(mail["Email Address"])) {
            validEmail.push(mail["Email Address"]);
          }
        });
      },
    });
    setvalidEmails(validEmail);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .post(`http://localhost:3100/api/v1/user/addgroup`, {
        name: name,
        emails: validEmails,
      })
      .then((res) => {
        console.log("successfully added.");
        setFile(null);
        setName("");
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
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
                onChange={(e) => setName(e.target.value)}
              />
              <label
                className='labels-name'
                style={{ color: "#7d7d7d", fontSize: "13px" }}
              >
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
            <label
              className='labels-name'
              style={{ color: "#7d7d7d", fontSize: "13px" }}
            >
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
          <button
            type='button'
            className='cancel-button'
            onClick={() => handleModal(false)}
          >
            Cancel
          </button>
          <button
            type='button'
            className='submit-button'
            onClick={handleSubmit}
            disabled={!file && !name && isLoading}
          >
            {isLoading ? (
              <div className='submit-loading'>
                <Circles
                  height='14'
                  width='14'
                  color='#fff'
                  ariaLabel='circles-loading'
                  wrapperStyle={{}}
                  wrapperClass=''
                  visible={true}
                />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GroupModal;
