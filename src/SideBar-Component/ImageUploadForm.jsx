import React, { useState,useContext, useEffect } from 'react';
import { Button, Grid, Typography, Paper, TextField } from '@mui/material';
import api from '../customAxios/Axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
// csssss.....
const ImageUploadForm = () => {
  const navigate=useNavigate()
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption,setCaption]=useState("")
  const [isFetch,setIsFetch]=useState(false)
  let {token,setCurrentPath}=useContext(AuthContext)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("file",file)
    setSelectedFile(file);
  };

  const handleUpload = async() => {
    setIsFetch(true)
    if (selectedFile) {
      const formData=new FormData()
      formData.append("img",selectedFile)
      formData.append("caption",caption)
    let res=await api.post("/imageuploader",formData,{
      headers: {
        'authorization': `Bearer ${token}`
        }
    })
    setIsFetch(false)
    console.log("upload file",res.data)
      alert(`File "${selectedFile.name}" uploaded successfully!`);
      navigate("/youraccount")
      
    } else {
      alert('Please select a file to upload.');
      setIsFetch(false)
    }
   
  };

  useEffect(()=>{
    setCurrentPath(window.location.pathname)
   },[])
  //  if(isFetch){
  //   return (<p style={{textAlign:"center",marginLeft:"-100px"}}>Uploading.............</p>)
  // } 

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '60vh' }}>
      {isFetch==false?<Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom  style={{ textDecoration: 'underline' }}>
            Image Upload
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ marginBottom: '10px',padding:"10px",marginTop:"10px" }}
          />
             <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Caption"
            // autoFocus
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleUpload}
            // disabled={!selectedFile}
          >
            Upload Image
          </Button>
        </Paper>
      </Grid>:<>   
      <div className="loading-container">
      <div className="loading-spinner"></div>
        </div>
        </>}
    </Grid>
  );
};

export default ImageUploadForm;
