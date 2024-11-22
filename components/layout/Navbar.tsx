"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, ShoppingCart } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { Input } from "@/components/ui/Input";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "../ui/navigation-menu";
import ConnectWalletButton from "../auth/ConnectWalletButton";
import CustomNetworkButton from "../CustomNetworkButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const menuItemsExplore = [
    {
      label: "NFTs",
      props: { onClick: () => console.log("Action 1 clicked"), href: "/nfts" },
    },
    {
      label: "Collections",
      props: {
        onClick: () => console.log("Action 2 clicked"),
        href: "/collections",
      },
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
    <nav className="fixed w-full bg-background text-foreground z-20">
      <div className="mx-auto max-w-full border-b px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400"
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
          <div className="hidden items-center justify-center font-semibold sm:flex sm:flex-1 sm:items-stretch sm:justify-between">
            <Input
              placeholder="Search items, collections and account"
              className="ml-10 hidden w-full max-w-[480px] md:block"
            />

            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex items-center space-x-8">
                <Link href="/create" className="hover:text-primary">
                  Create
                </Link>

                <NavigationMenu href="/explore" menuItems={menuItemsExplore}>
                  Explore
                </NavigationMenu>

                <Link href="/" className="hover:text-primary">
                  Ranking
                </Link>
                <CustomNetworkButton />
                <ModeToggle />
                <ShoppingCart />
                <ConnectWalletButton />
                {/* <appkit-button /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`${isOpen ? "flex" : "hidden"} fixed h-full w-full overflow-hidden bg-secondary sm:hidden`}
        id="mobile-menu"
      >
        {/* <div
        className={`${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } fixed h-full w-full overflow-hidden bg-secondary sm:hidden transition-transform duration-300 ease-in-out`}
        id="mobile-menu"
      > */}
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="/create" className="hover:text-primary">
            Create
          </Link>

          <NavigationMenu href="/explore" menuItems={menuItemsExplore}>
            Explore
          </NavigationMenu>

          <Link href="/" className="hover:text-primary">
            Ranking
          </Link>
          <CustomNetworkButton />
          <ModeToggle />
          <ShoppingCart />
          <ConnectWalletButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
