
import { useTheContext } from "../../../context/ContextProvider";
import PostContPublic from "./postContPublic";
const ShowPublic = () => {
  const { publicData,  } = useTheContext();
  

 
  return (
    <>
      {publicData.map((data, i) => (
        <div key={i}>
          <PostContPublic text={data.post.Description} user={data.user[0]} img={data.post.Img} id={data.id} profileImg={data.post.user[0]}/>
        </div>
      ))}
    </>
  );
};

export default ShowPublic;
