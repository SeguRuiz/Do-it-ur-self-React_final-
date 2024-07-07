import Navbar_Ho from "../../components/Navbar_Ho";
import ProductsIterator from "../../components/ProductsIterador/ProductsIterator";
import "../../components/ProductsIterador/seeProducts.css";
import "../../components/Filter/filter.css";
import FilterSelector from "../../components/Filter/FilterSelector";
import ShowFilter from "../../components/Filter/showFilter";
import SearchBar from "../../components/searchBar/SearchBar";
import QuitSearch from "../../components/searchBar/quitSearch";
import { useTheContext } from "../../../context/ContextProvider";

const Products = () => {
  const { search, refProducts, emptyApi } = useTheContext();

  

  if (emptyApi.current[0] == undefined) {
    return (
      <>
        <Navbar_Ho />
        <div className="EmptyStock">
          <div></div>
          <div className="EmptyComponents">
            <div className="emptyBoxsIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="250px"
                viewBox="0 -960 960 960"
                width="250px"
                fill="#979da6"
                
              >
                <path d="M40-160v-60h199v-101H80v-60h159v-101H126v-60h113v-130l-78-183 55-25 86 202h512l-80-177 55-25 91 202v518H40Zm433-292h174q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H473q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5ZM299-220h521v-398H299v398Zm0 0v-398 398Z" />
              </svg>
            </div>
            <h1 className="emptyPageInfo">Estamos haciendo algunos arreglos....</h1>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar_Ho />
        <div className="productspage">
          <div></div>
          <div className="components_Part">
            <div className="filters_Area">
              <div className="btns_Area">
                <div className="searchBarDiv">
                  <SearchBar />
                  <QuitSearch />
                </div>
                <div className="filter">
                  <ShowFilter />
                </div>
              </div>
            </div>
            <div className="products_Area">
              <div className="products_iterator">
                {search == "En busqueda" &&
                refProducts.current[0] == undefined ? (
                  <div className="NoResults">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="100px"
                      viewBox="0 -960 960 960"
                      width="100px"
                      fill="#979da6"
                      className="noResultsIcon"
                    >
                      <path d="M431-330q1-72 16.5-105t58.5-72q42-38 64.5-70.5T593-647q0-45-30-75t-84-30q-52 0-80 29.5T358-661l-84-37q22-59 74.5-100.5T479-840q100 0 154 55.5T687-651q0 48-20.5 87T601-482q-49 47-59 72t-11 80H431Zm48 250q-29 0-49.5-20.5T409-150q0-29 20.5-49.5T479-220q29 0 49.5 20.5T549-150q0 29-20.5 49.5T479-80Z" />
                    </svg>
                    <p className="noResultsInfo">No hay resultados LOL</p>
                  </div>
                ) : (
                  <ProductsIterator />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Products;
