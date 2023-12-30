import { Box, Paper, Stack } from "@mui/material";
import Posts from "./Posts";
import React from "react";
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
const Feed = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box flex={3} p={2.5} sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Posts />
        <Posts />
        <Posts />
      </Box>

      {/* <Outlet /> */}
      <Box>
        {/* <Link to="helo">hellow</Link> */}
       
      </Box>
    </Box>
  );
};

export default Feed;
