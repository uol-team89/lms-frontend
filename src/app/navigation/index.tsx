"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";
export function Navigation({
  navLinks,
}: {
  navLinks: { href: string; name: string }[];
}) {
  const pathname = usePathname();
  return (
    <nav className="flex justify-start gap-4 p-5">
      {navLinks.map((l) => (
        <NavItem key={l.href} {...l} isActive={pathname.startsWith(l.href)}></NavItem>
      ))}
    </nav>
  );
}
