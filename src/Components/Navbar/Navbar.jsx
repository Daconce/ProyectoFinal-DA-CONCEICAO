import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const pages = ["todos", "empanadas", "comidas", "pizzas"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Grid sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img
                src="https://res.cloudinary.com/ddwaowcsz/image/upload/v1677376361/logo_rincon_norteno_jvamzl.webp"
                alt="logo"
                height={56}
              />
            </Grid>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  className="link"
                  to={page === "todos" ? `/` : `/category/${page}`}
                  key={Math.floor(Math.random() * 100)}
                  style={{
                    textDecoration: "none",
                    color: "#1976d2",
                  }}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Grid sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              src="https://res.cloudinary.com/ddwaowcsz/image/upload/v1677376361/logo_rincon_norteno_jvamzl.webp"
              alt="logo"
              height={56}
            />
          </Grid>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                className="link"
                to={page === "todos" ? `/` : `/category/${page}`}
                key={page}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <CartWidget numero={0} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
