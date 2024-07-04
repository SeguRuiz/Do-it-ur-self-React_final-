import Navbar_Ho from "../../components/Navbar_Ho";
import ProductsIterator from "../../components/ProductsIterador/ProductsIterator";
import "../../components/ProductsIterador/seeProducts.css";
import "../../components/Filter/filter.css";
import FilterSelector from "../../components/Filter/FilterSelector";
import ShowFilter from "../../components/Filter/showFilter";
import SearchBar from "../../components/searchBar/SearchBar";
import QuitSearch from "../../components/searchBar/quitSearch";

const Products = () => {
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
              <ProductsIterator />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
