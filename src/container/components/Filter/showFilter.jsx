import { useRef, useState } from "react";
import { useTheContext } from "../../../context/ContextProvider";

const ShowFilter = () => {
  const { tags, data, updateData, setActiveTag } = useTheContext();
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#ffffff"
        className="filterIcon"
      >
        <path d="M400-240v-66.67h160V-240H400ZM240-446.67v-66.66h480v66.66H240ZM120-653.33V-720h720v66.67H120Z" />
      </svg>
      <select
        ref={selectRef}
        onChange={changeSelect}
        value={value}
        className="select"
      >
        <option value={"defecto"}>Sin filtros</option>
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
