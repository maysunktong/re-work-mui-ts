interface NavItem {
  href: string,
  label: string,
}
interface DropdownMenuProps {
  items: {
    label: string;
    onClick: () => void;
  }[];
}

interface MarqueeProps {
  speed?: number; 
}

interface NavigationBarProps {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}
