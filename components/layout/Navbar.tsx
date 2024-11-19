"use client";
import { MenuIcon, ShoppingCart, Wallet, Wallet2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { Input } from "@/components/ui/Input";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "../ui/navigation-menu";
import ConnectWalletButton from "../auth/ConnectWalletButton";

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
    <nav className="fixed w-full border-b bg-background text-foreground">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
              <div className="flex space-x-8">
                <Link href="/create" className="hover:text-primary">
                  Create
                </Link>

                <NavigationMenu href="/explore" menuItems={menuItemsExplore}>
                  Explore
                </NavigationMenu>

                <Link href="/" className="hover:text-primary">
                  Ranking
                </Link>
                <Link href="/contact">Ether</Link>
                <ModeToggle />
                <ShoppingCart />
                
                <ConnectWalletButton />
                <appkit-button />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
