import { useTheContext } from "../../../context/ContextProvider"
import ProductContainer from "../ProductContainer";
import ElimiPublish from "../ElimiPublicar/ElimiPublish";

const PrivateProducts = () => {
    const { user_Products, userInfo } = useTheContext();
  return (
      <>
    {user_Products.map((product, i) => (
        <div key={i} className="product_Container">
          <ProductContainer
            description={product.Description}
            title={product.Title}
            price={product.Price}
            id={product.id}
            btns={<ElimiPublish id={product.id} />}
          />
        </div>
      ))}
      </>
  )
}

export default PrivateProducts