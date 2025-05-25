"use client";

import { Box, Button } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const categories: Category[] = [
  { label: "All", value: "" },
  { label: "Software Development", value: "software-dev" },
  { label: "Design", value: "design" },
  { label: "Project Management", value: "project-management" },
];

const CategoryButtons = ({ selectedCategory, onSelectCategory }: CategoryButtonsProps) => {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box display="flex" gap={2} flexWrap="wrap" sx={{
      gap: 2,
      width: "80%",
      mx: "auto",
      justifyContent: "center",
      alignItems: "center",
      pt: 4,
      flexWrap: "wrap"
    }}>
      {categories.map((item) => (
        <Button
          size={isDesktop ? "large" : "small"}
          key={item.value}
          variant={selectedCategory === item.value ? "contained" : "outlined"}
          onClick={() => onSelectCategory(item.value)}
          color="success"
        >
          {item.label}
        </Button>
      ))
      }
    </Box >
  );
};
export default CategoryButtons;
