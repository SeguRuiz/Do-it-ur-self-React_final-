
import "../TableInfo/table.css";
import { useTheContext } from "../../../context/ContextProvider";

const TableLabel = ({ State, Titulo, Precio, Id, key}) => {




  return (
    <>
    <div className="infoLabel" key={key}>
      <textarea className="labelOption" defaultValue={State}></textarea>
      <textarea className="labelOption" defaultValue={Titulo}></textarea>
      <textarea className="labelOption" defaultValue={Precio}></textarea>
      <textarea className="labelOption" defaultValue={Id}></textarea>
      <textarea className="labelOption">Lorem ipsum dolor sit amet consectetur adipisicing elit.</textarea>
      <textarea className="labelOption">options</textarea>
    </div>
    </>
  );
};

export default TableLabel;
