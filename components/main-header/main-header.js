"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ChevronDown } from "./iconds.jsx";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import logo from "public/categories/testlogo.png";
import Image from "next/image";

export default function MainHeader() {
  const chevron = <ChevronDown className={classes.chevronIcon} />;

  const aslLanguages = [
    { key: "burmese", label: "Burmese 🇲🇲", href: "/learn-asl/burmese" },
    { key: "chuukese", label: "Chuukese 🇫🇲", href: "/learn-asl/chuukese" },
    {
      key: "haitian",
      label: "Haitian Creole 🇭🇹",
      href: "/learn-asl/haitian-creole",
    },
    { key: "russian", label: "Russian 🇷🇺", href: "/learn-asl/russian" },

    {
      key: "spanish",
      label: "Spanish 🇪🇨🇨🇱🇨🇴🇦🇷🇲🇽🇵🇷🇩🇴🇨🇺🇵🇪🇺🇾🇵🇾🇵🇦🇨🇷🇬🇹🇳🇮🇭🇳🇸🇻🇻🇪",
      href: "https://manosunidasor.org/",
    },
    {
      key: "tig",
      label: "Tigrinya & Amharic 🇪🇹 🇪🇷",
      href: "/learn-asl/tigrinya-amharic",
    },
  ];

  return (
    <div className={classes.headerWrapper}>
      <MainHeaderBackground />

      <Navbar className={classes.navbar}>
        <header className={classes.header}>
          {/* Logo */}
          <Link className={classes.logo} href="/">
            <Image src={logo} width={500} height={"auto"} alt="Hands United" />
          </Link>

          <NavbarContent justify="center" className={classes.navContent}>
            <NavbarItem className={classes.hideOnMobile}>
              <Link
                href="/"
                className={`${classes.link} ${classes.mobileOnly}`}
              >
                Home
              </Link>
            </NavbarItem>
            {/* Learn ASL */}
            <Dropdown className={classes.dropdown}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button disableRipple className={classes.customButton}>
                    <Link href="/learn-asl" className={classes.navMainLink}>
                      Learn ASL
                    </Link>
                    <span className={classes.chevronTrigger}>{chevron}</span>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu aria-label="Learn ASL Languages">
                {aslLanguages.map((item) => (
                  <DropdownItem key={item.key} className={classes.dditem}>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            {/* Programs */}
            <Dropdown className={classes.dropdown}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button disableRipple className={classes.customButton}>
                    <Link href="/programs" className={classes.navMainLink}>
                      Programs
                    </Link>
                    <span className={classes.chevronTrigger}>{chevron}</span>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu aria-label="Programs">
                <DropdownItem className={classes.dditem}>
                  <Link href="/programs/family-community">
                    Family & Community
                  </Link>
                </DropdownItem>
                <DropdownItem className={classes.dditem}>
                  <Link href="/programs/immigration-support">
                    Immigration Support
                  </Link>
                </DropdownItem>
                <DropdownItem className={classes.dditem}>
                  <Link href="/programs/driver-education">
                    Driver Education
                  </Link>
                </DropdownItem>
                <DropdownItem className={classes.dditem}>
                  <Link href="/programs/professional-services">
                    Professional Services
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* About */}
            <Dropdown className={classes.dropdown}>
              <NavbarItem className={classes.hideOnMobile}>
                <DropdownTrigger>
                  <Button disableRipple className={classes.customButton}>
                    <Link href="/about" className={classes.navMainLink}>
                      About
                    </Link>
                    <span className={classes.chevronTrigger}>{chevron}</span>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu aria-label="About">
                <DropdownItem className={classes.dditem}>
                  <Link href="/about/our-mission">Our Mission</Link>
                </DropdownItem>
                <DropdownItem className={classes.dditem}>
                  <Link href="/about/our-impact">Our Impact</Link>
                </DropdownItem>
                <DropdownItem className={classes.dditem}>
                  <Link href="/about/our-team">Our Team</Link>
                </DropdownItem>
                <DropdownItem className={classes.dditem}>
                  <Link href="/about/partners">Partners</Link>
                </DropdownItem>
                <DropdownItem className={classes.dditem}>
                  <Link href="/about/volunteer">Volunteer</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Events & Store */}
            <NavbarItem className={classes.hideOnMobile}>
              <Link href="/store" className={classes.link}>
                Store
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/contact" className={classes.link}>
                Contact
              </Link>
            </NavbarItem>

            <NavbarItem className={classes.hideOnMobile}>
              <Link href="/donate" className={classes.link}>
                Donate
              </Link>
            </NavbarItem>
          </NavbarContent>
        </header>
      </Navbar>
    </div>
  );
}
