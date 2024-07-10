import { useContext, createContext, useState, useEffect, useRef } from "react";
import {
  Posts_Tools,
  Public_Posts_Tools,
  Products_Posts_Tools,
} from "../utils/Fetchs/classes";
import { Login } from "@mui/icons-material";
import UserInfo from "../container/components/UseCrud/UserInfo";

export const theContext = createContext();

export const ContextProvider = ({ children }) => {
  //Admin Info
  const [AdminInfo, setAdmin] = useState("");
  const loggedRef = useRef(false);
  const [AdminLogged, setAdminLogged] = useState(false);

  const adminRef = useRef({});
  //Users context

  const [thisState, setState] = useState(false);
  const [user_Posts, setUser] = useState([]);
  const [user_Products, setUserP] = useState([]);

  const userRef = useRef({});
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
  const [search, setSearch] = useState("sin Busqueda");
  const [searchValue, setSearchValue] = useState("");

  //
  const emptyApi = useRef([]);
  useEffect(() => {
    const userValidate = localStorage.getItem("user_Sesion") ?? false;
    const comprobate_User = async () => {
      const see_Data = new Posts_Tools();
      const data = await see_Data.post_The_Data();

      const see_Products_Data = new Products_Posts_Tools();

      const Products_Data = (await see_Products_Data.post_The_Data()) ?? false;
      emptyApi.current = Products_Data;

      const see_Public_Data = new Public_Posts_Tools();

      const public_Data = (await see_Public_Data.post_The_Data()) ?? false;

      const find_User =
        (await data.find((users) => users.id == userValidate)) ?? false;
      const findAdmin =
        (await data.find((users) => users.id == "1181")) ?? false;

      adminRef.current = findAdmin;
      setAdmin(adminRef.current);

      userRef.current = find_User;
      setUserInfo(userRef.current);

      setState(true);
      setTags(adminRef.current.tags);
      setUserP(adminRef.current.products);

      setUser(find_User.posts);

      setPuData(public_Data);

      if (userValidate == findAdmin.id) {
        loggedRef.current = true;
        setAdminLogged(true);
      }
      

      if (userValidate != findAdmin.id) {
        
        loggedRef.current = false;
        setAdminLogged(false);
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
  }, [data]);

  useEffect(() => {
    const searchFilter = async () => {
      setSearch("Sin busqueda");
      if (searchValue == "") {
        const see_Products_Data = new Products_Posts_Tools();
        const Products_Data =
          (await see_Products_Data.post_The_Data()) ?? false;

        refProducts.current = Products_Data;
        setProducts(Products_Data);
      } else {
        setSearch("En busqueda");
        refProducts.current = [];

        producstData.forEach((e) => {
          if (
            e.Title.toUpperCase().includes(searchValue.toUpperCase()) == true
          ) {
            refProducts.current.push(e);
            setProducts(refProducts.current);
          }
        });
        console.log(refProducts);
      }
    };
    searchFilter();
  }, [searchValue]);
  console.log(search);
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
        search,
        refProducts,
        emptyApi,
        setUserP,
        AdminInfo,
        AdminLogged,
        loggedRef,
      }}
    >
      {children}
    </theContext.Provider>
  );
};

export const useTheContext = () => useContext(theContext);
