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

 
  return (
    <>
      <dialog ref={modalRef} className="CategoriModal">
        <div className="CategoriModalContent">
          <div className="ExitCategoriModal">
            <button onClick={close} className="closeCategorys">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
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
