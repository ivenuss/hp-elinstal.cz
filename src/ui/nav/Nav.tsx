import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon } from "icons";
import { Collapse } from "react-collapse";

interface NavProps {}

interface NavItemProps {
  link: string;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  link,
  onClick = () => null,
  children,
}) => {
  /* TODO: ACTIVE LINK */
  const router = useRouter();

  const isActive = router.pathname === link;

  return (
    <Link href={link}>
      <a
        onClick={onClick}
        className={`flex items-center justify-center h-12 w-full md:h-full md:w-36 text-sm uppercase ${
          isActive
            ? "bg-primary-accent"
            : "bg-primary-dark-300 hover:bg-primary-dark-200"
        }`}
      >
        {children}
      </a>
    </Link>
  );
};

export const Nav: React.FC<NavProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "Úvod", link: "/" },
    { title: "Služby", link: "/sluzby" },
    { title: "Reference", link: "/reference" },
    { title: "Kontakt", link: "/kontakt" },
  ];

  const renderNavItems = () => (
    <>
      {navItems.map(({ title, link }, i) => (
        <NavItem key={i} link={link} onClick={() => setIsMenuOpen(false)}>
          {title}
        </NavItem>
      ))}
    </>
  );

  return (
    <nav className="sticky top-0 z-20 h-[60px] px-6 bg-primary-dark-300">
      <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between text-white">
        <Link href="/">
          <a className="font-bold text-xl">PH</a>
        </Link>

        {/* Desktop Reso */}
        <div className="hidden md:flex h-full items-center">
          {renderNavItems()}
        </div>

        {/* Phone Reso */}
        <div className={`absolute left-0 right-0 top-[60px] md:hidden`}>
          <Collapse
            isOpened={isMenuOpen}
            theme={{ collapse: "transition-height ease-out duration-200" }}
          >
            {renderNavItems()}
          </Collapse>
        </div>

        <button
          aria-label="Hamburger Menu"
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen((c) => !c)}
        >
          <MenuIcon className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};
