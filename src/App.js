import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Stack, Typography, styled } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import SideBar from "./component/SideBar";
import RightBar from "./component/RightBar";
import Feed from "./component/Feed";
import Home from "./SideBar-Component/Home";
import Uploads from "./SideBar-Component/ImageUploadForm";
import YourAccount from "./SideBar-Component/YourAccount";
import LoginForm from "./components2/LoginForm";
import RegisterForm from "./components2/RegisterForm";
import VerifyOtpForm from "./components2/VerifyOtpForm";
function App() {
  return (
    <Box>
      <NavBar/>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <SideBar />
        <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="home" element={<Home />} />
        <Route path="uploads" element={<Uploads />} />
        <Route path="youraccount" element={<LoginForm/>} />
        </Routes>
        {/* <Feed /> */}
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;

{
  /* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Typography
        variant="h7"
        disabled
        sx={{
          width: "100px",
          backgroundColor: "yellow",
          margin: 5,
          "&:hover": {
            backgroundColor: "skyblue",
          },
          "&:disabled": {
            backgroundColor: "gray",
          },
        }}
      >
        hello
      </Typography>
      <BlueButton
        disabled
 
      >
        Disabled
      </BlueButton>
      <BlueButton>hello</BlueButton> */
}
// const BlueButton = styled(Button)({
//   backgroundColor: "yellow",
//   margin: 5,
//   "&:hover": {
//     backgroundColor: "skyblue",
//   },
//   "&:disabled": {
//     backgroundColor: "gray",
//   },
// });
