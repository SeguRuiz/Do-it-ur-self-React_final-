import React, { useRef } from "react";
import "../tags/tags.css";

const ProductTags = () => {
  const tagText = useRef();
  const tagModal = useRef();

  const closeModal = () => {
    tagModal.current.close();
  };

  const openModal = () => {
    tagModal.current.showModal();
  };
  return (
    <>
      <dialog ref={tagModal}>
        <div>
          <form action="">
            <input type="text" ref={tagText} />
            <button type="submit">add</button>
          </form>
          <button onClick={closeModal}>salir</button>
        </div>
      </dialog>

      <div className="tagsContainer">
        <button onClick={openModal} className="addtags">
          add tags
        </button>
        <div className="showTags"></div>
      </div>
    </>
  );
};

export default ProductTags;
