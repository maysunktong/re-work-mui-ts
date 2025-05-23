"use client";

import { Box } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

const logos = [
  { name: "Microsoft", image: "/brandlogos/logo-microsoft.png" },
  { name: "Netflix", image: "/brandlogos/logo-netflix.png" },
  { name: "Dropbox", image: "/brandlogos/logo-dropbox.png" },
  { name: "GitHub", image: "/brandlogos/logo-github.png" },
  { name: "Amazon", image: "/brandlogos/logo-amazon.png" },
  { name: "Canva", image: "/brandlogos/logo-canva.png" },
  { name: "Google", image: "/brandlogos/logo-google.png" },
  { name: "Spotify", image: "/brandlogos/logo-spotify.png" },
  { name: "Stripe", image: "/brandlogos/logo-stripe.png" },
  { name: "Tesla", image: "/brandlogos/logo-tesla.png" },
  { name: "Microsoft", image: "/brandlogos/logo-microsoft.png" },
  { name: "Netflix", image: "/brandlogos/logo-netflix.png" },
  { name: "Dropbox", image: "/brandlogos/logo-dropbox.png" },
  { name: "GitHub", image: "/brandlogos/logo-github.png" },
  { name: "Amazon", image: "/brandlogos/logo-amazon.png" },
  { name: "Canva", image: "/brandlogos/logo-canva.png" },
  { name: "Google", image: "/brandlogos/logo-google.png" },
  { name: "Spotify", image: "/brandlogos/logo-spotify.png" },
  { name: "Stripe", image: "/brandlogos/logo-stripe.png" },
  { name: "Tesla", image: "/brandlogos/logo-tesla.png" },
];

const MarqueeBar: React.FC<MarqueeProps> = ({ speed = 10 }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {isDesktop && (
        <Box
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "100%",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "inline-flex",
              animation: `scroll ${speed}s linear infinite`,
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
          >
            {" "}
            {logos.map((item, index) => (
              <Box
                key={index}
                component="img"
                src={item.image}
                alt={item.name}
                sx={{ mx: 5, my: 1, verticalAlign: "middle" }}
              />
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default MarqueeBar;
