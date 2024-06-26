import { useContext, createContext, useState, useEffect } from "react";
import { Posts_Tools, Public_Posts_Tools } from "../utils/Fetchs/classes";
export const theContext = createContext();

export const ContextProvider = ({ children }) => {
  //Users context
  const userValidate = localStorage.getItem("user_Sesion") ?? false;
  const [thisState, setState] = useState(false);
  const [user_Posts, setUser] = useState([]);
  const [user_Products, setUserP] = useState([])
  const [userInfo, setUserInfo] = useState("");
  const [data, updateData] = useState(0);

  //Public posts Context
  const [publicData, setPuData] = useState([]);

  //Users_Crud Context
  const [usersPage, setPage] = useState('Info')

  useEffect(() => {
    const comprobate_User = async () => {
      const see_Data = new Posts_Tools();
      const data = await see_Data.post_The_Data();

      const see_Public_Data = new Public_Posts_Tools();
      const public_Data = (await see_Public_Data.post_The_Data()) ?? false;

      const find_User =
        (await data.find((users) => users.id == userValidate)) ?? false;

      if (find_User != false) {
        setState(true);
        setUser(find_User.posts);
        setUserP(find_User.products)
        
        setUserInfo(find_User);
      }

      if (public_Data != false) {
        setPuData(public_Data);
      }
      
    };
    comprobate_User();
  }, [data, userValidate]);

  return (
    <theContext.Provider
      value={{
        thisState,
        setState,
        user_Posts,
        data,
        updateData,
        userInfo,
        publicData,
        user_Products,
        usersPage,
        setPage
      }}
    >
      {children}
    </theContext.Provider>
  );
};

export const useTheContext = () => useContext(theContext);
