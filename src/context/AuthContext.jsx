import { createContext, useState } from "react";
import { lightTheme,darkTheme } from "../ThemeFolder/theme";
const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({ children }) => {
    // const [answerData, setAnswerData] = useState();
    // const [user, setUser] = useState(localStorage.getItem("token")?localStorage.getItem("token"):null);
    const [username,setUsername]=useState(localStorage.getItem("username")?localStorage.getItem("username"):null)
    const [token,setToken]=useState(localStorage.getItem("token")?localStorage.getItem("token"):null)
    const [gmail,setGmail]=useState(localStorage.getItem("gmail")?localStorage.getItem("gmail"):null)
    const [imglst,setImgLst]=useState([])
    // .........theme...........
    const [theme,setTheme]=useState(lightTheme)
    // ..........................
    const [profileLink,setProfileLink]=useState("")
    // const [id,setId]=useState()
    // ..........current path..
    const [currentPath,setCurrentPath]=useState("")
    let ContextData = {
      username:username,
      setUsername:setUsername,
      token,
      setToken,
      gmail,
      setGmail,
      imglst,
      setImgLst,
      theme,
      setTheme,
      setProfileLink,
      profileLink,
      currentPath,
      setCurrentPath
      
    };
      
    return (
      <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
    );
  };
  