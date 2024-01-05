import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { useContext } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link,NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { darkTheme,lightTheme } from '../ThemeFolder/theme';
const SideBar = () => {
  let {theme,setTheme}=useContext(AuthContext)
   

  const HandleTheme=(e)=>{
    setTheme((e.target.checked)?darkTheme:lightTheme)
  }
  const navLinkStyle=({isActive})=>{
      return {
          textDecoration:isActive?"underline":"none"
      }
  }
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
        <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/" style={navLinkStyle}>
              <ListItemIcon>
               <HomeRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/uploads" style={navLinkStyle}>
              <ListItemIcon>
              <AddBoxRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Uploads" />
            </ListItemButton>
          </ListItem>
         
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
              <DarkModeIcon/>
              </ListItemIcon>
             <Switch onChange={HandleTheme}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/youraccount" style={navLinkStyle}>
              <ListItemIcon>
           <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Your Account" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} style={navLinkStyle} to="/reset" >
              <ListItemIcon>
              <SettingsRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Reset Password" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/logout" style={navLinkStyle}>
              <ListItemIcon>
            <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton component="a" href="/reset">
              <ListItemIcon>
            <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary="Reset" />
            </ListItemButton>
          </ListItem> */}
          </List>
        </Box>
        
    </Box>
  )
}

export default SideBar