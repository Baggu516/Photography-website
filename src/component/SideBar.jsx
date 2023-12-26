import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
        <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <HomeRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/uploads">
              <ListItemIcon>
              <AddBoxRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Uploads" />
            </ListItemButton>
          </ListItem>
         
          <ListItem disablePadding>
            <ListItemButton  component="a" href="/home">
              <ListItemIcon>
              <DarkModeIcon/>
              </ListItemIcon>
             <Switch/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/youraccount">
              <ListItemIcon>
           <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Your Account" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/uploads">
              <ListItemIcon>
              <SettingsRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Reset Password" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#sample-list">
              <ListItemIcon>
            <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          </List>
        </Box>
        
    </Box>
  )
}

export default SideBar