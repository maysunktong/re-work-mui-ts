import { createTheme, Theme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark"): Theme =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#ffffff" : "#000000",
        paper: mode === "light" ? "#ffffff" : "#000000",
      },
    },
    custom: {
      hero: {
        background: mode === "light" ? "#3a86ff" : "#000000",
        subText: mode === "light" ? "lightgray" : "white",
      },
      nav: mode === "light" ? "#03045e" : "#000000",
      footer: mode === "light" ? "#1BCBF2" : "#000000",
      paginationText: mode === "light" ? "black" : "white",
    },
  } as any);
