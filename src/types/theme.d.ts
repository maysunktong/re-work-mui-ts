import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      nav: string;
      hero: string;
      footer: string;
    };
  }
}
