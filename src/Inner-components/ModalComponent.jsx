import React, { useContext, useEffect, useState } from "react";
import ScrollTobBottom from "react-scroll-to-bottom";
import "./modal.css";
import { Button, Divider } from "@mui/material";
import AuthContext from "../context/AuthContext";
import api from "../customAxios/Axios";
const ModalComponent = ({ closeModal,refImg,emailRef,username,getImages }) => {
  const [currentmsg, setCurrentMsg] = useState("");
  const [comments,setComments]=useState([])
  console.log("comments in modallllllllllllllllllllll",comments)
  let {token}=useContext(AuthContext)
  const getComments= async () => {
    let res = await api.post("/getcomments",{imgRef:refImg,emailRef}
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    );
    console.log("res in right component", res.data.data);
    console.log("your account data", res.data.success);
    if (res.data.success) {
      setComments([...res.data.data])
      // return setYourImages([...res.data.data]);
    }else{
      alert("someThing Went Wrong !");
    }
    
  };
  const SendMsg = async() => {
    let res = await api.post("/comments",{refImg,emailRef,username,text:currentmsg}, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("res in feed", res.data);
      console.log("your account data", res.data.success);
      if (res.data.success) {
       alert(res.data.message)
      }
      else{
        alert(res.data.message)
      }
    setCurrentMsg("")
    getComments()
  };
  useEffect(()=>{
    

    getComments();
  },[])
  console.log("commentssssssssssssssssssssssssssss",comments)
  return (
    <div className="modalcomponent">
      <Button variant="contained" onClick={closeModal} style={{marginBottom:"20px",marginLeft:"200px"}}>Esc</Button>
      <div className="chat-body">
        <ScrollTobBottom className="scroll-container">
          {comments.length != 0 ? (
            <>
              {comments.map((item,i) => (
                // {console.log("itemm in modal",item)}
              
                  <div key={i}>
                   {console.log("itemm in modal",item.ref_Username)}
                   <div className="container" style={{marginBottom:"10px"}}>
                    <p style={{fontFamily:"Timesnewroman",fontSize:"10px",padding:"0px",margin:"0px",fontWeight:1000,color:"red"}}>{item.ref_Username}</p>
                    <p style={{fontFamily:"Timesnewroman",fontSize:"15px",padding:"0px",margin:"0px",marginLeft:"5px",fontWeight:600}}>{item.text}</p>
                    <Divider/>
                </div>
                </div>
                
              ))}
            </>
          ) : (
            <p style={{ textAlign: "center" }}>No comments</p>
          )}
        </ScrollTobBottom>
      </div>

      <div className="chat-footer">
        <input
          type="text"
          placeholder="enter msg.."
          value={currentmsg}
          onChange={(e) => setCurrentMsg(e.target.value)}
        />
        {/* onKeyPress={(e)=>{e.key=="Enter" && SendMsg()}} */}
        <button onClick={SendMsg}>&#9658;</button>
      </div>
    </div>
  );
};

export default ModalComponent;
