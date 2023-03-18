import React, { useState, useEffect } from "react";
import axios from "axios";

import Modal from "../components/Modal/Modal";
import GroupCard from "../components/groupCard/GroupCard";

function Groups() {
  const [modalView, setModalView] = useState(false);
  const [groups, setGroups] = useState([]);

  const handleModal = (res) => {
    setModalView(res);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3100/api/v1/user/viewgroups")
      .then((res) => {
        setGroups(res.data.groups);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <button class='add-record-btn' onClick={() => setModalView(true)}>
        Add Group
      </button>
      <div class='group-grid-container'>
        {groups.map((group) => (
          <GroupCard name={group.name} emails={group.emails.length} />
        ))}
      </div>
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
