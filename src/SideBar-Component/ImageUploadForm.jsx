// ImageUploadForm.js
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    display: 'none',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ImageUploadForm = ({ onUpload }) => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Perform image upload logic here
    if (selectedFile) {
      onUpload(selectedFile); // Pass the selected file to the parent component or perform upload logic
    } else {
      // Handle no file selected
      console.error('No file selected');
    }
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Upload Image
      </Typography>
      <input
        accept="image/*"
        className={classes.input}
        id="image-upload"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="image-upload">
        <Button
          variant="contained"
          color="primary"
          component="span"
        >
          Choose File
        </Button>
      </label>
      {selectedFile && (
        <Typography variant="body1" gutterBottom>
          Selected File: {selectedFile.name}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleUpload}
        disabled={!selectedFile}
        className={classes.button}
      >
        Upload
      </Button>
    </Paper>
  );
};

export default ImageUploadForm;
