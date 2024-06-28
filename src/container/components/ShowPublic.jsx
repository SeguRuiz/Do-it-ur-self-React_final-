import { useTheContext } from "../../context/ContextProvider";
import PostContainer from "./PostContainer";
const ShowPublic = () => {
  const { publicData } = useTheContext();
  console.log(publicData);
  return (
    <>
      {publicData.map((data, i) => (
        <div key={i}>
          <PostContainer text={data.post.Description} user={data.user[0]} />
        </div>
      ))}
    </>
  );
};

export default ShowPublic;
