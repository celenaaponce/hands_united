"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./iconds.jsx";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import classes from "./main-header.module.css"; // Import the CSS file
import MainHeaderBackground from "./main-header-background";
import logo from "public/categories/testlogo.png";
import Image from "next/image.js";

export default function MainHeader() {
  const icons = {
    chevron: <ChevronDown className={classes.chevronIcon} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  const items = [
    {
      key: "Tig",
      label: "Tigrinya & Amharic 🇪🇹 🇪🇷",
      href: "/ASL/TigrinyaAmharic",
    },
    {
      key: "Burm",
      label: "Burmese 🇲🇲",
      href: "/ASL/Burmese",
    },
    {
      key: "Haitian",
      label: "Haitian Creole 🇭🇹",
      href: "/ASL/Haitian",
    },
    {
      key: "Spanish",
      label: "Spanish 🇪🇨🇨🇱🇨🇴🇦🇷🇲🇽🇵🇷🇩🇴🇨🇺🇵🇪🇺🇾🇵🇾🇵🇦🇨🇷🇬🇹🇳🇮🇭🇳🇸🇻🇻🇪",
      href: "https://manosunidasor.org/",
    },
    {
      key: "Russian",
      label: "Russian 🇷🇺",
      href: "/ASL/Russian",
    },
    {
      key: "Chuukese",
      label: "Chuukese 🇫🇲",
      href: "/ASL/Chuukese",
    },
  ];

  return (
    <div className={classes.headerWrapper}>
      <MainHeaderBackground />
      <Navbar className={classes.navbar}>
        <header className={classes.header}>
          <Link className={classes.logo} href="/">
            <Image src={logo} width={500} height={"auto"} alt="manos unidos" />
          </Link>
          <nav className={classes.nav}>
            <NavbarContent justify="center">
              <Dropdown className={classes.dropdown}>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className={classes.customButton}
                      endContent={icons.chevron}
                    >
                      <Link
                        href="/ASL"
                        className={classes.link}
                        onClick={(e) => e.preventDefault()}
                      >
                        Learn ASL
                      </Link>
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu aria-label="Dynamic Actions" items={items}>
                  {(item) => (
                    <DropdownItem
                      key={item.key}
                      className={classes.dditem}
                      textValue={item.label}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
              <NavbarItem isActive>
                <Link
                  href="/outreach"
                  aria-current="page"
                  className={classes.link}
                >
                  Our Reach So Far
                </Link>
              </NavbarItem>
              {/* <li className={classes.item}> */}
              <NavbarItem isActive>
                <Link
                  href="/otros"
                  aria-current="page"
                  className={classes.link}
                >
                  Our Services
                </Link>
              </NavbarItem>
              {/* </li> */}
              {/* <li className={classes.item}> */}
              <NavbarItem>
                <Button
                  as={Link}
                  href="/store"
                  className={classes.link}
                  radius="full"
                  size="sm"
                >
                  Store
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Link
                  href="/ayudar"
                  aria-current="page"
                  className={classes.link}
                >
                  How to Help
                </Link>
              </NavbarItem>
              {/* </li> */}
            </NavbarContent>
          </nav>
        </header>
      </Navbar>
    </div>
  );
}
