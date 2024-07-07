import { useRef, useEffect, useState } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import { Public_Posts_Tools, Put_Tools } from "../../../utils/Fetchs/classes";
import { Delete_ToolsPosts } from "../../../utils/Fetchs/classes";
import ConfirmModal from "../Confirm/confirmModal";
import "./Posts.css";

const PublishBtn = ({ id, key }) => {
  const { user_Posts, data, updateData, userInfo,  publicData } = useTheContext();
  const Publish_Ref = useRef();
  const confirmModal = useRef()

  const [btnFunction, setFunction] = useState("Publicar");
  
  const openModal = () => {
  confirmModal.current.showModal()
  }
  const Publish_Action = async () => {
    // let thePost = postsCopy.find((posts) => posts.id == id) ?? false;

    if (userInfo != "" && btnFunction == "Publicar") {
      let copyUser = { ...userInfo };
      let postsCopy = [...user_Posts];
      

     

      postsCopy.forEach((e) => {
        if (e.id == id) {
          e.State = "Public";
        }
      });
       

      copyUser.posts = postsCopy;
      
      

      let newUpdate = new Put_Tools(copyUser);
      newUpdate.put_The_Data(copyUser.id, newUpdate.data_For_Puts);

      let post_To_Publicate = postsCopy.find(
        (posts) => posts.id == id
      );

      let new_Publication = new Public_Posts_Tools(
        [copyUser.info.name, copyUser.id],
        post_To_Publicate
      );

      new_Publication.post_The_Data(new_Publication.data_For_Posts);

      setTimeout(() => {
        updateData(data + 1);
      }, 200);
      confirmModal.current.close()
    } else if (userInfo != "" && btnFunction == "Privatizar") {
      let thePorduct_inPublic = publicData.filter(info => info.post.id == id)
      console.log(thePorduct_inPublic);


      let copyUser = { ...userInfo };
      let postsCopy = [...user_Posts];

      postsCopy.forEach((e) => {
        if (e.id == id) {
          e.State = "Private";
        }
      });

      copyUser.posts = postsCopy;

      let newUpdate = new Put_Tools(copyUser);
      newUpdate.put_The_Data(copyUser.id, newUpdate.data_For_Puts);
      

      let newDelete = new Delete_ToolsPosts()
      newDelete.delete_The_Data(thePorduct_inPublic[0].id)

      
      setTimeout(() => {
        updateData(data + 1);
      }, 200);

       confirmModal.current.close()
    }
  };

  useEffect(() => {
    let thePost = user_Posts.find((posts) => posts.id == id) ?? false;
    console.log(thePost);
    if (thePost != false && thePost.State == "Public") {
      setFunction("Privatizar");
    } else if (thePost != false && thePost.State == "Private") {
      setFunction("Publicar");
    }
  }, [data]);

  return (
  <>
    <ConfirmModal
        text={
          btnFunction == "Privatizar"
            ? "Quieres privatizarlo?"
            : "Quieres Publicarlo?"
        }
        ref={confirmModal}
        acceptFunction={Publish_Action}
      />
    <div>
      <button
        id={id}
        key={key}
        onClick={openModal}
        ref={Publish_Ref}
        className="Publish_BTN"
      >
        {btnFunction}
      </button>
    </div>
    </>
  );
};

export default PublishBtn;
