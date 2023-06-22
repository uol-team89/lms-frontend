import Link from "next/link";

export const NavItem: React.FC<{
  name: string;
  href: string;
  isActive: boolean;
}> = ({ name, href, isActive }) => {
  return (
    <>
      <div className="text-lg">
        <Link
          href={href}
          className={isActive ? "text-blue-700 underline" : "text-white"}
        >
          {name}
        </Link>
      </div>
    </>
  );
};
