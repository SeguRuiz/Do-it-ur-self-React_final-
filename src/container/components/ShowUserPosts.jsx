import { useTheContext } from "../../context/ContextProvider";
import PublishBtn from "./PublishBtn";
const ShowUserPosts = () => {
  const {user_Posts, data, updateData } = useTheContext();

  

  return (
    <div className="user_Posts_Container">
      {user_Posts.map((posts, i) => (
        <div key={i} className="post_Container">
          <p className="posts_info">{'info: ' + posts.Description}</p>
          <div>
          <PublishBtn id={posts.id}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowUserPosts;
