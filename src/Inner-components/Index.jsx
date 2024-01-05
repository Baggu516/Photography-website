import React, { useContext, useEffect } from 'react'
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Stack, Typography, styled } from "@mui/material";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import Feed from "./Feed";
import AuthContext from '../context/AuthContext';
const Index = () => {
  let {currentPath,setCurrentPath}=useContext(AuthContext)
  // const currentPath = window.location.pathname;
  console.log('Current Path:', currentPath);
useEffect(()=>{
 setCurrentPath(window.location.pathname)
},[])
  return (
    <Box>
     <NavBar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <SideBar/>
        <Outlet />
        {(currentPath=="/" || currentPath=="/youraccount")&&<RightBar/>}
      </Stack>
    </Box>
  )
}

export default Index