import { useTheContext } from "../../../context/ContextProvider";
import AddProducts from "../UseCrud/AddProducts";
import ProductTags from "../tags/ProductTags";
import PrivateProducts from "./privateProducts";
import "../tags/tags.css";
import "../TableInfo/table.css"
import Table_Iterador from "../TableInfo/Table_Iterador";

const ShowTheProducst = () => {
  const { user_Products, userInfo } = useTheContext();

  return (
    <>
      <div className="Inventory_Page">
        <div className="addProduct_Area">
          <AddProducts />
        </div>
       
        <div className="ProductsContainer">
          <div className="products">
            {user_Products[0] == undefined ? (
              <div className="emptyProducts">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="130px"
                  viewBox="0 -960 960 960"
                  width="130px"
                  fill="#8bb4f8"
                  className="box"
                >
                  <path d="M164-160v-517L82-853l56-27 90 203h505l90-203 56 27-82 176v517H164Zm232-297h170q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H396q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5ZM224-220h513v-397H224v397Zm0 0v-397 397Z" />
                </svg>
                <h1 className="boxInfo">Tus productos iran aqui :)</h1>
              </div>
            ) : (
              <PrivateProducts />
            )}
          </div>
        </div>

        <div className="tagsArea">
          <ProductTags />
        </div>

        <div className="tableInfo">
        <Table_Iterador/>
        </div>
      </div>
    </>
  );
};

export default ShowTheProducst;
