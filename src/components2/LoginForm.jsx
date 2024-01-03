import React, { useState,useContext } from 'react';
import { TextField, Button, Grid, Typography, Container, Paper } from '@mui/material';
import api from '../customAxios/Axios';
import { useNavigate,Link } from "react-router-dom";
// ...importing context........
import AuthContext from "../context/AuthContext";
// ............................
// import api from '../customAxios/Axios';
const LoginForm = () => {
  // ........context.................
  let {username,setUsername,token,setToken,gmail,setGmail}=useContext(AuthContext)
  // .................................
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    try {
      let response= await api.post("/login",{
        // username,
        email,
        password
       })
       setToken(response.data.data.access_token)
       setUsername(response.data.data.exist.username)
       setGmail(response.data.data.exist.email)
       console.log("token",response.data.data.access_token)
       console.log("username",response.data.data.exist.username)
       console.log("userdetails: ",response.data.data.exist.email)
       localStorage.setItem("token",response.data.data.access_token)
       localStorage.setItem("username",response.data.data.exist.username)
       localStorage.setItem("gmail",response.data.data.exist.email)
       navigate("/")
    } catch (error) {
      console.log("err in login",error)
    } 
  };

  const handleForgotPassword = async(e) => {
    // Implement your forgot password logic here
    e.preventDefault();
    if(!email){
      return alert("Enter your Email")
    }
    try {
      localStorage.setItem("useremail",email)
      let res=await api.post("/sendingotp",{email})
      console.log("ress for otp",res.data)
      navigate("/forgotpassword")
    } catch (error) {
      
    }
    
    console.log('Forgot Password clicked');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
    <Grid item xs={12} sm={8} md={6} lg={4}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography component="h1" variant="h5" style={{fontWeight:"600",textDecoration:"underline"}}>
          Sign in
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container sx={{display:"flex",flexDirection:"column"}}>
            <Grid item xs sx={{display:"flex",alignItems:"center",justifyContent:"center",margin:"10px"}}>
              {/* <Typography variant='p' >Click here </Typography> */}
              <Link href="#" variant="body2" onClick={handleForgotPassword}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",margin:"10px"}}>
           <Typography variant='p' >Don't have an account already ? Register {" "}</Typography> 
            <Link to="/register"> Here </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
