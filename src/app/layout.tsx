import { Navigation } from "./navigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teacher Aid",
  description: "App to aid teachers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks: { name: string; href: string }[] = [
    {
      href: "/teachers",
      name: "Teachers",
    },
    {
      href: "/students",
      name: "Students",
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation navLinks={navLinks}></Navigation>
        {children}
      </body>
    </html>
  );
}
