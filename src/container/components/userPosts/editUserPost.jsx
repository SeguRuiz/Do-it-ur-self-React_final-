import { useTheContext } from "../../../context/ContextProvider";
import { useRef, useState } from "react";
import { Put_Tools } from "../../../utils/Fetchs/classes";
import "./userPosts.css";
const EditUserPost = ({ id }) => {
  const { userInfo, data, updateData } = useTheContext();
  const info_Inp_Edit = useRef();
  const img_InpRef_Edit = useRef();
  const [info_Inp_Value_Edit, set_InfoValue] = useState("");
  const [img_Inp_Edit, setImgValue] = useState("");
  const postsDlgEdit = useRef();

  const Close = () => {
    postsDlgEdit.current.close();
  };

  const see_The_value = (o) => {
    set_InfoValue(o.target.value);
  };

  const seeImg_Value = (o) => {
    setImgValue(o.target.value);
  };

  const replicate_Value = () => {
    updateData(data + 1);
    setTimeout(() => {
      let thePost = userInfo.posts.find((posts) => posts.id == id);
      set_InfoValue(thePost.Description);
      setImgValue(thePost.Img);

      postsDlgEdit.current.showModal();
    }, 200);
  };

  const user_Private_Post_Edit = async (o) => {
    o.preventDefault();

    let info_Inp_Value = info_Inp_Edit.current.value.trim();
    let img_Value = img_InpRef_Edit.current.value.trim();

    if (info_Inp_Value != "" && img_Value != "") {
      let copyUser = { ...userInfo };

      copyUser.posts.forEach((e) => {
        if (e.id == id) {
          e.Description = info_Inp_Value;
          e.Img = img_Value;
        }
      });

      let newUpdate = new Put_Tools(copyUser);

      newUpdate.put_The_Data(copyUser.id, newUpdate.data_For_Puts);

      setTimeout(() => {
        updateData(data + 1);
      }, 200);

      console.log(copyUser.posts);

      postsDlgEdit.current.close();

      set_InfoValue("");
      setImgValue("");
    }
  };
  return (
    <>
      <dialog ref={postsDlgEdit}>
        <div>
          <div>
            <button onClick={Close}>close</button>
          </div>
          <form
            name="form_User"
            className="form_User"
            onSubmit={user_Private_Post_Edit}
          >
            <textarea
              type={"text"}
              placeholder={"Add posts"}
              ref={info_Inp_Edit}
              value={info_Inp_Value_Edit}
              onInput={see_The_value}
              className="textPost_Inp"
            />

            <input
              type="text"
              name=""
              className="imgInp_Posts"
              value={img_Inp_Edit}
              ref={img_InpRef_Edit}
              onInput={seeImg_Value}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </dialog>
      <button onClick={replicate_Value} className="editPost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#979da6"
        >
          <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
        </svg>
      </button>
    </>
  );
};

export default EditUserPost;
