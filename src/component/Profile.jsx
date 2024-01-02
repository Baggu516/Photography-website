import React, { useState,useContext } from 'react';
import { Button, Grid, Typography, Paper } from '@mui/material';
import api from '../customAxios/Axios';
import AuthContext from '../context/AuthContext';
const ImageUploadForm = ({setModalIsOpen}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  let {token,setProfileLink}=useContext(AuthContext)
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
    let res=await api.post("/upload-single-imgage",formData,{
      headers: {
        'authorization': `Bearer ${token}`
        }
    })
    console.log("upload file",res.data)
      // You can perform an action like uploading the file to a server
      alert(`File "${selectedFile.name}" uploaded successfully!`);
      if(res.data.success){
        return setProfileLink(res.data.profileURL)
      }
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <Grid container alignItems="center" justifyContent="center" flexDirection={"column"} style={{ width:"100%",minHeight: '60vh' }}>
      {/* <Button variant='contained' onClick={()=>setModalIsOpen(false)}>Esc</Button> */}
      <Grid item xs={12} sm={11} md={6} lg={4}>
        <Paper elevation={3} style={{ width:"100%",padding: '40px', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Upload Profile Img
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
