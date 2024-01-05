import React, { useState,useContext } from 'react';
import { Button, Grid, Typography, Paper } from '@mui/material';
import api from '../customAxios/Axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const ImageUploadForm = ({setModalIsOpen}) => {
  const navigate=useNavigate()
  // const [selectedFile, setSelectedFile] = useState(null);
  const [isFetch,setIsFetch]=useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  let {token,setProfileLink}=useContext(AuthContext)
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
    let res=await api.post("/upload-single-imgage",formData,{
      headers: {
        'authorization': `Bearer ${token}`
        }
    })
    console.log("upload file",res.data)
    setIsFetch(false)
    
      alert(`File "${selectedFile.name}" uploaded successfully!`);
      if(res.data.success){
        setProfileLink(res.data.profileURL)
        navigate("/") 
        setModalIsOpen(false)
      }
    } else {
      alert('Please select a file to upload.');
      setIsFetch(false)
    }
  };

  return (
    <Grid container alignItems="center" justifyContent="center" flexDirection={"column"} style={{ width:"100%",minHeight: '60vh',background:"none", zIndex:999}}>
      {/* <Button variant='contained' onClick={()=>setModalIsOpen(false)}>Esc</Button> */}
      {isFetch==false?<Grid item xs={5} sm={10} md={10} lg={6}>
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
            // disabled={!selectedFile}
          >
            Upload Image
          </Button>
        </Paper>
      </Grid>:<>Uploading.............</>}
    </Grid>
  );
};

export default ImageUploadForm;
