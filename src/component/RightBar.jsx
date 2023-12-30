import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      //   bgcolor={"red"}
      
      flex={1.5}
      p={2}
      sx={{ display: { xs: "none", sm: "block",right:"0" } }}
      // position={"fixed"} 
      // right={0}
    >
      <Box position={"fixed"}>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            Active Users
          </Typography>
          <AvatarGroup
            total={10}
            sx={{ padding: "0px", marginLeft: "0px", marginTop: "20px" }}
          >
            <Avatar alt="Remy Sharp" src="./baggu.jpeg" />
            <Avatar alt="Travis Howard" src="./baggu.jpeg" />
            <Avatar alt="Agnes Walker" src="./baggu.jpeg" />
            <Avatar alt="Trevor Henderson" src="./baggu.jpeg" />
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
            {itemData.map((item,i) => (
              <ImageListItem
                key={i}
                // cols={item.cols || 1}
                // rows={item.rows || 1}
              >
                <img
                  // {...srcset(item.img, 121, item.rows, item.cols)}
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
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
