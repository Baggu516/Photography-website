import React from 'react'
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Stack, Typography, styled } from "@mui/material";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import Feed from "./Feed";
const Index = () => {

  return (
    <Box>
     <NavBar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <SideBar/>
        <Outlet />
        {/* <RightBar/> */}
      </Stack>
    </Box>
  )
}

export default Index