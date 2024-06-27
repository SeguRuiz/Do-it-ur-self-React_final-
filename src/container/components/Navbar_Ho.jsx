import { useNavigate } from "react-router-dom";

const Navbar_Ho = () => {
  const go_To_Community = useNavigate();
  const go_To_Products = useNavigate();
  const go_To_Home = useNavigate();

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
        <h3>Log in</h3>
        <h3>Sing in</h3>
      </div>
    </div>
  );
};

export default Navbar_Ho;
