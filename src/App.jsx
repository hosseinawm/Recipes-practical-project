import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Recipes from "./Components/Recipes/Recipes";

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
      <NavBar />
      <Container sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ marginBottom: 3 }} color="#081c15">
          Recipes List
        </Typography>
        <Recipes />
      </Container>
    </React.Fragment>
  );
}

export default App;
