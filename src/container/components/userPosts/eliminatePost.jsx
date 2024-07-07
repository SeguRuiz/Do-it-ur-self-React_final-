import React, { useRef } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import ConfirmModal from "../Confirm/confirmModal";
import { Put_Tools, Delete_ToolsPosts } from "../../../utils/Fetchs/classes";

const EliminatePost = ({ id }) => {
  const { user_Posts, userInfo, data, updateData, publicData } = useTheContext();
  const modalRef = useRef();

  const eliminar = () => {
    let postsCopy = [...user_Posts];
    let userCopy = { ...userInfo };
    let filtered = postsCopy.filter((posts) => posts.id != id);
    let thePorduct_inPublic = publicData.filter(info => info.post.id == id)

    userCopy.posts = filtered;

    let newUpdate = new Put_Tools(userCopy);
    newUpdate.put_The_Data(userCopy.id, newUpdate.data_For_Puts);

    let newDelete = new Delete_ToolsPosts()
    newDelete.delete_The_Data(thePorduct_inPublic[0].id)

    setTimeout(() => {
      updateData(data + 1);
    }, 200);

    modalRef.current.close();
  };

  const open = () => {
    modalRef.current.showModal();
  };

  return (
    <>
      <ConfirmModal
        text={"Deseas eliminar tu post?"}
        acceptFunction={eliminar}
        ref={modalRef}
      />
      <button onClick={open}>Eliminar</button>
    </>
  );
};

export default EliminatePost;
