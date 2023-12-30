import { createContext, useState } from "react";

const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({ children }) => {
    // const [answerData, setAnswerData] = useState();
    // const [user, setUser] = useState(localStorage.getItem("token")?localStorage.getItem("token"):null);
    const [username,setUsername]=useState(localStorage.getItem("username")?localStorage.getItem("username"):null)
    const [token,setToken]=useState(localStorage.getItem("token")?localStorage.getItem("token"):null)
    const [gmail,setGmail]=useState(localStorage.getItem("gmail")?localStorage.getItem("gmail"):null)
    // const [id,setId]=useState()
    let ContextData = {
      username:username,
      setUsername:setUsername,
      token,
      setToken,
      gmail,
      setGmail
      
    };
      
    return (
      <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
    );
  };
  