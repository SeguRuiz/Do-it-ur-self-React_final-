import { useRef } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools, Delete_Tools } from "../../../utils/Fetchs/classes";
import ConfirmModal from "../Confirm/confirmModal";
import ProductPublic from "./ProductPublic";
import "../ElimiPublicar/Eliminar.css"

const ElimiPublish = ({ id }) => {
  const { user_Products, userInfo, data, updateData } = useTheContext();
  const confirmModal = useRef();


  const eliminate = async () => {
    if (userInfo != "") {
      let productsCopy = [...user_Products];
      let userCopy = { ...userInfo };

      let products_Filtered = productsCopy.filter(
        (products) => products.id != id
      );

      userCopy.products = products_Filtered;

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

  const openModal = () => {
    confirmModal.current.showModal();
  };

  return (
    <>
      <ConfirmModal
        text={"Quieres eliminarlo?"}
        ref={confirmModal}
        acceptFunction={eliminate}
      />
      <div className="Elim_Pub_Container">
        <div>
          <ProductPublic id={id} />
        </div>
        <div>
          <button onClick={openModal} className="eliminarBtn">Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default ElimiPublish;
