// RegisterForm.js
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import api from '../customAxios/Axios';
import { Link,useNavigate } from 'react-router-dom';
// import axios from "axios"
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(3),
//     maxWidth: 400,
//     margin: 'auto',
//     marginTop: theme.spacing(4),
//   },
//   textField: {
//     marginBottom: theme.spacing(2),
//   },
// }));

const RegisterForm = () => {
  // const classes = useStyles();
  let navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async() => {
    try {
      let response= await api.post("/register",{
        username,
        email,
        password
       })
       console.log("userdetails: ",response.data.message)
       alert(response.data.message)
       if(response.data.success){
        return navigate("/login")
       }
    } catch (error) {
      console.log("err in sign up",error)
    }
 
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
    <Grid item xs={12} sm={8} md={6} lg={4}>
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom style={{fontWeight:"600",textDecoration:"underline"}}>
        Register
      </Typography>
      <TextField
        label="Username"
        margin="normal"
        variant="outlined"
        autoFocus
        fullWidth
        // className={classes.textField}
        value={username}
        placeholder='ex:bhargav'
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        margin="normal"
        variant="outlined"
        fullWidth
        // className={classes.textField}
        type="email"
        value={email}
        placeholder='ex:bhargav@gmail.com'
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        // className={classes.textField}
        type="password"
        value={password}
        placeholder='ex:bhargav@123'
        onChange={(e) => setPassword(e.target.value)}
      />
   
      <Button
        variant="contained"
        color="primary"
        style={{backgroundColor:"blue"}}
        fullWidth
        onClick={handleRegister}
      >
        Register
      </Button>
      <Grid container >
      <Grid item xs sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",margin:"10px"}}>
           <Typography variant='p' >Have an account already ? Login {" "}</Typography> 
            <Link to="/login"> Here </Link>
      </Grid>
      </Grid>
    </Paper>
    </Grid>
    </Grid>
  );
};

export default RegisterForm;
