import { useRef } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import ConfirmModal from "../Confirm/confirmModal";
import { Put_Tools, Delete_ToolsPosts } from "../../../utils/Fetchs/classes";
import "./userPosts.css";

const EliminatePost = ({ id }) => {
  const { user_Posts, userInfo, data, updateData, publicData } =
    useTheContext();
  const modalRef = useRef();

  const eliminar = () => {
    let postsCopy = [...user_Posts];
    let userCopy = { ...userInfo };
    let filtered = postsCopy.filter((posts) => posts.id != id) ?? false;

    let thePorduct_inPublic =
      publicData.filter((info) => info.post.id == id) ?? false;

    userCopy.posts = filtered;

    let newUpdate = new Put_Tools(userCopy);
    newUpdate.put_The_Data(userCopy.id, newUpdate.data_For_Puts);

    setTimeout(() => {
      updateData(data + 1);
    }, 200);

    if (thePorduct_inPublic[0] != undefined) {
      let newDelete = new Delete_ToolsPosts();
      newDelete.delete_The_Data(thePorduct_inPublic[0].id);
      setTimeout(() => {
        updateData(data + 1);
      }, 200);
    }
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
      <button onClick={open} className="eliminarPost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#979da6"
           className="eliminatePostIcon"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </button>
    </>
  );
};

export default EliminatePost;
