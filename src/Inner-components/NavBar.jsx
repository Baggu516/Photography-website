import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddAPhotoSharpIcon from "@mui/icons-material/AddAPhotoSharp";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
// ............react Modal....
import Modal from "react-modal";
import AuthContext from "../context/AuthContext";
import api from "../customAxios/Axios";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "-0%",
    bottom: "auto",
    marginRight: "0%",
    transform: "translate(-60%, -40%)",
    width: "50rem",
    height: "30rem",
  },
  overlay: {
    backgroundColor: "grey",
  },
};
Modal.setAppElement("#root");

// ............................
const NavBar = () => {
  let {profileLink,token,setProfileLink}=useContext(AuthContext)
  console.log("profileLink",profileLink)
  // ....modal............
   const [modalIsOpen,setModalIsOpen]=useState(false)
  // ...........
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    // padding:"20px"
  });
  const Search = styled("div")({
    backgroundColor: "white",
    color: "black",
    borderRadius: "5px",
  });
  const Icons = styled(Box)({
    // backgroundColor:"white",
    borderRadius: "5px",
  });
  const handleHome=()=>{
    setOpen(false);
    navigate("/");
    setModalIsOpen(false)
  }
  const handleMyAccount = () => {
    setOpen(false);
    navigate("/youraccount");
    setModalIsOpen(false)
  
  };
  const handleProfile=()=>{
    setOpen(false);
    setModalIsOpen(true)
    // setModalIsOpen(false)

  }
  const handleLogout=()=>{
    setOpen(false)
    navigate("/logout")
  }
  useEffect(()=>{
    const getImages = async () => {
      let res = await api.get("/getuserprofileimage", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("res Nav Bar", res.data);
      console.log("your Navbarrr data", res.data.success);
      if (res.data.success) {
        // setImgLst()
        return setProfileLink(res.data.data);
      }else{
        alert("someThing Went Wrong !");
      }
      
    };
    getImages();
  },[])
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AddAPhotoSharpIcon />
          <Typography variant="h5" p={2} sx={{color:"",fontWeight:500}}>
            Photography
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center",gap:"10px" }}>
        <Typography variant="h6" sx={{ display:{sm:"block",xs:"none"},color:"",fontWeight:500,textDecoration:"underline"}}> {localStorage.getItem("username")}</Typography>
        <Icons>
          <Avatar src={profileLink} onClick={() => setOpen(true)} />
        </Icons>
        </Box>
       
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleHome}>Home</MenuItem>
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleMyAccount}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <Button variant='contained' onClick={()=>setModalIsOpen(false)} style={{right:"0px"}}>Esc</Button>

       <Profile setModalIsOpen={setModalIsOpen}/>
      </Modal>

    </AppBar>
  );
};

export default NavBar;
