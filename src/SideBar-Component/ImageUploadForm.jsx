import React, { useState } from 'react';
import { Button, Grid, Typography, Paper } from '@mui/material';

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Add your upload logic here
    if (selectedFile) {
      // You can perform an action like uploading the file to a server
      alert(`File "${selectedFile.name}" uploaded successfully!`);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Image Upload
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ marginBottom: '16px' }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Upload Image
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ImageUploadForm;
