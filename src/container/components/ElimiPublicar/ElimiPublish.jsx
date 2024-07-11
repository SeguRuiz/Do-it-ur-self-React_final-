import { useRef } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools, Delete_Tools } from "../../../utils/Fetchs/classes";
import ConfirmModal from "../Confirm/confirmModal";
import ProductPublic from "./ProductPublic";
import EditBtn from "../Edit/EditBtn";
import "../ElimiPublicar/Eliminar.css"
//Componnte para eliminar productos
const ElimiPublish = ({ id, publicId }) => {
  const { user_Products, userInfo, data, updateData } = useTheContext();
  const confirmModal = useRef();


  const eliminate = async () => {
    if (userInfo != "") {
      //Hago copias de la informacion que actualizare
      let productsCopy = [...user_Products];
      let userCopy = { ...userInfo };
      
      let products_Filtered = productsCopy.filter(
        (products) => products.id != id
      );

      userCopy.products = products_Filtered;
       //Luego de filtrada la mando al json 
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
        <div>
        <EditBtn id={id}/>
        </div>
      </div>
    </>
  );
};

export default ElimiPublish;
