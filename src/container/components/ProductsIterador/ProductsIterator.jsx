import { useTheContext } from "../../../context/ContextProvider"
import ProductContPublic from "./ProductContPublic"
import "../ProductsIterador/seeProducts.css"

const ProductsIterator = () => {
const {producstData} = useTheContext()

  return (
    <>
    {producstData.map((products, i) => (
     <div key={products.id} className="divProduct">
       <ProductContPublic title={products.Title} price={products.Price} img={products.Img} description={products.Description}/>
     </div>
    ))}
    </>
  )
}

export default ProductsIterator