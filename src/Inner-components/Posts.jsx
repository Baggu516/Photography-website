import React from 'react'
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
  } from "@mui/material";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import ShareIcon from "@mui/icons-material/Share";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
  import Favorite from '@mui/icons-material/Favorite';
  import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
const Posts = () => {
  return (
    <Box sx={{width:{xs:"100%",sm:"70%"},marginTop:"10px"}}>

      
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="N Bhargav Sai"
        subheader="December 25, 2023"
      />
      <CardMedia
        component="img"
        height="60%"
      //   width="20%"
        image="./baggu.jpeg"
        alt="Paella dish"
      />
  
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <AddCommentOutlinedIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
 
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The only way to do great work is to love what you do.
        </Typography>
      </CardContent>
    </Card>
    </Box>
  )
}

export default Posts