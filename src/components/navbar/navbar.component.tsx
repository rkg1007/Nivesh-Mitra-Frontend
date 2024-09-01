"use client";

import logo from "@/assests/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <nav className="navbar">
      <div className="flex items-center gap-6 justify-between w-full right-0">
        <Link href={"/"}>
          <Image src={logo} alt="Logo" className="flex-none" width={40} />
        </Link>
        <div className="flex gap-6">
          <div
            className={`w-auto p-4 px-6 md:show bg-grey rounded-full flex items-center justify-between`}
          >
            <input type="text" placeholder="Search" className="bg-grey border-0 outline-none" />
            <span className="material-symbols-outlined md:pointer-events-none text-2xl text-dark-grey">
              search
            </span>
          </div>
          <div
            className={`hidden ${
              isAdminPage ? "md:flex" : ""
            } items-center gap-3 md:gap-6 ml-auto`}
          >
            <Link href={"/blogs/write"} className={`md:flex gap-2 link`}>
              <span className="material-symbols-outlined text-dark-grey">
                edit_document
              </span>
              <p>write</p>
            </Link>
            <Link href={"/auth/login"} className={`btn-dark py-2`}>
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
