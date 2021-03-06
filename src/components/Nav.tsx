import React, { useEffect, useState } from "react";
import { GitHub, Twitter } from "@material-ui/icons";
import { NavbarItem } from "./NavbarItem";
import Router from "next/router";
import { socials } from "../consts/consts";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    setNavbar(!(window.scrollY <= 10));
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  });
  return (
    <div className={`sticky top-0 z-50 navbar ${navbar ? "active" : ""}`}>
      <div className="text-white flex items-center justify-between container-xl mx-auto px-4 h-16">
        <div className="flex h-full">
          <div
            className="navbar-item text-2xl mr-3 text-gray-300 cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              Router.push(`/`);
            }}
          >
            robiot
          </div>

          <div className="hidden md:flex">
            <div
              className="navbar-item text-lg text-gray-300 cursor-pointer"
              onClick={() => {
                window.scrollTo(0, 0);
                Router.push(`/`);
              }}
            >
              Home
            </div>

            <NavbarItem href="#about" navbar={navbar}>
              <div className="text-lg text-gray-300">About</div>
            </NavbarItem>

            <NavbarItem href="#projects" navbar={navbar}>
              <div className="text-lg text-gray-300">Projects</div>
            </NavbarItem>
            <NavbarItem href="#contact" navbar={navbar}>
              <div className="text-lg text-gray-300">Contact</div>
            </NavbarItem>
          </div>
        </div>

        <div className="flex h-full">
          <NavbarItem href={socials.twitter} navbar={navbar} external={true}>
            <Twitter width="0" />
          </NavbarItem>

          <NavbarItem href={socials.repo} navbar={navbar} external={true}>
            <GitHub width="0" />
          </NavbarItem>
        </div>
      </div>
    </div>
  );
};

export default Nav;