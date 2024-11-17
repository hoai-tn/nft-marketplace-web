"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const menuItemsExplore = [
    {
      label: "NFTs",
      props: { onClick: () => console.log("Action 1 clicked") },
    },
    {
      label: "Collections",
      props: { onClick: () => console.log("Action 2 clicked") },
    },
  ];

  const menuItemsCreate = [
    {
      label: "NFT",
      props: { onClick: () => console.log("Create NFT clicked") },
    },
    {
      label: "Collections",
      props: { onClick: () => console.log("Create Collection clicked") },
    },
  ];
  return (
    <nav className="bg-background text-foreground w-full border-b">
      <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <MenuIcon />
            </button>
          </div>
          <div className="flex-shrink-0">
            <Link href="/">MyApp</Link>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <Input
              placeholder="Search items, collections and account"
              className="w-[350px] ml-10"
            />

            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/create" className="text-primary">
                  Create
                </Link>
                <Link href="/about">Explore</Link>
                <Link href="/">Ranking</Link>
                <Link href="/contact">Ranking</Link>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <ModeToggle />
              <Link href="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
