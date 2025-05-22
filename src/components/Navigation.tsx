import Link from "next/link";

const NavMenu:NavItem[] = [
  {href: "/", label: "Home", icon: ""},
  {href: "/find-jobs", label: "Find Jobs", icon: ""},
  {href: "/forums", label: "Forums", icon: ""},
]

const NavigationBar = () => {
  return (
    <nav>
      {NavMenu.map((item, index) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
export default NavigationBar;
