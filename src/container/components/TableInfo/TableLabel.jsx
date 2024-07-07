
import "../TableInfo/table.css";
import { useTheContext } from "../../../context/ContextProvider";
import CategoriModal from "../TableCategories/CategoriModal";

const TableLabel = ({ State, Titulo, Precio, Id, key, ediBtn,publishEliminate,  }) => {




  return (
    <>
    <div className="infoLabel" key={key}>
      <div className="labelOptionState" >{State}</div>
      <div className="labelOptionState">{Titulo}</div>
      <div className="labelOptionState">{Precio + '$'}</div>
      <div className="labelOptionState" >{Id}</div>
      <CategoriModal className={'labelOptionState'} product_Id={Id} />
      <div className="labelOptionOptions">{publishEliminate}{ediBtn}</div>
    </div>
    </>
  );
};

export default TableLabel;