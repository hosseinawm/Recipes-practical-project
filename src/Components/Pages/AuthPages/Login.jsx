import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import {
  Button,
  Typography,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    username: false,
    password: false,
    text: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    setErrorMsg({ username: false, password: false, text: "" });

    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      const msg = error?.response?.data?.message;
      if (msg === "Username and password required") {
        setErrorMsg({
          username: true,
          password: true,
          text: msg,
        });
      } else {
        console.error("Login failed", msg || error.message);
      }
    }
  };

  return (
    <Container fixed maxWidth="sm" sx={{ mt: "6rem" }}>
      <Paper elevation={6} sx={{ height: "35rem", bgcolor: "#EEEFE0" }}>
        <Stack gap={3} sx={{ p: 5 }}>
          <Stack gap={1} sx={{ marginLeft: 11 }}>
            <Typography sx={{ pl: 2 }} variant="h4">
              Welcome Back :)
            </Typography>
            <Typography variant="body1">
              Please Enter Your Credentials To Login
            </Typography>
          </Stack>

          <Stack gap={3}>
            <TextField
              variant="filled"
              color="success"
              id="username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              error={errorMsg.username}
              label="Username"
            />
            <TextField
              variant="filled"
              color="success"
              type="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              id="password"
              error={errorMsg.password}
              label="Password"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Remember Me"
            />
          </Stack>
          <Stack gap={3} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              color="success"
              onClick={handleLogin}
            >
              Sign in
            </Button>
            <Divider />
            <Button color="black" component={Link} to="/Register">
              Create An Account
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Login;
