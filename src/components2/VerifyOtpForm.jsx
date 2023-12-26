// VerifyOtpForm.js
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    maxWidth: 400,
    margin: 'auto',
    marginTop: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const VerifyOtpForm = ({ onVerify }) => {
  const classes = useStyles();

  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // Perform OTP verification logic here
    if (otp.length === 6) {
      onVerify(otp); // Pass the OTP to the parent component or perform verification logic
    } else {
      // Handle invalid OTP length
      console.error('Invalid OTP length');
    }
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Verify OTP
      </Typography>
      <TextField
        label="OTP"
        variant="outlined"
        fullWidth
        className={classes.textField}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        inputProps={{ maxLength: 6 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleVerify}
      >
        Verify
      </Button>
    </Paper>
  );
};

export default VerifyOtpForm;
