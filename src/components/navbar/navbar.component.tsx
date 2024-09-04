"use client";

import logo from "@/assests/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navbarOptions = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
];

export const NavbarComponent = () => {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blogs");
  const isEditorPage = pathname.startsWith("/editor");

  const filteredNavbarOptions = navbarOptions.filter((option) => {
    console.log("is blog page", isBlogPage);
    if (isBlogPage) {
      return option.label != "Blogs";
    }
    return true;
  });

  return (
    <nav className="navbar">
      <div className="flex items-center gap-6 justify-between w-full right-0">
        <Link href={"/"}>
          <Image src={logo} alt="Logo" className="flex-none" width={40} />
        </Link>
        <div
          className={`hidden ${isEditorPage ? "" : "md:flex"} gap-6 text-black`}
        >
          {filteredNavbarOptions.map((option, idx) => {
            const key = `key-${idx}`;
            return (
              <Link href={option.href} key={key}>
                <p className="hover:underline text-2xl">{option.label}</p>
              </Link>
            );
          })}
        </div>
        <div className={`${isEditorPage ? "hidden" : "flex"} gap-6`}>
          <div
            className={`${
              isBlogPage ? "flex" : "hidden"
            } w-auto p-4 px-6 md:show bg-grey rounded-full items-center justify-between`}
          >
            <input
              type="text"
              placeholder="Search"
              className="bg-grey border-0 outline-none"
            />
            <span className="material-symbols-outlined md:pointer-events-none text-2xl text-dark-grey">
              search
            </span>
          </div>
          <div className={`hidden md:flex items-center gap-3 md:gap-6 ml-auto`}>
            <Link href={"/editor"} className={`md:flex gap-2 link`}>
              <span className="material-symbols-outlined text-dark-grey">
                edit_document
              </span>
              <p>write</p>
            </Link>
            <div className="flex gap-2">
              <Link
                href={`/auth/login?redirect=${pathname}`}
                className={`btn-dark py-2`}
              >
                Login
              </Link>
              <Link
                href={`/auth/register?redirect=${pathname}`}
                className={`btn-light py-2`}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
