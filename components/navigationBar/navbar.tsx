'use client';

import { usePathname } from "next/navigation";
import Navlink from "../navigationBar/navlink";

export default function NavBar() {
  const currentURL = usePathname();

  const navItems = [
    { name: 'Home', href: '/', color: 'primary1' },
    { name: 'About', href: '/about', color: 'primary1' },
    { name: 'Projects', href: '/projects', color: 'primary2' },
    { name: 'Blog', href: '/blog', color: 'primary3' },
    { name: 'Fidget', href: '/fidget', color: 'primary4' }
  ];

	// Find active url
  const activeItem = navItems.find((item) => {
    if (item.href === '/') {
      return currentURL === '/';
    }

    return currentURL.startsWith(item.href);
  }) || navItems[0];

  return (
    <nav
      className="w-fit h-fit z-100 flex gap-10 justify-center items-center border rounded-3xl px-20 py-2 bg-[#1B1714] shadow-2xs transition duration-200"
      style={{ borderColor: `var(--color-${activeItem.color})` }}
    >
      {navItems.map((item) => {
        const isActive = item === activeItem

        return (
          <Navlink key={item.name} href={item.href} name={item.name} color={item.color} isActive={isActive}></Navlink>
        );
      })}
    </nav>
  );
}