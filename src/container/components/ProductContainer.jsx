import TagsSelector from "./tags/TagsSelector";
import { useTheContext } from "../../context/ContextProvider";

const ProductContainer = ({ key, id, description, title, price, btns }) => {
  const { user_Products, userInfo, data, updateData } = useTheContext();
  return (
    <div key={key} className="Private_Product" id={id}>
      <div className="info_Product">
        <div className="text_Area">
          <p className="title_product">{title}</p>
          <textarea disabled value={description} className="textP"></textarea>
        </div>
        <div className="Price_Area">
          <h2 className="Price">{price + "$"}</h2>
          <div className="Btns_Area">
            <div className="eliminate_Publish">{btns}</div>

            {userInfo.tags[0] == undefined ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#8bb4f8"
                className="emptyTags"
              >
                <path d="m722.67-314.67-48-48L757.33-480l-150-213.33H344L277.33-760H600q24 0 40 9.83 16 9.84 29.33 28.84L840-480 722.67-314.67ZM792-56 638-210q-6.33 5-17.33 7.5-11 2.5-22.32 2.5H186.67q-26.34 0-46.5-20.17Q120-240.33 120-266.67V-680q0-13 2.83-21.33 2.84-8.34 7.17-16.67l-74-74 46.67-46.67 736 735.34L792-56ZM383-461.33Zm129.33-64.34Zm69 259L186.67-661.33v394.66h394.66Z" />
              </svg>
            ) : (
              <div className="CategoriesArea">
                <TagsSelector product_id={id} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="imgProduct_Area"></div>
    </div>
  );
};

export default ProductContainer;
