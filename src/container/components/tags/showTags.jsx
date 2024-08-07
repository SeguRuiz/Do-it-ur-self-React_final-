import { useTheContext } from "../../../context/ContextProvider";
import DeleteTags from "./deleteTags";

const ShowTags = () => {
  const { userInfo } = useTheContext();
  return (
    <>
      {userInfo.tags.map((tags) => (
        <div key={tags.id} id={tags.id}className="tagsDiv">
          <textarea id={tags.id} className="tagsText" disabled value={tags.tagName}></textarea> <DeleteTags id={tags.id} />
        </div>
      ))}
    </>
  );
};

export default ShowTags;
