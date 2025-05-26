import { Box, Button, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.custom.nav }} pt={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={1}
        sx={{
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: 2,
          width: "80%",
          mx: "auto",
        }}
      >
        <Typography color="white" pb={1}>
          © Re-work 2025 | May Sunktong
        </Typography>
        <Button href="/">
          <img src="/logo/logo-icon-dark.png" alt="Logo" width={100} />
        </Button>
      </Box>
    </Box>
  );
};
export default Footer;
