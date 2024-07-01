


const ProductContainer = ({key, id, description, title, price}) => {
  return (
    <div key={key} className="Private_Product" id={id}>
        <div className="info_Product">
          <div className="text_Area">
           <p className="title_product">{title}</p>
            <textarea disabled value={description} className="textP"></textarea>
          </div>
          <div className="Price_Area">
            <h2 className="Price">{price}</h2>
            <div className="Btns_Area">botones(Wip)</div>
          </div>
        </div>
        <div className="imgProduct_Area"></div>
    </div>
  )
}

export default ProductContainer