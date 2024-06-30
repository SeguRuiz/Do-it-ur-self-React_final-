import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools } from "../../../utils/Fetchs/classes";
import Inpts from "../Inpts";
import uuid from "react-uuid";
import { useRef, useState } from "react";
const AddProducts = () => {
  const product_Inp = useRef();
  const { userInfo, data, updateData } = useTheContext();

  const [product_Inp_Value, set_prodValue] = useState("");

  const see_The_value = (o) => {
    set_prodValue(o.target.value);
  };

  const user_Private_Product = async (o) => {
    o.preventDefault();

    let info_Inp_Value = product_Inp.current.value.trim();

    if (info_Inp_Value != "") {
      let id = uuid();
      let product = {
        Description: info_Inp_Value,
        State: "Private",
        id: id,
      };
      let copyUser = { ...userInfo };

      console.log(copyUser);

      copyUser.products.push(product);

      console.log(copyUser);

      let new_User_Update = new Put_Tools(copyUser);
      new_User_Update.put_The_Data(copyUser.id, new_User_Update.data_For_Puts);

      updateData(data + 1);
      set_prodValue("");
    }
  };
  return (
    <>
      <form
        name="form_User"
        className="form_User"
        onSubmit={user_Private_Product}
      >
        <Inpts
          type={"text"}
          placeholder={"Add products"}
          ref={product_Inp}
          Change_Value={see_The_value}
          value={product_Inp_Value}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddProducts;
