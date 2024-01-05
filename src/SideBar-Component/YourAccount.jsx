import React, { useEffect, useState, useContext } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import api from "../customAxios/Axios";
import AuthContext from "../context/AuthContext";
const YourAccount = () => {
  let { token,setCurrentPath } = useContext(AuthContext);
  const [yourimages, setYourImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      let res = await api.get("/getuserimages", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("res in your account", res.data);
      console.log("your account data", res.data.success);
      if (res.data.success) {
        return setYourImages([...res.data.data.imgURL_Arr]);
      }else{
        // alert("someThing Went Wrong !");
      }
      
    };
    getImages();
    setCurrentPath(window.location.pathname)
  }, []);
   console.log(yourimages)
  return (
    <Box sx={{ width: { xs: "90%", sm: "30%" }, marginTop: "15px", }}>
      {yourimages.length != 0 ? (
        <>
          {yourimages.reverse().map((img, i) => {
            {console.log(img)}
            return(
                          <Card sx={{marginTop:"20px",marginLeft:{sm:"-100px",xs:"10px"},marginRight:{sm:"100px",xs:"0px"}}} key={i}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    {localStorage.getItem("username").slice(0,1)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={localStorage.getItem("username")}
                // subheader="December 25, 2023"
              />
              <CardMedia
                component="img"
                height="60%"
                  width="20%"
                image={`${img.imgurl}`}
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
                  {img.caption || "The only way to do great work is to love what you do."}
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

export default YourAccount;
