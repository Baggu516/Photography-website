// RegisterForm.js
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

const RegisterForm = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = () => {
    // Perform registration logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Username:', username);
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        className={classes.textField}
        value={username}
        placeholder='ex:bhargav'
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        className={classes.textField}
        type="email"
        value={email}
        placeholder='ex:bhargav@gmail.com'
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        className={classes.textField}
        type="password"
        value={password}
        placeholder='ex:bhargav@123'
        onChange={(e) => setPassword(e.target.value)}
      />
   
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleRegister}
      >
        Register
      </Button>
    </Paper>
  );
};

export default RegisterForm;
