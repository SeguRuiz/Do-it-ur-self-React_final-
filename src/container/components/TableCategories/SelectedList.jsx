import { useEffect, useRef, useState } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import Selected from "../tags/Selected";
import "./categoriModal.css"

const SelectedList = ({ product_id }) => {
  const { user_Products, userInfo, data, updateData } = useTheContext();

  const [activeTags, setCativeTags] = useState([]);
 //Pondra como categorias activas las que el producto tiene si no, no lo seran
  useEffect(() => {
    let findProduct =
      userInfo.products.find((products) => products.id == product_id) ?? false;

    setCativeTags(findProduct.tags);
  }, [userInfo]);

  return (
    <>
      {activeTags.map((tags) => (
        <div key={tags.id} id={tags.id} className="tagsDivSelector2">
          <Selected text={tags.tagName} id={tags.id} product_id={product_id} />
        </div>
      ))}
      
    </>
  );
};

export default SelectedList;
