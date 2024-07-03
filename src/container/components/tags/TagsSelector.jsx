import { useTheContext } from "../../../context/ContextProvider";
import Selected from "./Selected";

const TagsSelector = ({product_id}) => {
  const { user_Products, userInfo, data, updateData } = useTheContext();

  return (
    <>
      {userInfo.tags.map((tags) => (
        <div key={tags.id} id={tags.id} className="tagsDivSelector">
          <Selected text={tags.tagName} id={tags.id} product_id={product_id} />
        </div>
      ))}
    </>
  );
};

export default TagsSelector;
