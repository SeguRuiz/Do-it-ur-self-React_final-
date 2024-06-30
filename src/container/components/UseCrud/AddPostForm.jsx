import { useId, useRef, useState } from "react";
import { Put_Tools } from "../../../utils/Fetchs/classes";
import { useTheContext } from "../../../context/ContextProvider";
import uuid from "react-uuid";
import Inpts from "../Inpts";

const AddPostForm = () => {
  const info_Inp = useRef();
  const { userInfo, data, updateData } = useTheContext();

  const [info_Inp_Value, set_InfoValue] = useState("");
  const postsDlg = useRef()

   const OpenModal = () => {
    updateData(data + 1);
    postsDlg.current.showModal();
  };


  const see_The_value = (o) => {
    set_InfoValue(o.target.value);
  };

  const user_Private_Post = async (o) => {
    o.preventDefault();

    let info_Inp_Value = info_Inp.current.value.trim();

    if (info_Inp_Value != "") {
      let id = uuid();
      let post = {
        Description: info_Inp_Value,
        State: "Private",
        id: id,
      };
      let copyUser = { ...userInfo };

      copyUser.posts.push(post);

      console.log(copyUser);

      let new_User_Update = new Put_Tools(copyUser);
      new_User_Update.put_The_Data(copyUser.id, new_User_Update.data_For_Puts);

      updateData(data + 1);
      set_InfoValue("");
    }
  };
  return (
    <>
    <dialog ref={postsDlg}>
      <form name="form_User" className="form_User" onSubmit={user_Private_Post}>
        <Inpts
          type={"text"}
          placeholder={"Add posts"}
          ref={info_Inp}
          value={info_Inp_Value}
          Change_Value={see_The_value}
        />
        <button type="submit">Add</button>
      </form>
      </dialog>
            <div onClick={OpenModal} className="Open_Modal_Posts">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#8bb4f8"
            className="iconAdd"
          >
            <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
          </svg>
        </div>
        <p>Add Posts</p>
      </div>
    </>
  );
};

export default AddPostForm;
