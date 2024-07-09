import { useTheContext } from "../../../context/ContextProvider";
import CommentCont from "./CommentCont";
const ShowComments = ({ id }) => {
  const { publicData,  } = useTheContext();

  let thePost = publicData.find((posts) => posts.id == id);

  return (
    <>
      {thePost.comments.map((comments, i) => (
        <CommentCont
          userName={comments.user[0]}
          text={comments.text}
          key={comments.id}
          userId={comments.user[1]}
          post_Id={id}
          comment_Id={comments.id}
          img={comments.user[2]}
        />
      ))}
    </>
  );
};

export default ShowComments;
