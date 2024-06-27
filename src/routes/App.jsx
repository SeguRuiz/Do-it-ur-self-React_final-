import { Route, Routes } from "react-router-dom";
import Home from "../container/Pages/Home";
import Login from "../container/Pages/Login";
import Register from "../container/Pages/Register";
import '../Styles/index.css'


const  App = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Register" element={<Register/>}/>
      <Route path="/"  element={<Login/>}/>
    </Routes>
  );
}

export default App;
