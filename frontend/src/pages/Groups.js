import React, { useState } from "react";

import Modal from "../components/Modal/Modal";

function Groups() {
  const [modalView, setModalView] = useState(false);
  return (
    <div>
      <button class='add-record-btn' onClick={() => setModalView(true)}>
        Add Group
      </button>
      <div>{modalView ? <Modal /> : ""}</div>
    </div>
  );
}

export default Groups;
