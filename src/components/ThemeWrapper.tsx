"use client";

import { useState, useEffect, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { getTheme } from "../theme/theme";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    const saved = localStorage.getItem("mode") as "light" | "dark" | null;
    setMode(saved || "dark");
  }, []);

  useEffect(() => {
    if (mode) localStorage.setItem("mode", mode);
  }, [mode]);

  const theme = useMemo(() => (mode ? getTheme(mode) : undefined), [mode]);

  if (!mode || !theme) return null;

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: "100vh", bgcolor: theme.palette.mode }}>
          <NavigationBar mode={mode} setMode={setMode} />
          {children}
          <Footer />
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
