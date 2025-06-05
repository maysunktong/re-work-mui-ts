"use client";

import Box from "@mui/material/Box";
import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getTheme } from "../theme/theme";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import SunnyIcon from "@mui/icons-material/Sunny";

const NavMenu: NavItem[] = [{ href: "/", label: "Home" }];

const NavigationBar = ({ mode, setMode }: NavigationBarProps) => {
  const theme = useMemo(() => getTheme(mode), [mode]);
  const pathname = usePathname();

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
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
            <IconButton
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              sx={{
                ml: 2,
                width: 40,
                height: 40,
                position: "relative",
              }}
            >
              <SunnyIcon
                sx={{
                  position: "absolute",
                  opacity: mode === "light" ? 1 : 0,
                  color: "white",
                }}
              />
              <NightlightRoundIcon
                sx={{
                  position: "absolute",
                  opacity: mode === "dark" ? 1 : 0,
                  color: "white",
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
