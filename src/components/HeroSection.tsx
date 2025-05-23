import { Box, Typography } from "@mui/material";
import MarqueeBar from "./UI/MarqueeBar";

const HeroSection = () => {
  return (
    <Box sx={{ width: '100%', display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center", bgcolor: "black"}}>
      <Box px={4} sx={{ width: '80%', height: 500, display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Typography variant="h1" fontWeight={600} color="white" gutterBottom>Make Remote Work Possible</Typography>
        <Typography variant="h3" fontWeight={300} gutterBottom sx={{color: "gray"}}>Find your dream job with us</Typography>
      </Box>
      <MarqueeBar speed={40} />
    </Box>
  );
};
export default HeroSection;
