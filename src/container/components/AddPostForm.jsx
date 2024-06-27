import { useRef, useState } from "react";
import Inpts from "./Inpts";

const AddPostForm = () => {
  const info_Inp = useRef();

  const [info_Inp_Value, set_InfoValue] = useState("");

  const see_The_value = (o) => {
    set_InfoValue(o.target.value);
  };
    
  
  return (
    <>
      <form name="form_User" className="form_User">
        <Inpts
          type={"text"}
          placeholder={"Add posts"}
          ref={info_Inp}
          value={info_Inp_Value}
          Change_Value={see_The_value}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddPostForm;
