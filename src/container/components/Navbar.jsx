import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navegar = useNavigate();

  let go_to_Register = () => {
    navegar("/Register");
  };
  let go_to_Login = () => {
    navegar("/");
  };

  return (
    <div id="nav">
      <h3 onClick={go_to_Login}>Login</h3>
      <h3 onClick={go_to_Register}>Register</h3>
    </div>
  );
};

export default Navbar;
