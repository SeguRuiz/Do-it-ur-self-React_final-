import { Route, Routes } from "react-router-dom";
import Home from "../container/Pages/public/Home";
import Login from "../container/Pages/public/Login";
import Register from "../container/Pages/public/Register";
import Comunnity from "../container/Pages/Private/Comunnity";
import UserCrud from "../container/Pages/Private/UserCrud";
import Products from "../container/Pages/public/Products";
import NotFound from "../container/Pages/public/NotFound";
import About_Us from "../container/Pages/public/About_Us";
import Navbar from "../container/components/Navbar";
import "../Styles/index.css";
import "../Styles/Navbar_Home.css";
import "../Styles/userCrud.css";
import "../container/components/userPosts/Posts.css";
import "../Styles/Community.css";
import "../Styles/Products.css";
import "../Styles/AboutUs.css"
import "../Styles/infoUser.css"
import "../Styles/home.css"
import "../Styles/proucts_modal/addProducts.css"
import "../Styles/ConfirmStyles/confirm.css"
import { useTheContext } from "../context/ContextProvider";
import { ContextProvider } from "../context/ContextProvider";

const App = () => {
  

  return (
    <>
    
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Home/Profile" element={<UserCrud />} />
      <Route path="/Home/Community" element={<Comunnity />} />
      <Route path="/Home/Products" element={<Products />} />
      <Route path="/Home/AboutUs" element={<About_Us/>}/>
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </>
  );
};

export default App;
