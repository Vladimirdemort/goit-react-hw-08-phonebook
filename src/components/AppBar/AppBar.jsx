import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link color="inherit" underline="none" href="/">
              {"Phonebook"}
            </Link>
          </Typography>

          <Button color="inherit" href="/register">
            Register
          </Button>
          <Button color="inherit" href="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
