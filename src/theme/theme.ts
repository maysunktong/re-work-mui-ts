import { createTheme, Theme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark"): Theme =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#9857F2" : "#121212",
        paper: mode === "light" ? "#0DD97A" : "#1e1e1e",
      },
    },
    custom: {
      hero: mode === "light" ? "#0DD97A" : "#222",
      nav: mode === "light" ? "#9857F2" : "#222",
      footer: mode === "light" ? "#1BCBF2" : "#111",
    },
  } as any);
