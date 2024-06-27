import { useContext, createContext, useState, useEffect } from "react";
import { Posts_Tools } from "../utils/Fetchs/classes";
export const theContext = createContext();

export const ContextProvider = ({ children }) => {
  const [thisState, setState] = useState(false);
  const [userInSesion , setUser] = useState(null)
  const [data, updateData] = useState(0)
  const userValidate = localStorage.getItem("user_Sesion") ?? false;

  useEffect(() => {
    const comprobate_User = async () => {
      const see_Data = new Posts_Tools();
      const data = await see_Data.post_The_Data();
      

      const find_User =
        (await data.find((users) => users.id == userValidate)) ?? false;

      if (find_User != false) {
        setState(true);
        setUser(find_User)
        console.log(find_User);
      }
    };
    comprobate_User();
  }, [data, userValidate]);

  

  return (
    <theContext.Provider value={{ thisState, setState, userInSesion, data, updateData}}>
      {children}
    </theContext.Provider>
  );
};

export const useTheContext = () => useContext(theContext);
