import { useNavigate } from "react-router-dom";
import { useTheContext } from "../../context/ContextProvider";

const Navbar_Ho = () => {
  const { thisState } = useTheContext();

  const go_To_Community = useNavigate();
  const go_To_Products = useNavigate();
  const go_To_Home = useNavigate();
  const go_To_Login = useNavigate();
  const got_To_Profile = useNavigate();
  const go_About_Us = useNavigate();

  return (
    <div className="navbar_Home">
      <div className="navigationa_Area">
        <h3
          onClick={() => {
            go_To_Home("/Home");
          }}
        ></h3>
        <h3
          onClick={() => {
            go_To_Community("/Home/Community");
          }}
        >
          Community
        </h3>
        <h3
          onClick={() => {
            go_To_Products("/Home/Products");
          }}
        >
          Products
        </h3>
      </div>
      <div className="User_Area">
        {thisState ? (
          <>
            <h3
              onClick={() => {
                got_To_Profile("/Home/Profile");
              }}
            >
              Profile
            </h3>

            <h3
              onClick={() => {
                got_To_Profile("/Home/AboutUs");
              }}
            >
            About Us
            </h3>
          </>
        ) : (
          <>
            <h3
              onClick={() => {
                go_To_Login("/");
              }}
            >
              Log in
            </h3>

            
            <h3>Sing in</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar_Ho;
