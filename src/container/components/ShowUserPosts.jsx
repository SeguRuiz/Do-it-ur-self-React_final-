import { useTheContext } from "../../context/ContextProvider";
import PublishBtn from "./PublishBtn";
import PostContainer from "./PostContainer";
const ShowUserPosts = () => {
  const {user_Posts} = useTheContext();

  console.log(user_Posts);

  return (
    <div className="user_Posts_Container">
      {user_Posts.map((posts, i) => (
        <div key={i} className="post_Container">
          <PostContainer text={posts.Description} Btn={<PublishBtn id={posts.id}/>} />
        </div>
      ))}


    </div>
  );
};

export default ShowUserPosts;
