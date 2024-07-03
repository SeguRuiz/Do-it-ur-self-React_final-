import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools } from "../../../utils/Fetchs/classes";
import "../tags/tags.css";
// import Inpts from "../Inpts";
import TagsSelector from "../tags/TagsSelector";
import uuid from "react-uuid";
import { useRef, useState } from "react";
const AddProducts = () => {
  const product_Inp = useRef();
  const descriptionText = useRef();
  const priceText = useRef();
  const imgInp = useRef();
  const { userInfo, data, updateData } = useTheContext();

  const [product_Inp_Value, set_prodValue] = useState("");
  const [descriptionText_Value, setDescription] = useState("");
  const [priceText_Value, setPrice] = useState("");
  const [img_value, setImg] = useState("");
  const modalRef = useRef();

  const OpenModal = () => {
    modalRef.current.showModal();
  };

  const see_The_value = (o) => {
    set_prodValue(o.target.value);
  };

  const see_TheDesc_value = (o) => {
    setDescription(o.target.value);
  };

  const see_ThePrice_value = (o) => {
    setPrice(o.target.value);
  };

  const see_Img_value = (o) => {
    setImg(o.target.value);
  };

  const CloseModal = () => {
    modalRef.current.close();
    updateData(data + 1);
  };

  const user_Private_Product = async (o) => {
    o.preventDefault();

    let info_Inp_Value = product_Inp.current.value.trim();
    let descrption_value = descriptionText.current.value.trim();
    let price_value = priceText.current.value.trim();
    let img_value = imgInp.current.value.trim();

    if (info_Inp_Value != "" && descrption_value != "" && price_value != "") {
      let id = uuid();
      let product = {
        Title: info_Inp_Value,
        Description: descrption_value,
        Price: price_value + "$",
        Img: img_value,
        State: "Private",
        tags: [],
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
      setDescription("");
      setPrice(0);

      modalRef.current.close();
    }
  };
  return (
    <>
      <dialog ref={modalRef} className="ModalProducts">
        <div className="contentArea">
          <form
            name="form_User"
            className="Products_form"
            onSubmit={user_Private_Product}
          >
            <input
              type="text"
              placeholder="Title"
              onInput={see_The_value}
              value={product_Inp_Value}
              ref={product_Inp}
              className="TittleProduct"
            />

            <input
              type="text"
              className="imgInp"
              ref={imgInp}
              onInput={see_Img_value}
              placeholder="Img url"
            />

            <textarea
              name=""
              id=""
              className="descriptionProduct"
              ref={descriptionText}
              onInput={see_TheDesc_value}
              placeholder="Description"
              value={descriptionText_Value}
            ></textarea>

            <div className="priceArea">
              <input
                type="number"
                ref={priceText}
                className="priceProduct"
                onInput={see_ThePrice_value}
                placeholder="Price"
                value={priceText_Value}
              />
              <div className="symbolSelector">Symbol</div>
            </div>
            <div className="cancel_add">
              <button type="submit" className="addPBtn">
                Add
              </button>
              <button onClick={CloseModal} className="cancelBtn">
                Cancel
              </button>
            </div>
          </form>
          <div className="categoriesSelector">
            
          </div>
        </div>
      </dialog>
      <div onClick={OpenModal} className="Open_Modal_P">
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
        <p>Add products</p>
      </div>
    </>
  );
};

export default AddProducts;
