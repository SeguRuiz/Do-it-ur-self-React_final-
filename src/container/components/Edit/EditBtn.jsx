import { useRef, useState } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools } from "../../../utils/Fetchs/classes";
import "../Edit/edit.css";
//Editar para productos privados
const EditBtn = ({ id }) => {
//Tomo informacion del contexto que rodea todo
  const { userInfo, data, updateData } = useTheContext();


  const modalRef2 = useRef();

  const product_Inp = useRef();
  const descriptionText = useRef();
  const priceText = useRef();
  const imgInp = useRef();
 

  const [product_Inp_Value, set_prodValue] = useState("");
  const [descriptionText_Value, setDescription] = useState("");
  const [priceText_Value, setPrice] = useState("");
  const [img_value, setImg] = useState("");

  const CloseModal = () => {
    modalRef2.current.close();
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

  const replicate_Value = () => {
    updateData(data + 1);
    setTimeout(() => {
      //Con el timeOut seteo despues los valores de los inputs iguales a su tarea utilizando find
      let theProduct = userInfo.products.find((products) => products.id == id);
      set_prodValue(theProduct.Title);
      setDescription(theProduct.Description);
      setPrice(theProduct.Price);
      setImg(theProduct.Img);
      console.log(theProduct.Img);
      modalRef2.current.showModal();
    }, 200);
  };

  const editTheProduct = (o) => {
    o.preventDefault();
    let info_Inp_Value = product_Inp.current.value.trim();
    let descrption_value = descriptionText.current.value.trim();
    let price_value = priceText.current.value.trim();
    let img_value = imgInp.current.value.trim();

    if (info_Inp_Value != "" && descrption_value != "" && price_value != "") {
      let userCopy = { ...userInfo };

      userCopy.products.forEach((e) => {
        if (e.id == id) {
          e.Title = info_Inp_Value;
          e.Description = descrption_value;
          e.Price = price_value;
          e.Img = img_value;
        }
      });
      //Luego mando la actualizacion y renderizo
      let newUpdate = new Put_Tools(userCopy);
      newUpdate.put_The_Data(userCopy.id, newUpdate.data_For_Puts);

      setTimeout(() => {
        updateData(data + 1);
      }, 200);
     
      
      modalRef2.current.close();
    }
  };

  return (
    <>
      <dialog ref={modalRef2} className="ModalProducts">
        <div className="contentArea">
          <div className="cancel_area">
            <button onClick={CloseModal} className="cancelBtn">
              Cancel
            </button>
          </div>
          <form
            onSubmit={editTheProduct}
            name="form_User"
            className="Products_form"
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
              value={img_value}
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
                Change
              </button>
            </div>
          </form>
        </div>
      </dialog>
      <button onClick={replicate_Value} className="editBtn">
        EditBtn
      </button>
    </>
  );
};

export default EditBtn;
