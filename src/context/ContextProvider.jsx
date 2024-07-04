import { useContext, createContext, useState, useEffect, useRef } from "react";
import {
  Posts_Tools,
  Public_Posts_Tools,
  Products_Posts_Tools,
} from "../utils/Fetchs/classes";
export const theContext = createContext();

export const ContextProvider = ({ children }) => {
  //Users context
  const userValidate = localStorage.getItem("user_Sesion") ?? false;
  const [thisState, setState] = useState(false);
  const [user_Posts, setUser] = useState([]);
  const [user_Products, setUserP] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  const [data, updateData] = useState(0);

  //Public posts Context
  const [publicData, setPuData] = useState([]);

  //Users_Crud Context
  const [usersPage, setPage] = useState("Info");

  //Productos publicos
  const [producstData, setProducts] = useState([]);
  const refProducts = useRef([]);

  //Admin tags
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState("defecto");

  //SearchBar
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const comprobate_User = async () => {
      const see_Data = new Posts_Tools();
      const data = await see_Data.post_The_Data();

      const see_Products_Data = new Products_Posts_Tools();
      const Products_Data = (await see_Products_Data.post_The_Data()) ?? false;

      const see_Public_Data = new Public_Posts_Tools();

      const public_Data = (await see_Public_Data.post_The_Data()) ?? false;

      const find_User =
        (await data.find((users) => users.id == userValidate)) ?? false;

      if (find_User != false) {
        setState(true);
        setUser(find_User.posts);
        setUserP(find_User.products);
        setUserInfo(find_User);
        setTags(find_User.tags);
      }

      if (public_Data != false) {
        setPuData(public_Data);
      }

      if (activeTag == "defecto") {
        refProducts.current = Products_Data;
        setProducts(Products_Data);
      } else {
        refProducts.current = [];
        Products_Data.forEach((e) => {
          e.tags.forEach((x) => {
            if (x.tagName == activeTag) {
              refProducts.current.push(e);
              setProducts(refProducts.current);
            }
          });
        });
      }

      // if (refProducts.current[0] == undefined) {
      //   console.log("no hay nada");
      // } else {
      //   console.log("si hay algo");
      // }
    };
    comprobate_User();
  }, [data, userValidate]);



  useEffect(() => {
    const searchFilter = async () => {
      if (searchValue == "") {
        const see_Products_Data = new Products_Posts_Tools();
        const Products_Data =
          (await see_Products_Data.post_The_Data()) ?? false;

        refProducts.current = Products_Data;
        setProducts(Products_Data);
      } else {
        refProducts.current = [];
        producstData.forEach((e) => {
          if (
            e.Title.toUpperCase().includes(searchValue.toUpperCase()) == true
          ) {
            refProducts.current.push(e);
            setProducts(refProducts.current);
            
          }
          
        });
      }
    };
    searchFilter();
  }, [searchValue]);

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
        setPage,
        producstData,
        tags,
        setActiveTag,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </theContext.Provider>
  );
};

export const useTheContext = () => useContext(theContext);
