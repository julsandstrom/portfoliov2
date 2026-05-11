"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (!open) {
      setOpen(true);
      setTimeout(() => setShowMenu(true), 500);
    } else {
      setOpen(false);
      setShowMenu(false);
    }
  };

  return (
    <header className="fixed w-full top-0 bg-none text-black z-50 md:right-0 xl:right-50  mx-auto">
      <div className="mx-auto flex items-center justify-end px-5 sm:px-11 lg:px-14 py-2 sm:py-3 md:py-4">
        <button
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={toggleMenu}
          className="group flex h-9 sm:py-2 sm:h-12  flex-col bg-black/60 backdrop-blur-sm px-4 rounded-xs  items-center justify-center gap-1.5 sm:gap-2 cursor-pointer lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span
            className={`h-0.5 sm:h-1 self-start transition-all duration-300 ${
              open ? "w-5 sm:w-9 bg-[#F5672D]" : "w-4 sm:w-7 bg-[#ffffff]"
            }`}
          />
          <span
            className={`h-0.5 w-5 sm:w-9 sm:h-1 transition-all duration-300 ${
              open ? "bg-[#ECA85A]" : "bg-[#ffffff]"
            }`}
          />
          <span
            className={`h-0.5 sm:h-1 self-end transition-all duration-300 ${
              open ? "w-5 sm:w-9 bg-[#F5672D]" : "w-4 sm:w-7 bg-[#ffffff]"
            }`}
          />
        </button>

        <nav className="hidden font-gilda lg:flex  gap-16 font-regular tracking-[0.04em] text-base md:text-xl">
          <Link
            href="/"
            className=" transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0B0B]"
          >
            Home
          </Link>
          <Link
            href="/#work"
            className=" transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0B0B]"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className=" transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0B0B]"
          >
            About
          </Link>
          <a
            href="mailto:juliansandstrom@gmail.com"
            className=" transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0B0B]"
          >
            Contact
          </a>
        </nav>
      </div>

      <div
        className={`
          fixed inset-0 z-50 lg:hidden
          ${
            showMenu
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
          transition-opacity duration-300
        `}
      >
        <button
          aria-hidden
          onClick={toggleMenu}
          className="absolute  inset-0 bg-black/50"
        />

        <div className="relative flex h-full w-full flex-col items-center justify-start bg-[#0B0B0B] px-6 sm:px-11 py-20 tracking-[0.04em]">
          <button
            aria-label="Close navigation"
            onClick={toggleMenu}
            className="absolute right-6 sm:right-12 top-2 sm:top-2 text-[#F4F3F1]/80 text-4xl sm:text-6xl font-extralight"
          >
            ×
          </button>

          <Link
            href="/"
            onClick={toggleMenu}
            className="text-center text-base sm:text-xl font-extralight text-[#F5672D] hover:text-[#F4F3F1] transition-colors"
          >
            Home
          </Link>

          <nav className="font-grotesk mt-8 flex flex-col items-center gap-6 sm:gap-8 text-base sm:text-xl">
            <div className=" flex justify-center w-full max-w-xs px-4 py-3 text-center  text-[#F4F3F1]">
              {" "}
              <Link
                href="/#work"
                onClick={toggleMenu}
                className=" transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
              >
                {" "}
                Work{" "}
              </Link>{" "}
              <Image
                src="/icons/yellow-arrow-right.svg"
                aria-hidden="true"
                alt=""
                width={12}
                height={12}
                className="w-3  ml-2"
              />
            </div>{" "}
            <div className="flex justify-center w-full max-w-xs px-4 py-3 text-center  text-[#F4F3F1] ">
              {" "}
              <Link
                href="/#about"
                onClick={toggleMenu}
                className=" transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
              >
                {" "}
                About{" "}
              </Link>{" "}
              <Image
                src="/icons/yellow-arrow-right.svg"
                aria-hidden="true"
                alt=""
                width={12}
                height={12}
                className="w-3  ml-2"
              />
            </div>{" "}
            <div className="flex justify-center w-full max-w-xs px-4 py-3 text-center  text-[#F4F3F1] ">
              {" "}
              <a
                href="mailto:juliansandstrom@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-colors   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
              >
                {" "}
                Contact{" "}
              </a>{" "}
              <Image
                src="/icons/yellow-arrow-right.svg"
                aria-hidden="true"
                alt=""
                width={12}
                height={12}
                className="w-3  ml-2"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
