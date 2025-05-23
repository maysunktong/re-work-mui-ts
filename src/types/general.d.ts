interface NavItem {
  href: string,
  label: string,
  icon?: string,
}
interface DropdownMenuProps {
  items: NavItem[];
}

interface MarqueeProps {
  speed?: number; 
}
