import { useRef } from "react";
import { PublicPut_Tools } from "../../../utils/Fetchs/classes";
import ConfirmModal from "../Confirm/confirmModal";
import { useTheContext } from "../../../context/ContextProvider";
const EliminarC = ({ post_id, comment_Id }) => {
  const { publicData, data, updateData } = useTheContext();

  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.showModal();
  };
  const Eliminar = () => {
    let thePost = publicData.find((posts) => posts.id == post_id);
    let postCopy = { ...thePost };

    let commentsFiltered = postCopy.comments.filter(
      (comment) => comment.id != comment_Id
    );

    postCopy.comments = commentsFiltered;

    let newUpdate = new PublicPut_Tools(postCopy);
    newUpdate.put_The_Data(postCopy.id, newUpdate.data_For_Puts);

    setTimeout(() => {
      updateData(data + 1);
    }, 200);

    modalRef.current.close();
  };
  return (
    <>
      <ConfirmModal
        text={"Quieres eliminar tu comentario?"}
        acceptFunction={Eliminar}
        ref={modalRef}
      />
      <button onClick={openModal} className="eliminarCBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="25px"
          viewBox="0 -960 960 960"
          width="25px"
          fill="#979da6"
          className="eliminarC"
        >
          <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
        </svg>
      </button>
    </>
  );
};

export default EliminarC;
