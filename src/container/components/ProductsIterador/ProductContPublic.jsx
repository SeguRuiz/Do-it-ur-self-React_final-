import "../ProductsIterador/seeProducts.css"


const ProductContPublic = ({id, description, title, price, img}) => {
  
  
  return (
  <>
  <div className="Private_Product2" id={id}>
        <div className="info_Product2">
          <div className="text_Area2">
           <p className="title_product2">{title}</p>
            <textarea disabled value={description} className="textP2"></textarea>
          </div>
          <div className="Price_Area2">
            <h2 className="Price2">{price + '$'}</h2>
          </div>
        </div>
        <div className="imgProduct_Area2">
          <img src={img} alt=""className="publicImg"/>
        </div>
    </div>
  </>
  )
}

export default ProductContPublic