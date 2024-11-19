import Link from "next/link";
import React from "react";

interface NavigationMenuProps {
  menuItems: {
    label: string;
    props: any;
  }[];
  href: string;
  children: React.ReactNode;
}

const NavigationMenu = ({ menuItems, href, children }: NavigationMenuProps) => {
  return (
    <div className="group relative">
      <Link href={href} passHref>
        {children}
      </Link>
      <div className="absolute w-[190px] max-w-[300px] scale-95 pt-5 opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100">
        <div className="rounded-md border bg-popover px-4 py-2 shadow-lg">
          {menuItems.map((item, index) => (
            <Link
              className="block w-full rounded px-4 py-2 text-left text-sm hover:bg-accent hover:transition-all"
              href={item.props.href}
              key={index}
              {...item.props}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export { NavigationMenu };
