import { useRef, useState } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import { ProductPut_Tools } from "../../../utils/Fetchs/classes";
const ShowFilter = () => {
  const { tags, producstData, data, updateData, setActiveTag } =
    useTheContext();
  const selectRef = useRef();

  const [value, setValue] = useState("hola");

  const changeSelect = (o) => {
    setValue(o.target.value);
    setActiveTag(o.target.value);
    setTimeout(() => {
      updateData(data + 1);
    }, 200);
  };

  return (
    <>
      <select ref={selectRef} onChange={changeSelect} value={value}>
        <option value={"defecto"}>defecto</option>
        {tags.map((tags, i) => (
          <option value={tags.tagName} key={i} id={tags.id}>
            {tags.tagName}
          </option>
        ))}
      </select>
    </>
  );
};

export default ShowFilter;
