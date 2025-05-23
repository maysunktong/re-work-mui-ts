import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const NavMenu: NavItem[] = [
  { href: "/", label: "Home", icon: "" },
  { href: "/find-jobs", label: "Find Jobs", icon: "" },
  { href: "/forums", label: "Forums", icon: "" },
];

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Button href="/">
              <img src="/logo/logo-dark.png" alt="Logo" width={200} />
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {NavMenu.map((item, index) => (
              <Button
                key={item.href}
                href={item.href}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;
