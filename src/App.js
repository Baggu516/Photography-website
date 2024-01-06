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
import { ThemeProvider } from "@mui/material/styles";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
// ........................
import RedirectRoute from "./utilities/RedirectRoute";
function App() {
  let { theme } = useContext(AuthContext);
  const { id } = useParams();
  console.log("id", id);
  console.log("useParam", useParams());
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Index />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PrivateRoute>
                  <Feed />
                </PrivateRoute>
              }
            />
            {/* <Route index element={<RightBar />} /> */}
            <Route
              path="helo"
              element={
                <PrivateRoute>
                  <RightBar />
                </PrivateRoute>
              }
            />

            <Route
              path="home"
              element={
                <RedirectRoute>
                  <VerifyOtpForm />
                </RedirectRoute>
              }
            />
            <Route
              path="uploads"
              element={
                <PrivateRoute>
                  <Uploads />
                </PrivateRoute>
              }
            />
            <Route
              path="youraccount"
              element={
                <PrivateRoute>
                  <YourAccount />
                </PrivateRoute>
              }
            />
            <Route
              path="reset"
              element={
                <PrivateRoute>
                  <ResetForm />
                </PrivateRoute>
              }
            />

            <Route
              path="index"
              element={
                <PrivateRoute>
                  <Index />
                </PrivateRoute>
              }
            />
            <Route
              path="feed"
              element={
                <PrivateRoute>
                  <Feed />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="logout"
              element={
                <PrivateRoute>
                  <Logout />
                </PrivateRoute>
              }
            ></Route>
          </Route>
          <Route
            path="login"
            element={
              <RedirectRoute>
                <LoginForm />
              </RedirectRoute>
            }
          />
          <Route
            path="register"
            element={
              <RedirectRoute>
                <RegisterForm />
              </RedirectRoute>
            }
          />
          <Route
            path="home"
            element={
              <RedirectRoute>
                <VerifyOtpForm />
              </RedirectRoute>
            }
          />
          <Route
            path="/forgotpassword"
            element={
              <RedirectRoute>
                <ForgotPassword />
              </RedirectRoute>
            }
          />
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
