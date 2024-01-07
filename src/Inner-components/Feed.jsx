import {
  Box,
  CardContent,
  IconButton,
  Paper,
  Stack,
  Typography,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Checkbox,
  Avatar,
} from "@mui/material";
import Posts from "./Posts";
import React, { useEffect, useState, useContext } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Outlet, Link,useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import NavBar from "./NavBar";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import AuthContext from "../context/AuthContext";
import api from "../customAxios/Axios";
import { TurnLeft } from "@mui/icons-material";
const Feed = () => {
  let { token, setImgLst,setCurrentPath } = useContext(AuthContext);
  let navigation=useNavigate()
  const [yourimages, setYourImages] = useState([]);
  const [value, setValue] = React.useState(0);
  const generateRandom=()=>{
    return Math.floor(Math.random()*1000)
  }
  // likes functionality...
  // const [checked, setChecked] = useState(false);
  // for reloading
  const [likess,setLikes]=useState("")
  const handleCheckboxChange = async(emailRef,refImg,liked) => {
    // setChecked(event.target.checked);
  //   {   
  //     "emailRef":"baggunallagutla@gmail.com",
  //     "refImg":"https://res.cloudinary.com/desa3sonw/image/upload/v1704422461/photography/bmghklvdwtvjtdb6o2uy.png",
  //     "liked":true
  // }
    //  console.log("parameter from like button",x)
     let res = await api.post("/likes",{emailRef,refImg,liked}, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    // alert(res.data.message)
    setLikes(res.data.data.imgURL_Arr.likes + generateRandom() + generateRandom())
    // ..........for fetching new data........
    const getImages = async () => {
      let res = await api.get("/getalluserimages", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("res in feed", res.data);
      console.log("your account data", res.data.success);
      if (res.data.success) {
       
        // storing all images globally
        let lst=[]
        res.data.data.forEach(i=>{
            i.imgURL_Arr.forEach(item=>{
              lst.push(item.imgurl)
            })
            
          })
        let t=[...lst].reverse()
        setImgLst([...t]);
        let t1=[...res.data.data].reverse()
        t1.forEach(item=>{
          item.imgURL_Arr.reverse()
        })
        return setYourImages([...t1]);
      } else {
        alert("someThing Went Wrong !");
      }
    };
    getImages();
    // ....................................
    navigation("/")

    
  };
// console.log("checkeddddddddddddddd",checked)
  // ....shuffle the images
  useEffect(() => {
    const getImages = async () => {
      let res = await api.get("/getalluserimages", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("res in feed", res.data);
      console.log("your account data", res.data.success);
      if (res.data.success) {
       
        // storing all images globally
        let lst=[]
        res.data.data.forEach(i=>{
            i.imgURL_Arr.forEach(item=>{
              lst.push(item.imgurl)
            })
            
          })
        let t=[...lst].reverse()
        setImgLst([...t]);
        let t1=[...res.data.data].reverse()
        t1.forEach(item=>{
          item.imgURL_Arr.reverse()
        })
        return setYourImages([...t1]);
      } else {
        alert("someThing Went Wrong !");
      }
    };
    getImages();
    setCurrentPath(window.location.pathname)
  }, [likess]);

  return (
    <Box flex={1.5} p={1} sx={{ display: "flex", flexDirection: "column" }}>
      {yourimages.length != 0 ? (
        <>
          {yourimages.map((img, i) => {
            
          return(
            img.imgURL_Arr.map((subimg, index) => {
              return (
                <Card
                  sx={{
                    marginTop: "20px",
                    marginLeft: { sm: "-100px", xs: "10px" },
                    marginRight: { sm: "100px", xs: "0px" },
                    height:"90%",
                    width:"90%"
                  }}
                  // key={i+generateRandom()+generateRandom()+generateRandom()}
                  key={subimg.imgurl}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        {img.username?.slice(0,1) || "U"}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={img.username || "Unknown"}
                    // subheader="December 25, 2023"
                  />
                  <CardMedia
                    component="img"
                    height="60%"
                    width="20%"
                    image={`${subimg.imgurl}`}
                    alt="Paella dish"
                  />

                  <CardActions disableSpacing style={{display:"flex"}}>
                    <IconButton aria-label="add to favorites" style={{display:"flex",flexDirection:"column",}}>
                      <Checkbox
                        checked={subimg.likedPersons.includes(localStorage.getItem("username"))&&subimg.checked}
                        onChange={()=>handleCheckboxChange(subimg.email,subimg.imgurl,!subimg.checked)}
                      
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
                      />
                      <Typography variant="p" style={{fontSize:"12px",fontWeight:"400"}}><b style={{fontWeight:900}}>{subimg.likes}</b> likes</Typography>
                    </IconButton>
                    <IconButton aria-label="share" style={{display:"flex",flexDirection:"column",marginTop:"10px"}} onClick={()=>console.log("Testing comment")}>
                      <AddCommentOutlinedIcon  />
                      <Typography variant="p" style={{fontSize:"10px",marginTop:"10px"}}>{subimg.comments.length}</Typography>
                    </IconButton>
                    <IconButton aria-label="share" style={{display:"flex",flexDirection:"column",marginTop:"10px"}}>
                      <ShareIcon />
                      <Typography variant="p" style={{fontSize:"10px",marginTop:"10px"}}>{subimg.likes}</Typography>
                    </IconButton>
                  </CardActions>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {subimg.caption || "Life is beautiful" }
                    </Typography>
                  </CardContent>
                </Card>
              );
            })
          )})}
        </>
      ) : (
        <>   
        <div className="loading-container">
        <div className="loading-spinner"></div>
        Loading...........
      </div>
      </>
      )}
    </Box>
  );
};

export default Feed;
