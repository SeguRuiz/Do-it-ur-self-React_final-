import { useTheContext } from "../../../context/ContextProvider"
import ProductContPublic from "./ProductContPublic"
import { Put_Tools, Products_Posts_Tools } from "../../../utils/Fetchs/classes"
import "../ProductsIterador/seeProducts.css"

const ProductsIterator = () => {
const {data, updateData, producstData} = useTheContext()

console.log(producstData);

console.log(producstData)
  return (
    <>
    {producstData.map((products, i) => (
     <div key={products.id}>
       <ProductContPublic title={products.Title} price={products.Price} img={products.Img} description={products.Description}/>
     </div>
    ))}
    </>
  )
}

export default ProductsIterator