import { useTheContext } from "../../../context/ContextProvider";
import AddProducts from "../UseCrud/AddProducts";
import ProductTags from "../tags/ProductTags";
import PrivateProducts from "./privateProducts";
import "../tags/tags.css";
import "../TableInfo/table.css";
import Table_Iterador from "../TableInfo/Table_Iterador";
import { useState } from "react";

const ShowTheProducst = () => {
  const { user_Products, userInfo } = useTheContext();

  const [mode, setMode] = useState("List");

  const Table = () => {
    setMode("Table");
  };

  const List = () => {
    setMode("List");
  };

  return (
    <>
      <div className="Inventory_Page">
        <div className="addProduct_Area">
          <AddProducts />
          <div className="options_Mode">
            <button onClick={Table} className="TableBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#979da6"
                className={ mode == 'Table' ? 'TableIconSelected' : 'TableIcon'}
              >
                <path d="M120-186.67v-586.66q0-27.5 19.58-47.09Q159.17-840 186.67-840h586.66q27.5 0 47.09 19.58Q840-800.83 840-773.33v586.66q0 27.5-19.58 47.09Q800.83-120 773.33-120H186.67q-27.5 0-47.09-19.58Q120-159.17 120-186.67Zm66.67-426.66h586.66v-160H186.67v160ZM404.33-400h151.34v-146.67H404.33V-400Zm0 213.33h151.34v-146.66H404.33v146.66ZM186.67-400h151v-146.67h-151V-400Zm435.66 0h151v-146.67h-151V-400ZM186.67-186.67h151v-146.66h-151v146.66Zm435.66 0h151v-146.66h-151v146.66Z" />
              </svg>
            </button>
            <button onClick={List} className="ListBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#979da6"
                className={mode == 'List' ? 'ListBtnSeleceted' : 'ListIcon'}
              >
                <path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-502.33h586.66v-151H186.67v151Zm0 218h586.66v-151.34H186.67v151.34Zm0 217.66h586.66v-151H186.67v151Zm55.33-478v-66.66h66.67v66.66H242Zm0 218v-66.66h66.67v66.66H242Zm0 218v-66.66h66.67v66.66H242Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="ProductsContainer">
          <div className={mode == "Table" ? "products_Table" : "products"}>
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
            ) : mode == "Table" ? (
              <Table_Iterador />
            ) : (
              <PrivateProducts />
            )}
          </div>
        </div>

        <div className="tagsArea">
          <ProductTags />
        </div>
      </div>
    </>
  );
};

export default ShowTheProducst;
