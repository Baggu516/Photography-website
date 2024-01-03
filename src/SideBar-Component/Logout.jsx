import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import AuthContext from "../context/AuthContext";
const Logout = () => {
    let {username,setUsername,token,setToken,gmail,setGmail,setCurrentPath}=useContext(AuthContext)
    const handleLogout=()=>{
           setToken("")
        setUsername("")
           setGmail("")
           localStorage.removeItem("token")
           localStorage.removeItem("username")
           localStorage.removeItem("gmail")
    }
    useEffect(()=>{
      setCurrentPath(window.location.pathname)
     },[])
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
    <Grid item xs={11} sm={6} md={5} lg={4}>
      {/* <Paper  style={{ padding: '20px' }}>
    <Box  > */}
    <Paper elevation={5} sx={{padding:"20px",display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"column",gap:"10px",marginTop:"200px"}}>
    <Typography variant='h6'>Are you sure want to LogOut ?</Typography>
     <Box>
    
        <Button variant='contained' onClick={handleLogout}>Yes</Button>
     {/* </Box>
    </Paper> */}
   
    </Box>
    </Paper>
    </Grid>
    </Grid>
  )
}

export default Logout