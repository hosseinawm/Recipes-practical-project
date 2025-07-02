import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Recipes from "./Components/Pages/Recipes/Recipes";
import Favorite from "./Components/Pages/Favorite/Favorite";
import Login from "./Components/Pages/AuthPages/Login";
import Register from "./Components/Pages/AuthPages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router";

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#F0F0D7",
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>

      <Container sx={{ py: 10 }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Recipes />} />
            <Route path="/Favorite" element={<Favorite />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
