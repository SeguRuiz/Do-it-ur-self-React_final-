import React, { useRef } from "react";
import SelectedList from "./SelectedList";
import UnselectedList from "./UnselectedList";
import "./categoriModal.css";

const CategoriModal = ({ product_Id, className }) => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.showModal();
  };

  const close = () => {
    modalRef.current.close();
  };

  const SeeId = () => {
    console.log(product_Id);
  };
  return (
    <>
      <dialog ref={modalRef} className="CategoriModal">
        <div className="CategoriModalContent">
          <div className="ExitCategoriModal">
            <button onClick={close}>cerrar</button>
          </div>
          <div className="infoSelected">
          <div className="infoSelect">En uso</div>
          <div className="infoSelect">Disponible</div>
          </div>
          <div className="infoArea">
            <div className="selectedArea">
              <SelectedList product_id={product_Id} />
            </div>
            <div className="UnselectedArea">
              <UnselectedList product_id={product_Id} />
            </div>
          </div>
        </div>
      </dialog>
      <div className={className} onClick={openModal}>
        Ver sus actegorias
      </div>
    </>
  );
};
export default CategoriModal;
