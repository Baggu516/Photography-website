import { Box, Paper } from "@mui/material";
import Posts from "./Posts";
import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Feed = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box flex={2} p={2.5} sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
   <Posts/>
   <Posts/>
   <Posts/>
   
    </Box>
  );
};

export default Feed;
