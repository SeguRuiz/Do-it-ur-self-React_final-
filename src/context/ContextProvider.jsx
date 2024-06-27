import { useContext, createContext, useState, useEffect } from "react"
import { Posts_Tools } from "../utils/Fetchs/classes"
export const theContext = createContext()

export const ContextProvider = ({children}) => {
const [thisState, setState] = useState(false)
const userValidate = localStorage.getItem('user_Sesion') ?? false

useEffect(()=>{
const comprobate_User = async() =>{
  const see_Data = new Posts_Tools();
  const data = await see_Data.post_The_Data(true);

  const find_User = await data.find(users => users.id == userValidate) ?? false
  console.log(find_User);

  if (find_User != false) {
    setState(true)
  }
}
comprobate_User()
}, [userValidate])

  return (
    
  <theContext.Provider value={{thisState, setState}}>
  {children}
  </theContext.Provider> 
  )
}

export const useTheContext = () =>  useContext(theContext)