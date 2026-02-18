"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { close, menu } from "../assets";
import logoh from "../assets/logoh.png";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto bg-primary">
        <Link
          aria-label="au clic un retour se fait au header"
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0.0);
          }}
        >
          <Image
            src={logoh}
            alt="logo"
            className="w-9 h-9 object-contain"
            width={36}
            height={36}
            priority
            quality={70}
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Hicham<span className="sm:block hidden">&nbsp;| My Portfolio</span>
          </p>
        </Link>
        <ul
          className="list-none hidden sm:flex flex-row gap-10"
          role="navigation"
        >
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                }
                hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        {/* Menu mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            width={28}
            height={28}
            priority
            quality={70}
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          {/* Backdrop — ferme le menu au clic dehors */}
          {toggle && (
            <div
              className="fixed inset-0 z-10"
              onClick={() => setToggle(false)}
            />
          )}

          {/* Dropdown */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-4 min-w-[160px] z-20 rounded-2xl border border-white/10 bg-black-100/95 backdrop-blur-md shadow-lg`}
          >
            <ul
              className="list-none flex flex-col gap-4 w-full"
              role="navigation"
            >
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-medium cursor-pointer text-[16px] hover:text-white transition-colors`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`} className="block w-full py-1">
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
