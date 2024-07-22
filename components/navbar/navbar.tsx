import React from "react";
import DarkTheme from "@/components/dark-theme";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavbarSheet from "./navbar-sheet";

const Navbar: React.FC = async () => {
  const pages = [
    {
      name: 'Products',
      link: ``,
    },
    {
      name: "Pricing",
      link: `/`,
    },
    {
      name: "About",
      link: `/`,
    },
    {
      name: "Contact",
      link: `/`,
    },
  ];

  return (
    <header className="sticky top-0 flex h-16 z-10 items-center gap-1 border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <Link
        href="/"
        className="flex items-center gap-6 text-lg font-semibold md:text-base w-full"
      >
        <span className="font-semibold">Mada Web master</span>
      </Link>
      <NavbarSheet pages={pages} />

      <nav className="flex flex-col text-lg font-medium sm:hidden md:flex justify-end md:flex-row md:items-center md:gap-3 md:text-sm lg:gap-6">
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.link}
            className="text-muted-foreground transition-colors hover:text-foreground w-[4vw]"
          >
            {page.name}
          </Link>
        ))}
      </nav>

      <div className="flex w-full justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DarkTheme />
      </div>
    </header>
  );
};

export default Navbar;
