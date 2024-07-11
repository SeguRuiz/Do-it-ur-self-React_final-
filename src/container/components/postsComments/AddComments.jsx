import { useRef, useState } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import uuid from "react-uuid";
import { PublicPut_Tools } from "../../../utils/Fetchs/classes";

const AddComments = ({ id, closeModal }) => {
  const { publicData, userInfo, data, updateData } = useTheContext();

  const inpRef = useRef();

  const [inpValue, setValue] = useState("");

  const changeValue = (x) => {
    setValue(x.target.value);
  };

  const addComment = (o) => {
    o.preventDefault();

    let commentValue = inpRef.current.value.trim();

    if (commentValue != "") {
      //Dependiendo del id de su post padre manara comentarios a su array
      let dataCopy = [...publicData];
      let thePost = dataCopy.find((posts) => posts.id == id);
      let id_Comment = uuid();

      let comment = {
        user: [userInfo.info.name, userInfo.id, userInfo.info.perfil],
        text: commentValue,
        id: id_Comment,
      };

      thePost.comments.push(comment);

      let newComment = new PublicPut_Tools(thePost);
      newComment.put_The_Data(thePost.id, newComment.data_For_Puts);

      setTimeout(() => {
        updateData(data + 1);
      }, 200);

      setValue("");
    }
  };
  return (
    <>
      <form onSubmit={addComment} action="" className="addcommentsForm">
        <input
          type="text"
          placeholder="add comments"
          ref={inpRef}
          value={inpValue}
          onInput={changeValue}
          className="addCommentsInp"
        />

        <button className="sendBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#979da6"
          >
            <path d="M120-160v-640l760 320-760 320Zm66.67-102 520.66-218-520.66-220v158.67L428-480l-241.33 60v158Zm0 0v-438 438Z" />
          </svg>
        </button>
      </form>
    </>
  );
};

export default AddComments;
