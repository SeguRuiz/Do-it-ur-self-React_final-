import { useRef } from "react";
import AddComments from "./AddComments";
import ShowComments from "./ShowComments";
import "./comments.css";

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
      <dialog ref={modalDlg} className="modalC">
        <div className="commentModal">
          <div className="closeArea">
            <button onClick={close} className="closeCbtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#979da6"
                className="closeIcon"
              >
                <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
              </svg>
            </button>
          </div>
          <div className="cArea">
            <ShowComments id={post_id} />
          </div>
          <div className="addCommenstArea">
            <AddComments id={post_id} closeModal={close} />
          </div>
        </div>
      </dialog>
      <button onClick={openModal} className="commentsBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#979da6"
        >
          <path d="M280.67-240q-15 0-27.84-13.17Q240-266.33 240-281.33v-92h506.67V-720H840q15 0 27.5 13.17Q880-693.67 880-678v597.33L720.67-240h-440ZM80-280v-558.67q0-15 12.5-28.16Q105-880 120-880h519.33q15.67 0 28.17 12.83 12.5 12.84 12.5 28.5v357.34q0 15-12.5 28.16Q655-440 639.33-440H240L80-280Zm533.33-226.67v-306.66H146.67v306.66h466.66Zm-466.66 0v-306.66 306.66Z" />
        </svg>
      </button>
    </>
  );
};

export default CommentsModal;
