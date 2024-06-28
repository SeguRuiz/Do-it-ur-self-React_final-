import { useRef } from "react";
import { useTheContext } from "../../context/ContextProvider";
import { Public_Posts_Tools, Put_Tools } from "../../utils/Fetchs/classes";

const PublishBtn = ({ id, key }) => {
  const { user_Posts, data, updateData, userInfo } = useTheContext();
  const Publish_Ref = useRef();

  const Publish_Action = async () => {
    if (userInfo != "") {
      let copyUser = { ...userInfo };
      let postsCopy = [...user_Posts];

      postsCopy.forEach((e) => {
        if (e.id == Publish_Ref.current.id) {
          e.State = 'Public'
        }
      });

      copyUser.posts = postsCopy
      
      let newUpdate = new Put_Tools(copyUser)
      newUpdate.put_The_Data(copyUser.id ,newUpdate.data_For_Puts)

      let post_To_Publicate = postsCopy.find(posts => posts.id == Publish_Ref.current.id)
      console.log(post_To_Publicate);
      
      let new_Publication = new Public_Posts_Tools(copyUser.id, post_To_Publicate)

      new_Publication.post_The_Data(new_Publication.data_For_Posts)
    }
  };
  return (
    <button id={id} key={key} onClick={Publish_Action} ref={Publish_Ref}>
      Publish
    </button>
  );
};

export default PublishBtn;
