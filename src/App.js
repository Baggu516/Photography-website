import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Stack, Typography, styled } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavBar from "./Inner-components/NavBar";
import SideBar from "./Inner-components/SideBar";
import RightBar from "./Inner-components/RightBar";
import Feed from "./Inner-components/Feed";
import Home from "./SideBar-Component/Home";
import Uploads from "./SideBar-Component/ImageUploadForm";
import YourAccount from "./SideBar-Component/YourAccount";
import LoginForm from "./components2/LoginForm";
import RegisterForm from "./components2/RegisterForm";
import VerifyOtpForm from "./components2/VerifyOtpForm";
import ResetForm from "./SideBar-Component/ResetForm";
import Index from "./Inner-components/Index";
import Logout from "./SideBar-Component/Logout";
import PrivateRoute from "./utilities/PrivateRoute";
import ForgotPassword from "./components2/ForgotPassword";
// theme.................
import { ThemeProvider } from '@mui/material/styles';
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
// ........................
function App() {
  let {theme}=useContext(AuthContext)
  const { id } = useParams();
  console.log("id", id);
  console.log("useParam", useParams());
  return (
   
    <Box>
       <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<PrivateRoute><Index /></PrivateRoute>}>
          <Route index element={<PrivateRoute><Feed /></PrivateRoute>} />
          {/* <Route index element={<RightBar />} /> */}
          <Route path="helo" element={<RightBar />} />

          <Route path="home" element={<VerifyOtpForm />} />
          <Route path="uploads" element={<Uploads />} />
          <Route path="youraccount" element={<YourAccount />} />
          <Route path="reset" element={<ResetForm />} />

          <Route path="index" element={<Index />} />
          <Route path="feed" element={<Feed />}></Route>
          <Route path="logout" element={<Logout />}></Route>
        </Route>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="home" element={<VerifyOtpForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      </ThemeProvider>
    </Box>
    // </ThemeProvider>
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
