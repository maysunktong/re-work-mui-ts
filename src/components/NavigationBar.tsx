"use client";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import DropdownMenu from "./DropdownMenu";
import { useMediaQuery, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";

const NavMenu: NavItem[] = [
  { href: "/", label: "Home", icon: "" },
  { href: "/find-jobs", label: "Find Jobs", icon: "" },
  { href: "/forums", label: "Forums", icon: "" },
];

const DropDownMenuList: NavItem[] = [
  { href: "/bookmark", label: "Saved jobs", icon: "" },
  { href: "/forums", label: "Forums", icon: "" },
];

const NavigationBar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const pathname = usePathname();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button href="/">
              <img src="/logo/logo-dark.png" alt="Logo" width={200} />
            </Button>
          </Box>
          {isDesktop ? (
            <Box sx={{ display: "flex" }}>
              {NavMenu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Button
                    key={item.href}
                    href={item.href}
                    sx={{
                      my: 2,
                      color: isActive ? 'white' : 'gray',
                      display: 'block',
                      fontWeight: '600'
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
              <DropdownMenu  items={DropDownMenuList} />
            </Box>
          ) : (
            <DropdownMenu  items={DropDownMenuList} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
