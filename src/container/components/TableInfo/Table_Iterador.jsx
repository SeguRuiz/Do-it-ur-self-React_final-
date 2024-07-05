import { useTheContext } from "../../../context/ContextProvider";
import "../TableInfo/table.css";
import TableLabel from "./TableLabel";

const Table_Iterador = () => {
const { user_Products } = useTheContext()
  return (
    <div className="tableBase">
      <div className="Options_Area">filters area</div>
      <div className="table_Header">
        <textarea rows="1" className="headerOption">
          State
        </textarea>
        <textarea rows="1" className="headerOption">
          Titulo
        </textarea>
        <textarea rows="1" className="headerOption">
          Precio
        </textarea>
        <textarea rows="1" className="headerOption">
          Id
        </textarea>
        <textarea rows="1" className="headerOption">
          Cantidad
        </textarea>
        <textarea rows="1" className="headerOption">
          options
        </textarea>
      </div>
      <div className="info_Labels">
      {user_Products.map((product, i) => (
        <TableLabel key={product.id} Titulo={product.Title} Precio={product.Price} State={product.State} Id={product.id}/>
      ))}
      </div>
    </div>
  );
};

export default Table_Iterador;
