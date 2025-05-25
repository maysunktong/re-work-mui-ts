"use client";

import Box from "@mui/material/Box";
import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
} from "@mui/material";
import DropdownMenu from "./DropdownMenu";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getTheme } from "../theme/theme";

const NavMenu: NavItem[] = [{ href: "/", label: "Home" }];

const NavigationBar = ({ mode, setMode }: NavigationBarProps) => {
  const theme = useMemo(() => getTheme(mode), [mode]);
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const pathname = usePathname();

  const DropDownMenuList = [
    {
      label: "Light Mode",
      onClick: () => setMode("light"),
    },
    {
      label: "Dark Mode",
      onClick: () => setMode("dark"),
    },
  ];

  return (
    <Box sx={{ width: "100%", position: "fixed", zIndex: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.custom.nav,
          backgroundImage: "none",
          boxShadow: "none",
        }}
      >
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
                      color: isActive ? "white" : "white",
                      display: "block",
                      fontWeight: 600,
                      fontSize: "medium",
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
              <DropdownMenu items={DropDownMenuList} />
            </Box>
          ) : (
            <DropdownMenu items={DropDownMenuList} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
