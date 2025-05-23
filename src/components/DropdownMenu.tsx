import { useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';



const DropdownMenu = ({ options, buttonLabel = 'Open Menu' }: DropdownMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option?: string) => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
      >
        {buttonLabel}
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default DropdownMenu;
