import Navbar_Ho from "../../components/Navbar_Ho"
import AddPostForm from "../../components/AddPostForm"
import AddProducts from "../../components/AddProducts"
import ShowTheProducst from "../../components/ShowTheProducst"
import ShowUserPosts from "../../components/ShowUserPosts"

const UserCrud = () => {
  return (
    <>
    <Navbar_Ho/>
    <div className="profile_page_Container">
        <div></div>
        <div className="user_Area">
            <div className="Img_Area">img Area</div>
            <div className="edit_Area">
            {/* <AddPostForm/> */}
            <div className="user_Posts">
            {/* <ShowUserPosts/> */}
            </div>
            {/* <AddProducts/> */}
            <div className="productF">
            {/* <ShowTheProducst/> */}
            </div>
            </div>
            <br />
            
        </div>
        <div></div>
    </div>
    </>
  )
}

export default UserCrud