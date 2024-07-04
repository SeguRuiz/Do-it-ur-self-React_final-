import { useRef, useState } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools } from "../../../utils/Fetchs/classes";
import ShowTags from "./showTags";
import uuid from "react-uuid";
import "../tags/tags.css";

const ProductTags = () => {
  const tagText = useRef();
  const tagModal = useRef();

  const [value, setValue] = useState("");

  const setThatValue = (x) => {
    setValue(x.target.value);
  };

  const { user_Products, userInfo, data, updateData } = useTheContext();

  const closeModal = () => {
    tagModal.current.close();
  };

  const openModal = () => {
    tagModal.current.showModal();
  };

  const addTags = (o) => {
    o.preventDefault();
    let tagText_Value = tagText.current.value.trim();

    if (tagText_Value != "") {
      let id = uuid();
      let tag = {
        tagName: tagText_Value,
        id: id,
      };

      let userCopy = { ...userInfo };

      userCopy.tags.push(tag);

      let newUpdate = new Put_Tools(userCopy);

      newUpdate.put_The_Data(userCopy.id, newUpdate.data_For_Puts);

      updateData(data + 1);

      tagModal.current.close();

      setValue("");

      console.log(userInfo);
    }
  };
  return (
    <>
      <dialog ref={tagModal} className="addTagModal">
        <div className="addT_Content">
          <form onSubmit={addTags}>
            <input
              type="text"
              ref={tagText}
              value={value}
              onInput={setThatValue}
              className="addTagInp"
            />
            <button className="addTagBtn" type="submit">
              add
            </button>
          </form>
          <button onClick={closeModal}>salir</button>
        </div>
      </dialog>

      <div className="tagsContainer">
        <button onClick={openModal} className="addtags">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#8bb4f8"
            className="tagsIcon"
          >
            <path d="M154.33-152.67 127.67-162Q96-175.67 84.83-209q-11.16-33.33 5.5-65.67l64-142.66v264.66Zm177.34 81.34q-33.67 0-57.5-23.84-23.84-23.83-23.84-57.5v-218L347-98q2.33 7.67 6 13.83 3.67 6.17 9.33 12.84h-30.66Zm194-17.34q-24.67 10-50-3.66-25.34-13.67-36-39.67L253-640.67q-10.67-26 2-50.83t40-35.17L607.67-840q26-9.33 50.66 3.67 24.67 13 35.34 39.66L880.33-292q8.67 27.33-2.66 53.5-11.34 26.17-38.67 35.83l-313.33 114Zm-83.34-488.66q13.67 0 23.5-9.84 9.84-9.83 9.84-23.5 0-13.66-9.84-23.5Q456-644 442.33-644q-13.66 0-23.5 9.83-9.83 9.84-9.83 23.5 0 13.67 9.83 23.5 9.84 9.84 23.5 9.84Zm61.34 424.66 312.66-114L629.67-776 317-662.67l186.67 510ZM317-662.67 629.67-776 317-662.67Z" />
          </svg>
        </button>

        {userInfo.tags[0] == undefined ? (
          <div className="emptyTagsDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#8bb4f8"
            >
              <path d="M840-480 669.33-238.67q-12.33 17.34-30.16 28Q621.33-200 600-200H186.67q-27.5 0-47.09-19.58Q120-239.17 120-266.67v-426.66q0-27.5 19.58-47.09Q159.17-760 186.67-760H600q21.33 0 39.17 10.67 17.83 10.66 30.16 28L840-480Zm-82.67 0-150-213.33H186.67v426.66h420.66l150-213.33Zm-570.66 0v213.33-426.66V-480Z" />
            </svg>
            <p className="emptyTagsText">No tienes categorias agregadas!</p>
          </div>
        ) : (
          <div className="showTags">
            <ShowTags />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductTags;
