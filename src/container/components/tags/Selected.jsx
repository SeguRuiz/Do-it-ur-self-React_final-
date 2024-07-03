import React, { useEffect, useRef, useState } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import { Put_Tools } from "../../../utils/Fetchs/classes";

const Selected = ({ id, text, product_id }) => {
  const { userInfo, data, updateData } = useTheContext();
  const checkRef = useRef();
  const divRef = useRef();

  const selected = () => {
    if (checkRef.current.checked == false) {
      divRef.current.className = "tagsTextSelector2";
      checkRef.current.checked = true;
      let userCopy1 = { ...userInfo };

      let theTag = userCopy1.tags.find((tags) => tags.id == id);

      userCopy1.products.forEach((e) => {
        if (e.id == product_id) {
          e.tags.push(theTag);
        }
      });

      let newUpdate = new Put_Tools(userCopy1);

      newUpdate.put_The_Data(userCopy1.id, newUpdate.data_For_Puts);

      setTimeout(() => {
        checkRef.current.checked = true;
        divRef.current.className = "tagsTextSelector2";
        updateData(data + 1);
      }, 200);
    } else if (checkRef.current.checked == true) {
      let userCopy = { ...userInfo };

      userCopy.products.forEach((e) => {
        if (e.id == product_id) {
          let filtered = e.tags.filter((tags) => tags.id != id);

          e.tags = filtered;
        }
      });

      let newUpdate = new Put_Tools(userCopy);

      newUpdate.put_The_Data(userCopy.id, newUpdate.data_For_Puts);

      setTimeout(() => {
        checkRef.current.checked = false;
        divRef.current.className = "tagsTextSelector";
        updateData(data + 1);
      }, 200);
    }
  };

  useEffect(() => {
    let findProduct =
      userInfo.products.find((products) => products.id == product_id) ?? false;
    let findTag = findProduct.tags.find((tags) => tags.id == id) ?? false;

    if (findTag != false && checkRef.current.id == findTag.id) {
      checkRef.current.checked = true;
      divRef.current.className = "tagsTextSelector2";
    }
  }, [data]);

  return (
    <>
      <label htmlFor={id}>
        <div
          onClick={selected}
          className="tagsTextSelector"
          id={id}
          ref={divRef}
        >
          {text}
        </div>
      </label>
      <input className="checkbox" type="checkbox" id={id} ref={checkRef} />
    </>
  );
};

export default Selected;
