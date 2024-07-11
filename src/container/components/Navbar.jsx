import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navegar = useNavigate();

  const [state, setState] = useState("");

  let go_to_Register = () => {
    navegar("/Register");
    setState("Register");
  };
  let go_to_Login = () => {
    setState("Login");
    navegar("/");
  };

  return (
    <div id="nav">
      <h3
        onClick={go_to_Login}
        className={state == "Login" ? "navLog11" : "navLog1"}
      >
        Login
      </h3>
      <h3
        onClick={go_to_Register}
        className={state == "Register" ? "navLog22" : "navLog2"}
      >
        Register
      </h3>
    </div>
  );
};

export default Navbar;
