import { useTheContext } from "../../../context/ContextProvider";
import "../TableInfo/table.css";
import TableLabel from "./TableLabel";
import EditBtn from "../Edit/EditBtn";
import ElimiPublish from "../ElimiPublicar/ElimiPublish";

const Table_Iterador = () => {
  const { user_Products } = useTheContext();
  return (
    <div className="tableBase">
     
      <div className="table_Header">
        <div className="headerOption">State</div>
        <div className="headerOption">Titulo</div>
        <div className="headerOption">Precio</div>
        <div className="headerOption">Id</div>
        <div className="headerOption">Categorias</div>
        <div className="headerOption">options</div>
      </div>
      <div className="info_Labels">
        {user_Products.map((product, i) => (
          <TableLabel
            key={product.id}
            Titulo={product.Title}
            Precio={product.Price}
            State={product.State}
            Id={product.id}
            publishEliminate={<ElimiPublish id={product.id}/>}
          />
        ))}
      </div>
    </div>
  );
};

export default Table_Iterador;
