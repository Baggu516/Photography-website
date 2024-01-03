import React, { useState,useContext, useEffect } from 'react';
import { Button, Grid, Typography, Paper } from '@mui/material';
import api from '../customAxios/Axios';
import AuthContext from '../context/AuthContext';
const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  let {token,setCurrentPath}=useContext(AuthContext)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("file",file)
    setSelectedFile(file);
  };

  const handleUpload = async() => {
    // Add your upload logic here
    if (selectedFile) {
      const formData=new FormData()
      formData.append("img",selectedFile)
    let res=await api.post("/imageuploader",formData,{
      headers: {
        'authorization': `Bearer ${token}`
        }
    })
    console.log("upload file",res.data)
      // You can perform an action like uploading the file to a server
      alert(`File "${selectedFile.name}" uploaded successfully!`);
    } else {
      alert('Please select a file to upload.');
    }
  };
  useEffect(()=>{
    setCurrentPath(window.location.pathname)
   },[])

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '60vh' }}>
      <Grid item xs={10} sm={8} md={6} lg={4}>
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
