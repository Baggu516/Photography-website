// Import necessary libraries
import React, { useState,useContext } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import api from '../customAxios/Axios';
import AuthContext from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
  const navigate=useNavigate()
  // State for form fields
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // ...............context.............
  let {token}=useContext(AuthContext)
  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Add your password validation logic here
    if (password !== confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }

    // Handle password reset logic (you can make an API call here)
    // let {oldPassword,newPassword,confirmPassword}=req.body
    console.log({email:localStorage.getItem("useremail"),otp,password,confirmPassword})
    let res=await api.post("/forgotpasswordverification",{email:localStorage.getItem("useremail"),otp,password,confirmPassword}  
    //    headers: {
    //   'authorization': `Bearer ${token}`
    //   }
    )
    console.log("forgot Password",res.data)
    alert(res.data.message)
    // if(res.data.success){
    //   return navigate("/login")
    // }


    // Reset form fields
    setOtp('');
    setPassword('');
    setConfirmPassword('');
    if(res.data.success){
       return  navigate("/login")
    }
   

    // You can also dispatch an action or perform additional logic here
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Create New Password
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="OTP"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <TextField
              label="New Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
              Verify
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
