import { Box, Typography } from "@mui/material";
import MarqueeBar from "./UI/MarqueeBar";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "black",
        pt: "3rem"
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: {
            xs: 200,
            sm: 200,
            md: 500,
            lg: 500,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          fontWeight={600}
          color="white"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
            },
          }}
        >
          Make Remote Work Possible
        </Typography>
        <Typography
          variant="h3"
          fontWeight={300}
          gutterBottom
          sx={{
            color: "gray",
            fontSize: {
              xs: "1.2rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.5rem",
            },
          }}
        >
          Find your dream job with us
        </Typography>
      </Box>
      <MarqueeBar speed={40} />
    </Box>
  );
};
export default HeroSection;
