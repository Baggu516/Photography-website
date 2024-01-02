import { Box, CardContent, IconButton, Paper, Stack, Typography , Card,
  CardActions,
  CardHeader,
  CardMedia,
  Checkbox, 
  Avatar} from "@mui/material";
import Posts from "./Posts";
import React, { useEffect, useState,useContext } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Outlet, Link } from "react-router-dom";
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
const Feed = () => {
  let { token,setImgLst } = useContext(AuthContext);
  const [yourimages,setYourImages]=useState([])
  const [value, setValue] = React.useState(0);
  useEffect(()=>{
    const getImages = async () => {
      let res = await api.get("/getalluserimages", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("res", res.data);
      console.log("your account data", res.data.success);
      if (res.data.success) {
        setImgLst([...res.data.data])
        return setYourImages([...res.data.data]);
      }else{
        alert("someThing Went Wrong !");
      }
      
    };
    getImages();
  },[])

  return (
    <Box flex={1.5} p={1} sx={{ display: "flex",flexDirection:"column" }}>
      {yourimages.length != 0 ? (
        <>
          {yourimages.map((img, i) => {
            {console.log(img)}
            return(
                          <Card sx={{marginTop:"20px",marginLeft:{sm:"-100px",xs:"10px"},marginRight:{sm:"100px",xs:"0px"}}} key={i}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    N
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="N Bhargav Sai"
                subheader="December 25, 2023"
              />
              <CardMedia
                component="img"
                height="60%"
                  width="20%"
                image={`${img}`}
                alt="Paella dish"
              />

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                  />
                </IconButton>
                <IconButton aria-label="share">
                  <AddCommentOutlinedIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  The only way to do great work is to love what you do.
                </Typography>
              </CardContent>
            </Card>
 )

          })}
        </>
      ) : (
        <>No Posts Yet..............</>
      )}
    </Box>
  );
};

export default Feed;
