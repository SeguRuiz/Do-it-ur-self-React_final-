import { useRef } from "react";
import AddComments from "./AddComments";
import ShowComments from "./ShowComments";

const CommentsModal = ({ post_id }) => {
 
  const modalDlg = useRef();
 
  const openModal = () => {
    modalDlg.current.showModal();
  };

  const close = () => {
    modalDlg.current.close();
  };

  console.log(post_id);

  return (
    <>
      <dialog ref={modalDlg}>
        <div>
          <button onClick={close}>close</button>
          <div>
            <h2>comments area</h2>
            <ShowComments id={post_id}/>
          </div>
          <div>
            <AddComments id={post_id} closeModal={close}/>
          </div>
        </div>
      </dialog>
      <button onClick={openModal}>comments</button>
    </>
  );
};

export default CommentsModal;
