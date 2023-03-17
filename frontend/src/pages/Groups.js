import React, { useState } from "react";

import Modal from "../components/Modal/Modal";

function Groups() {
  const [modalView, setModalView] = useState(false);

  const handleModal = (res) => {
    setModalView(res);
  };

  return (
    <div>
      <button class='add-record-btn' onClick={() => setModalView(true)}>
        Add Group
      </button>
      <div>
        {modalView ? (
          <div>
            <Modal handleModal={handleModal} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Groups;
