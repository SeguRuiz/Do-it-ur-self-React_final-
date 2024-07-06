
import "../TableInfo/table.css";
import { useTheContext } from "../../../context/ContextProvider";

const TableLabel = ({ State, Titulo, Precio, Id, key, ediBtn,publishEliminate }) => {




  return (
    <>
    <div className="infoLabel" key={key}>
      <div className="labelOptionState" >{State}</div>
      <div className="labelOptionState">{Titulo}</div>
      <div className="labelOptionState">{Precio + '$'}</div>
      <div className="labelOptionState" >{Id}</div>
      <div className="labelOptionState">Categories</div>
      <div className="labelOptionOptions">{publishEliminate}{ediBtn}</div>
    </div>
    </>
  );
};

export default TableLabel;