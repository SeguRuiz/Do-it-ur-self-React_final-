import Navbar_Ho from "../../components/Navbar_Ho";
import ShowPublic from "../../components/userPosts/ShowPublic";
import { useTheContext } from "../../../context/ContextProvider";

const Comunnity = () => {
  const { publicData } = useTheContext();
  if (publicData[0] == undefined) {
    console.log(true);
  } else {
    console.log(false);
  }
  return (
    <>
      <Navbar_Ho />
      {publicData[0] == undefined ? (
         <div className="Community_page_Container">
          <div></div>
          <div className="Community_Posts_Area">
            <h1>No hay posteos</h1>
          </div>
        </div>
      ) : (
        <div className="Community_page_Container">
          <div></div>
          <div className="Community_Posts_Area">
            <ShowPublic />
          </div>
        </div>
      )}
    </>
  );
};

export default Comunnity;
