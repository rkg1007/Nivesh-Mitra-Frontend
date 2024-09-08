'use client';

import logo from "@/assests/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const navbarOptions = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about-us" },
];

export const NavbarComponent = () => {
  const pathname = usePathname();
  const queryParams = useSearchParams();
  let redirectPath = queryParams.get("redirect") || pathname;
  const isEditorPage = pathname.startsWith("/editor");

  return (
    <nav className="navbar">
      <div className="flex items-center gap-6 justify-between w-full right-0">
        <div className="flex items-center gap-6">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" className="flex-none" width={40} />
          </Link>
        </div>
        <div
          className={`${
            isEditorPage ? "flex" : "hidden"
          } items-center gap-3 md:gap-6 ml-auto`}
        >
          <button className={`btn-dark py-2`}>Publish</button>
          <button className={`btn-light py-2`}>Save as Draft</button>
        </div>
        <div className={`hidden ${isEditorPage ? "" : "md:flex"} gap-6`}>
          {navbarOptions.map((option, idx) => {
            const key = `key-${idx}`;
            return (
              <Link href={option.href} key={key}>
                <p className="hover:underline text-2xl">{option.label}</p>
              </Link>
            );
          })}
        </div>
        <div className={`${isEditorPage ? "hidden" : "flex"} gap-6`}>
          <div className={`hidden md:flex items-center gap-3 md:gap-6 ml-auto`}>
            <Link href={"/editor"} className={`md:flex gap-2 link`}>
              <span className="material-symbols-outlined text-dark-grey">
                edit_document
              </span>
              <p>write</p>
            </Link>
            <div className="flex gap-2">
              <Link
                href={`/auth/login?redirect=${redirectPath}`}
                className={`btn-dark py-2`}
              >
                Login
              </Link>
              <Link
                href={`/auth/register?redirect=${redirectPath}`}
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
