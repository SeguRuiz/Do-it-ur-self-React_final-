import { useTheContext } from "../../../context/ContextProvider";

import ProductContainer from "../ProductContainer";
import AddProducts from "../UseCrud/AddProducts";

const ShowTheProducst = () => {
  const { user_Products } = useTheContext();
  console.log(user_Products);
  return (
    <>
      <div className="Inventory_Page">
        <div className="addProduct_Area">
          <AddProducts />
        </div>
        <div className="ProductsContainer">
          <div className="products">
            {user_Products.map((product, i) => (
              <div key={i} className="product_Container">
                <ProductContainer description={product.Description} title={product.Title} price={product.Price}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTheProducst;
