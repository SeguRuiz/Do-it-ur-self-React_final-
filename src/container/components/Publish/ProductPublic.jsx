import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools, Products_Posts_Tools } from "../../../utils/Fetchs/classes";
import ConfirmModal from "../Confirm/confirmModal";
import { useRef } from "react";

const ProductPublic = ({ id }) => {
  const { user_Products, userInfo, data, updateData } = useTheContext();
  const confirmModal = useRef();

  const publish = () => {
    if (userInfo != "") {
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
       confirmModal.current.close()
    }
  };
   const openModal = () => {
    confirmModal.current.showModal();
  };
  return (
    <>
      <ConfirmModal
        text={"Quieres publicarlo?"}
        ref={confirmModal}
        acceptFunction={publish}
      />
      <button onClick={openModal}>Publicar</button>
    </>
  );
};

export default ProductPublic;
