import TagsSelector from "./tags/TagsSelector"


const ProductContainer = ({key, id, description, title, price, btns}) => {
  return (
    <div key={key} className="Private_Product" id={id}>
        <div className="info_Product">
          <div className="text_Area">
           <p className="title_product">{title}</p>
            <textarea disabled value={description} className="textP"></textarea>
          </div>
          <div className="Price_Area">
            <h2 className="Price">{price}</h2>
            <div className="Btns_Area">
              <div className="eliminate_Publish">
               {btns}
              </div>
              <div className="CategoriesArea">
              <TagsSelector product_id={id} />
              </div>
            </div>
          </div>
        </div>
        <div className="imgProduct_Area"></div>
    </div>
  )
}

export default ProductContainer