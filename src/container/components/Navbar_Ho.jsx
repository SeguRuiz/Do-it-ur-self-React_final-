import { useNavigate, Link } from "react-router-dom";
import { useTheContext } from "../../context/ContextProvider";

const Navbar_Ho = () => {
  const { thisState, data, updateData } = useTheContext();
  const go_To = useNavigate();

  return (
    <div className="navbar_Home">
      <div className="navigationa_Area">
        <h2
          className="title"
          onClick={() => {
            go_To("/Home");
          }}
        >
          Inicio
        </h2>

        <p
          className="Community_link"
          onClick={() => {
            go_To("/Home/Community");
          }}
        >
          Comunidad
        </p>
        <p
          className="Products_link"
          onClick={() => {
            go_To("/Home/Products");
          }}
        >
          Productos
        </p>
      </div>
      <div className="User_Area">
        {thisState ? (
          <div className="aboutUs_Profile">
            <div
              className="profile_Container"
              onClick={() => {
                updateData(data + 1)
                go_To("/Home/Profile");
              }}
            >
              <p>Perfil</p>
            </div>

            <p
              className="about_Link"
              onClick={() => {
                go_To("/Home/AboutUs");
              }}
            >
              Sobre nosotros
            </p>
          </div>
        ) : (
          <div className="aboutUs_Profile">
            <div className="Log_in">
              <p
                onClick={() => {
                  go_To("/");
                }}
              >
                Logeate
              </p>
            </div>

            <p
              className="about_Link"
              onClick={() => {
                go_To("/Home/AboutUs");
              }}
            >
              Sobre nosotros
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar_Ho;
