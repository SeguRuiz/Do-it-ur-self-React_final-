import { useTheContext } from "../../../context/ContextProvider";
import {
  Put_Tools,
  Products_Posts_Tools,
  Delete_Tools,
} from "../../../utils/Fetchs/classes";
import ConfirmModal from "../Confirm/confirmModal";
import { useEffect, useRef, useState } from "react";
import "./Publicar.css";

const ProductPublic = ({ id }) => {
  const { user_Products, userInfo, data, updateData } = useTheContext();
  const confirmModal = useRef();
  const btnRef = useRef();
  const [btnFunction, setFunction] = useState("Publicar");

  const publish = () => {
    if (userInfo != "" && btnFunction == "Publicar") {
      let productsCopy = [...user_Products];
      let userCopy = { ...userInfo };

      productsCopy.forEach((e) => {
        if (e.id == id) {
          e.State = "Public";
        }
      });

      userCopy.products = productsCopy;

      console.log(userCopy);

      let newUpdate = new Put_Tools(userCopy);

      newUpdate.put_The_Data(userCopy.id, newUpdate.data_For_Puts);

      let theProduct = productsCopy.find((products) => products.id == id);

      let newUpdateP = new Products_Posts_Tools(theProduct);

      newUpdateP.post_The_Data(newUpdateP.data_For_Posts);

      setTimeout(() => {
        updateData(data + 1);
      }, 200);

      confirmModal.current.close();
    } else if (userInfo != "" && btnFunction == "Privatizar") {
      let productsCopy = [...user_Products];
      let userCopy = { ...userInfo };

      productsCopy.forEach((e) => {
        if (e.id == id) {
          e.State = "Private";
        }
      });

      userCopy.products = productsCopy;

      console.log(userCopy);

      let newUpdate = new Put_Tools(userCopy);

      newUpdate.put_The_Data(userCopy.id, newUpdate.data_For_Puts);

      let deleteThis = new Delete_Tools();
      deleteThis.delete_The_Data(id);

      setTimeout(() => {
        updateData(data + 1);
      }, 200);

      confirmModal.current.close();
    }
  };

  // const privatizar = () => {
  //   if (btnFunction == "Privatizar") {

  //   }
  // };

  const openModal = () => {
    confirmModal.current.showModal();
  };

  useEffect(() => {
    let theProduct =
      user_Products.find((products) => products.id == id) ?? false;
    if (theProduct != false && theProduct.State == "Public") {
      setFunction("Privatizar");
    } else if (theProduct != false && theProduct.State == "Private") {
      setFunction("Publicar");
    }
  }, [data]);
  return (
    <>
      <ConfirmModal
        text={
          btnFunction == "Privatizar"
            ? "Quieres privatizarlo?"
            : "Quieres Publicarlo?"
        }
        ref={confirmModal}
        acceptFunction={publish}
      />
      <button onClick={openModal} className="publicarBtn" ref={btnRef}>
        {btnFunction}
      </button>
    </>
  );
};

export default ProductPublic;
