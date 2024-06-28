
const ProductContainer = ({key, id, text}) => {
  return (
    <div key={key} className="Private_Product" id={id}>
        <div className="img_Product">stuff</div>
        <div className="info_Product">
            <div>title</div>
            <textarea  value={text} disabled className="product_Text"></textarea>
        </div>
    </div>
  )
}

export default ProductContainer