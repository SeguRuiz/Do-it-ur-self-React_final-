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
  const { search, refProducts } = useTheContext();

  console.log(search, refProducts);
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
};

export default Products;
