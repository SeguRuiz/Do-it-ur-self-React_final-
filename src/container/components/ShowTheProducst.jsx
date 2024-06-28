import { useTheContext } from "../../context/ContextProvider"

import ProductContainer from "./ProductContainer";

const ShowTheProducst = () => {
const { user_Products} = useTheContext()
console.log(user_Products);
  return (
    <>
    <div className="products">
    {user_Products.map((product, i) => (
        <div key={i} className="product_Container">
          <ProductContainer text={product.Description} />
        </div>
      ))}
      </div>
    </>
  )
}

export default ShowTheProducst