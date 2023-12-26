import { AppBar, Avatar, Box, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddAPhotoSharpIcon from '@mui/icons-material/AddAPhotoSharp';
const NavBar = () => {

    const [open,setOpen]=useState(false)
    const StyledToolbar=styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between",
        // padding:"20px"
    })
    const Search=styled("div")({
        backgroundColor:"white",
        color:"black",
        borderRadius:"5px"
    })
    const Icons=styled(Box)({
        // backgroundColor:"white",
        borderRadius:"5px"
    })
  return (
    <AppBar position='sticky'>
        <StyledToolbar >
            <Box sx={{display:"flex",alignItems:"center"}}>
                <AddAPhotoSharpIcon/>
            <Typography variant='h6'  p={2} >Photography</Typography>
            </Box>
            {/* sx={{display:{xs:"none",sm:"block"}}} */}
            {/* <IconButton color="primary" aria-label="add an alarm" size="large" > */}
            {/* <HomeRoundedIcon   p={2} sx={{display:{xs:"block",sm:"none"},size:"large"}} /> */}
            {/* </IconButton> */}
            {/* <Search>
               <InputBase placeholder='search.....' sx={{paddingLeft:"5px"}}/>
            </Search> */}
            <Icons>
                <Avatar src='./baggu.jpeg' onClick={()=>setOpen(true)}/>
            </Icons>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        // transformOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'right',
        // }}
      >
        <MenuItem onClick={()=>setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={()=>setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={()=>setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar