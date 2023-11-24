"use client";

import Logo from "@/components/Logo";

import config from "@/data/config.json";
import menu from "@/data/menu.json";
import { markdownify } from "@/lib/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-[#f6f6f6] dark:bg-[#222222]">
      <div className="container">
        <div className="max-w-7xl mx-auto row items-center py-10 ">
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Logo />
          </div>
          <div className="mb-8 text-center lg:col-6 lg:mb-0">
            <ul>
              {menu.footer.map((menu) => (
                <li className="m-3 inline-block" key={menu.name}>
                  <Link href={menu.url}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <div>social Icons</div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-7 dark:border-[#3E3E3E]">
        <div className="container inline-flex justify-center text-[#B4AFB6] dark:text-darkmode-light">
        <div>Primal Ideas</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
