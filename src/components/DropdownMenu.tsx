"use client";

import { useState, MouseEvent } from "react";
import { Button, Menu, Box, Tooltip, MenuItem } from "@mui/material";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";

const DropdownMenu = ({ items }: DropdownMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option?: string) => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Button
        aria-controls={open ? "dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Tooltip title="Toggle Theme">
          <MovingOutlinedIcon fontSize="large" sx={{ color: "white" }} />
        </Tooltip>
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose}>
        {items.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => {
              item.onClick();
              handleClose();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default DropdownMenu;
