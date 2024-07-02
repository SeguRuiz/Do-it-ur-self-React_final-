import { useTheContext } from "../../../context/ContextProvider";
import PublishBtn from "./PublishBtn";
import PostContainer1 from "./PostContainer";
import AddPostForm from "./AddPostForm";
const ShowUserPosts = () => {
  const { user_Posts } = useTheContext();

  console.log(user_Posts);

  return (
    <>
      <div className="Inventory_Posts">
        <div className="ProductsContainer">
          <div className="Posts">
            {user_Posts.map((posts, i) => (
              <div key={i} className="product_Container">
                <PostContainer1 Btn={<PublishBtn/>} text={posts.Description} />
              </div>
            ))}
          </div>
        </div>

        <div className="addProduct_Area">
         <AddPostForm/>
        
        </div>
      </div>
    </>
  );
};

export default ShowUserPosts;
