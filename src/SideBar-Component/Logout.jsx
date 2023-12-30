import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import AuthContext from "../context/AuthContext";
const Logout = () => {
    let {username,setUsername,token,setToken,gmail,setGmail}=useContext(AuthContext)
    const handleLogout=()=>{
           setToken("")
        setUsername("")
           setGmail("")
           localStorage.removeItem("token")
           localStorage.removeItem("username")
           localStorage.removeItem("gmail")
    }
  return (
    <Box  sx={{display:"flex", textAlign:"center", justifyContent:"center",alignItems:"center"}} >
    <Paper elevation={5} sx={{padding:"20px",display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"column",gap:"10px",marginTop:"200px"}}>
    <Typography variant='h6'>Are you sure want to LogOut ?</Typography>
     <Box>
    
        <Button variant='contained' onClick={handleLogout}>Yes</Button>
     </Box>
    </Paper>
   
    </Box>
  )
}

export default Logout