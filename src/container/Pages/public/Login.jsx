import Inpts from "../../components/Inpts";
import { Posts_Tools } from "../../../utils/Fetchs/classes";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useTheContext } from "../../../context/ContextProvider";

const Login = () => {
  const { setState, data, updateData } = useTheContext();

  const go_To_Home = useNavigate();

  let [validate_State, set_Validate_State] = useState({
    user_Name: null,
    info_To_User: "Login",
  });

  let inp_User_Login = useRef();
  let inp_Pass_Login = useRef();

  console.log(inp_Pass_Login.current);

  const validate_User = async (x) => {
    x.preventDefault();

    const see_Data = new Posts_Tools();
    const data = await see_Data.post_The_Data();

    data
      ? console.log("no hubo errores en el fetch")
      : set_Validate_State((state) => ({
          ...state,
          info_To_User: "Ocurrio un error verificando tu informacion",
        }));

    let user_Value = inp_User_Login.current.value.trim();
    let Pass_Value = inp_Pass_Login.current.value.trim();

    let find_User_Name =
      (await data.find((users) => users.info.name == user_Value)) ?? false;
    let find_User_Pass =
      (await data.find((users) => users.info.password == Pass_Value)) ?? false;

    if (
      user_Value != "" &&
      Pass_Value != "" &&
      find_User_Name != false &&
      find_User_Pass != false &&
      data != false
    ) {
      localStorage.setItem("user_Sesion", find_User_Name.id);
      updateData(data + 1);

      setState(true);

      set_Validate_State((state) => ({
        ...state,
        info_To_User: "Bienvenido " + user_Value,
      }));

      setTimeout(() => {
        go_To_Home("/Home");
      }, 1000);
    } else {
      if (user_Value == "" || Pass_Value == "") {
        set_Validate_State((state) => ({
          ...state,
          info_To_User: "Rellena los espacios en blanco",
        }));
        setTimeout(() => {
           set_Validate_State((state) => ({
          ...state,
          info_To_User: "Login",
        }));
        }, 1500);
      } else {
        if (find_User_Name == false || find_User_Pass == false) {
          set_Validate_State((state) => ({
            ...state,
            info_To_User: "Esos datos no fueron encontrados",
          }));
          setTimeout(() => {
           set_Validate_State((state) => ({
          ...state,
          info_To_User: "Login",
        }));
        }, 1500);
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <div id="form_L">
        <h1>{validate_State.info_To_User}</h1>
      </div>
      <div id="form_L">
        <form onSubmit={validate_User}>
          <label htmlFor="">User</label>
          <br />
          <Inpts type={"text"} ref={inp_User_Login} />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <Inpts
            type={"password"}
            
            ref={inp_Pass_Login}
          />
          <br />
          <br />
          <button className="submit_Btn" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#979da6"
              className="iconLOg"
            >
              <path d="M480.67-120v-66.67h292.66v-586.66H480.67V-840h292.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H480.67Zm-63.34-176.67-47-48 102-102H120v-66.66h351l-102-102 47-48 184 184-182.67 182.66Z" />
            </svg>
            <p>Logeate</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
