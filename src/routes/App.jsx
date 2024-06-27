import { Route, Routes } from "react-router-dom";
import Home from "../container/Pages/public/Home";
import Login from "../container/Pages/public/Login";
import Register from "../container/Pages/public/Register";
import Comunnity from "../container/Pages/Private/Comunnity";
import UserCrud from "../container/Pages/Private/UserCrud";
import Products from "../container/Pages/public/Products";
import "../Styles/index.css";
import "../Styles/Navbar_Home.css";
import { useTheContext } from "../context/ContextProvider";

const App = () => {
  const { thisState } = useTheContext();
  console.log(thisState);
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Home/Profile" element={<UserCrud />} />
      <Route path="/Home/Community" element={<Comunnity />} />
      <Route path="/Home/Products" element={<Products/>}/>
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Login />} />
      
    </Routes>
  );
};

export default App;
