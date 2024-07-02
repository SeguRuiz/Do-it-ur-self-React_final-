import React, { useRef } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools } from "../../../utils/Fetchs/classes";
import ConfirmModal from "../Confirm/confirmModal";

const DeleteTags = ({ id }) => {
  const { userInfo, data, updateData } = useTheContext();
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.showModal();
  };

  const eliminate = () => {
    if (userInfo != "") {
      let userCopy = { ...userInfo };

      let filtered = userCopy.tags.filter((tags) => tags.id != id);

      userCopy.tags = filtered;

      let newUpdate = new Put_Tools(userCopy);

      newUpdate.put_The_Data(userCopy.id, newUpdate.data_For_Puts);

      setTimeout(() => {
        updateData(data + 1);
      }, 200);
      modalRef.current.close();
    }
  };

  return (
    <>
      <ConfirmModal
        ref={modalRef}
        acceptFunction={eliminate}
        text={"Deseas eliminar la categoria?"}
      />
      <button onClick={openModal} className="deleteBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#e8eaed"
          className="deleteIcon"
        >
          <path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z" />
        </svg>
      </button>
    </>
  );
};

export default DeleteTags;
