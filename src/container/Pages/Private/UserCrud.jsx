import AddPostForm from "../../components/AddPostForm";
import AddProducts from "../../components/AddProducts";
import ShowTheProducst from "../../components/ShowTheProducst";
import ShowUserPosts from "../../components/ShowUserPosts";
import Navbar_Ho from "../../components/Navbar_Ho";

const UserCrud = () => {
  return (
    <>
      <Navbar_Ho />
      <div className="Container_Father_Profile">
        <div></div>
        <div className="profile_page_Container">
          <div className="user_Navigation_area">
            <div className="User_Navigate">
              <div className="profile"></div>
              <div className="greeting">
                <p className="tittle_G">Bienvenido</p>
                <p className="extra_info">User</p>
              </div>
            </div>
            <div className="navigate">
              <div className="option">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#979da6"
                  >
                    <path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h292.66v66.67H186.67v586.66h292.66V-120H186.67Zm470.66-176.67-47-48 102-102H360v-66.66h351l-102-102 47-48 184 184-182.67 182.66Z" />
                  </svg>
                </div>
                <p>Log Out</p>
              </div>
              <div className="option">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#979da6"
                  >
                    <path d="M186.67-80q-27.5 0-47.09-19.58Q120-119.17 120-146.67V-619q-17.33-7.67-28.67-23.76Q80-658.85 80-680v-133.33q0-27.5 19.58-47.09Q119.17-880 146.67-880h666.66q27.5 0 47.09 19.58Q880-840.83 880-813.33V-680q0 21.15-11.33 37.24Q857.33-626.67 840-619v472.33q0 27.5-19.58 47.09Q800.83-80 773.33-80H186.67Zm0-533.33v466.66h586.66v-466.66H186.67Zm-40-66.67h666.66v-133.33H146.67V-680ZM360-413.33h240V-480H360v66.67ZM480-380Z" />
                  </svg>
                </div>
                <p>Inventory</p>
              </div>
              <div className="option">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#979da6"
                  >
                    <path d="M120-120v-720h720v720H120Zm626.67-148.67H213.33v72h533.34v-72ZM213.33-316h533.34v-72H213.33v72Zm0-132.67h533.34v-298H213.33v298Zm0 180v72-72Zm0-47.33v-72 72Zm0-132.67v-298 298Zm0 60.67v-60.67V-388Zm0 119.33V-316v47.33Z" />
                  </svg>
                </div>
                <p>Posts</p>
              </div>
              <div className="option">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#979da6"
                  >
                    <path d="M448.67-280h66.66v-240h-66.66v240Zm31.32-316q15.01 0 25.18-9.97 10.16-9.96 10.16-24.7 0-15.3-10.15-25.65-10.16-10.35-25.17-10.35-15.01 0-25.18 10.35-10.16 10.35-10.16 25.65 0 14.74 10.15 24.7 10.16 9.97 25.17 9.97Zm.19 516q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" />
                  </svg>
                </div>
                <p>Info</p>
              </div>
            </div>
          </div>
          <div className="user_Area">
            <div className="img_area"></div>
            <div className="info_User_Area"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCrud;
