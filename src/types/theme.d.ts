import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      nav: string;
      hero: {
        background: string,
        subText: string
      },
      paginationText: string,
      footer: string;
    };
  }
}
