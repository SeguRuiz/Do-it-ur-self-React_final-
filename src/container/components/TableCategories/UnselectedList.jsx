import { useRef, useEffect, useState } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import Selected from "../tags/Selected";
import "./categoriModal.css"
const UnselectedList = ({ product_id }) => {
  const { user_Products, userInfo, data, updateData } = useTheContext();

  const [unActiveTags, setUnactiveTags] = useState([]);
  const unActiveTagsRef = useRef([]);
  //Revisara el las categorias del producto y el admin para verificar cual esta disponible
  useEffect(() => {
    let userCopy = {...userInfo}
   
    let findProduct =
      userInfo.products.find((products) => products.id == product_id) ?? false;
    
      findProduct.tags.forEach((e) => {
     let filtered =  userCopy.tags.filter(tags => tags.id  != e.id)
     userCopy.tags = filtered
    });

    setUnactiveTags(userCopy.tags)
    updateData(data + 1)
    
    console.log(userCopy);
  }, [user_Products, userInfo]);

  return (
    <>
      {unActiveTags.map((tags) => (
        <div key={tags.id} id={tags.id} className="tagsDivSelector2">
          <Selected text={tags.tagName} id={tags.id} product_id={product_id} />
        </div>
      ))}
    </>
  );
};

export default UnselectedList;
