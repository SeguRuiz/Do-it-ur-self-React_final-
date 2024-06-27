import Navbar_Ho from "../../components/Navbar_Ho"
import AddPostForm from "../../components/AddPostForm"

const UserCrud = () => {
  return (
    <>
    <Navbar_Ho/>
    <div className="profile_page_Container">
        <div></div>
        <div className="user_Area">
            <div className="Img_Area">img Area</div>
            <div className="edit_Area">
            <AddPostForm/>
            </div>
        </div>
        <div></div>
    </div>
    </>
  )
}

export default UserCrud