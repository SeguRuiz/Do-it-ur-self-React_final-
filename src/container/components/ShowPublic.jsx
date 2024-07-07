import { useTheContext } from "../../context/ContextProvider";
import PostContainer1 from "./userPosts/PostContainer";
const ShowPublic = () => {
  const { publicData } = useTheContext();
  console.log(publicData);
  return (
    <>
      {publicData.map((data, i) => (
        <div key={i}>
          <PostContainer1 text={data.post.Description} user={data.user[0]}  />
        </div>
      ))}
    </>
  );
};

export default ShowPublic;
