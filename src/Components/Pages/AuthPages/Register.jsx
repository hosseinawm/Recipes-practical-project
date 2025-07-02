import { Link } from "react-router-dom";

import {
  Button,
  Typography,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
} from "@mui/material";

const Register = () => {
  return (
    <Container fixed maxWidth="sm" sx={{ mt: "6rem" }}>
      <Paper elevation={6} sx={{ height: "45rem", bgcolor: "#EEEFE0" }}>
        <Stack gap={3} sx={{ p: 5 }}>
          <Stack gap={1} sx={{ marginLeft: 11 }}>
            <Typography sx={{ pl: 8 }} variant="h4">
              Welcome!
            </Typography>
            <Typography variant="body1">
              Please Enter Your Credentials To Login
            </Typography>
          </Stack>
          <Stack gap={5} display={"flex"} flexDirection={"row"}>
            <TextField variant="filled" color="success" label="First Name" />
            <TextField variant="filled" color="success" label="Last Name" />
          </Stack>

          <Stack gap={3}>
            <TextField
              variant="filled"
              color="success"
              id="email"
              label="Email"
            />
            <TextField
              variant="filled"
              color="success"
              id="username"
              label="Username"
            />
            <TextField
              variant="filled"
              color="success"
              type="password"
              id="password"
              label="Password"
            />
          </Stack>
          <Stack gap={3} sx={{ mt: 5 }}>
            <Button variant="contained" color="success">
              Sign Up
            </Button>
            <Divider />
            <Button color="black" component={Link} to="/Login">
              Already have an account
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Register;
