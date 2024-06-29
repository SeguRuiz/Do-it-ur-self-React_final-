
import AddPostForm from "../../components/AddPostForm"
import AddProducts from "../../components/AddProducts"
import ShowTheProducst from "../../components/ShowTheProducst"
import ShowUserPosts from "../../components/ShowUserPosts"
import Navbar_Ho from "../../components/Navbar_Ho"


const UserCrud = () => {
  return (
    <>
    <Navbar_Ho/>
    <div className="Container_Father_Profile">
      <div></div>
    <div className="profile_page_Container">
        <div className="user_Navigation_area">
          <div className="navigate"></div>
          <div className="navigate"></div>
        </div>
        <div className="user_Area">
            <div className="img_area"></div>
            <div className="info_User_Area">
              <div className="user_Circle">
                <div className="user_Imga">User</div>
              </div>
            </div>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default UserCrud