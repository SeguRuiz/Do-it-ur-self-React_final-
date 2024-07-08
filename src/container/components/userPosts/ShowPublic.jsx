import { Login } from "@mui/icons-material";
import { useTheContext } from "../../../context/ContextProvider";
import PostContPublic from "./postContPublic";
const ShowPublic = () => {
  const { publicData } = useTheContext();
  

 
  return (
    <>
      {publicData.map((data, i) => (
        <div key={i}>
          <PostContPublic text={data.post.Description} user={data.user[0]} img={data.post.Img} id={data.id}/>
        </div>
      ))}
    </>
  );
};

export default ShowPublic;
