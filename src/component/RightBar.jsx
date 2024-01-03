import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React, { useContext,useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import api from "../customAxios/Axios";

const RightBar = () => {
  let {imglst,token}=useContext(AuthContext)
  const [profile,setProfile]=useState([])
  useEffect(()=>{
    const getImages = async () => {
      let res = await api.get("/getalluserprofiles", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("res in right component", res.data);
      console.log("your account data", res.data.success);
      if (res.data.success) {
        setProfile([...res.data.data])
        // return setYourImages([...res.data.data]);
      }else{
        alert("someThing Went Wrong !");
      }
      
    };
    getImages();
  },[])
  return (
    <Box
      //   bgcolor={"red"}
      
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block", } }}
      // position={"fixed"} 
      // right={0}
    >
      <Box position={"fixed"}>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            Active Users
          </Typography>
          <AvatarGroup
            total={profile.length}
            sx={{ padding: "0px", marginLeft: "0px", marginTop: "20px" }}
          >
            {profile&&profile.sort().map((item,i)=>{
              return(
                <Avatar alt="Remy Sharp" src={item} key={i}/>
              
               
              )
            })}
            
            {/* <Avatar alt="Travis Howard" src="./baggu.jpeg" />
            <Avatar alt="Agnes Walker" src="./baggu.jpeg" />
            <Avatar alt="Trevor Henderson" src="./baggu.jpeg" /> */}
          </AvatarGroup>
        </Box>
      
        <Box marginTop={"80px"}  position={"fixed"}>
          <Typography variant="h6" fontWeight={600}>
            Latest Images
          </Typography>
          <ImageList
            // sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={2}
            rowHeight={121}
          >
            {imglst.map((item,i) => (
              <Box key={i}>
              {i<6&&<ImageListItem
                key={i}
              >
                <img
                  // {...srcset(item.img, 121, item.rows, item.cols)}
                  src={item}
                  alt={"latest Img"}
                  loading="lazy"
                />
              </ImageListItem>}
              </Box>
            ))}
          </ImageList>
        </Box>
        </Box>
    </Box>
  );
};

export default RightBar;
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "./baggu.jpeg",
    title: "Burger",
  },
  {
    img: "./baggu.jpeg",
    title: "Camera",
  },
  {
    img: "./baggu.jpeg",
    title: "Coffee",
    cols: 2,
  },
 
];
