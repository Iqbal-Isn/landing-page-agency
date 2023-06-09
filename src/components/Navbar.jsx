import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../assets/img/logo.png";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Our Service",
  "Portfolio",
  "Testimonial",
  "Contact Us",
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navbarBg, setNavbarBg] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const changeBackground = () => {
    if (scrollY > 0) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("scroll", changeBackground);
    return () => {
      document.removeEventListener("scroll", changeBackground);
    };
  }, [scrollY]);

  const drawer = (
    <Box onClick={handleDrawerToggle} className="nav-mobile">
      <div className="logo-nav-mobile">
        <img src={Logo} alt="" />
        <Typography variant="h6" sx={{ my: 2 }}>
          Bubble Bash
        </Typography>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <a href={`#${item}`}>
                <ListItemText primary={item} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className={navbarBg ? "navbar-active" : "navbar"} component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="nav-brand"
          >
            <img src={Logo} alt={Logo} />
            <h2>Bubble Bash</h2>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }} className="nav-menu">
                <a href={`#${item}`}>{item}</a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
