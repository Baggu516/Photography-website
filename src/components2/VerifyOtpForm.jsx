import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';

const VerifyOtpForm = () => {
  const [otp, setOtp] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();

    // Add your OTP verification logic here
    // Compare the entered OTP with the one sent to the user

    // For simplicity, let's assume the correct OTP is '123456'
    const correctOTP = '123456';

    if (otp === correctOTP) {
      alert('OTP is correct. Verification successful!');
    } else {
      alert('Incorrect OTP. Please try again.');
    }

    // You can handle further actions, such as redirecting the user or updating state
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            OTP Verification
          </Typography>
          <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
              label="Enter OTP"
              type="text"
              fullWidth
              margin="normal"
              variant="outlined"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{ marginBottom: '16px' }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '16px' }}
            >
              Verify OTP
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VerifyOtpForm;
