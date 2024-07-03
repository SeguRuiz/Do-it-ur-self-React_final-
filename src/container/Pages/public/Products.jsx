import Navbar_Ho from "../../components/Navbar_Ho"
import ProductsIterator from "../../components/ProductsIterador/ProductsIterator"
import "../../components/ProductsIterador/seeProducts.css"


const Products = () => {
  return (
    <>
    <Navbar_Ho/>
    <div className="productspage">
      <div></div>
      <div className="components_Part">
      <div className="filters_Area">
        <div className="btns_Area">
          btns Area(WIP)
        </div>
      </div>
      <div className="products_Area">
        <div className="products_iterator">
        <ProductsIterator/>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Products