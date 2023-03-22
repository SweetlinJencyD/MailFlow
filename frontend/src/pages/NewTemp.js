import React, { useState } from "react";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Editor from "../components/editor/Editor";
import PreviewModal from "../components/previewModal/PreviewModal";

function NewTemp() {
  const [viewModal, setViewModal] = useState(false);
  const [code, setCode] = useState("");

  const view = () => {
    setViewModal(true);
  };

  const closeView = (value) => {
    setViewModal(value);
  };

  const data = (d) => {
    setCode(d);
  };

  return (
    <div>
      <div className='container'>
        <Sidebar />
        <Navbar />
        <section className='home'>
          <div style={{ marginTop: "100px" }}>
            {viewModal ? (
              <PreviewModal
                view={viewModal}
                closeView={closeView}
                code={code}
              />
            ) : (
              ""
            )}

            <Editor data={data} />
            <div className='temp_button_grp'>
              <button type='button' className='temp-save'>
                Save
              </button>
              <button
                type='button'
                className='temp-preview'
                onClick={() => view()}
              >
                Preview
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NewTemp;
