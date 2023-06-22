import Link from "next/link";

export const NavItem: React.FC<{
  name: string;
  href: string;
  isActive: boolean;
}> = ({ name, href, isActive }) => {
  return (
    <>
      <div>
        <Link
          href={href}
          key={name}
          className={isActive ? "text-blue underline" : "text-white"}
        >
          {name}
        </Link>
      </div>
    </>
  );
};
