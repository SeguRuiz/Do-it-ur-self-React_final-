import { useId, useRef, useState } from "react";
import { Put_Tools } from "../../utils/Fetchs/classes";
import { useTheContext } from "../../context/ContextProvider";
import uuid from "react-uuid";
import ShowUserPosts from "./ShowUserPosts";
import Inpts from "./Inpts";

const AddPostForm = () => {
  const info_Inp = useRef();
  const { userInfo, data, updateData } = useTheContext();

  const [info_Inp_Value, set_InfoValue] = useState("");

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
      <br />
      
    </>
  );
};

export default AddPostForm;
