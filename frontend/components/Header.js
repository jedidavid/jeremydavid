import React from "react";
import ThemeToggle from "./ThemeToggle";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
const Header = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-8 navbar-expand-lg mb-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between">
            <Link href="/">
              <a className="leading-none inline-block whitespace-no-wrap">
                <div className="absolute">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 500 500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M153.552 0V72.8368H67.2131V0H153.552ZM153.552 102.41V412.377C153.552 470.975 117.486 500 63.9344 500C32.2404 500 15.3005 493.428 0 485.761V401.972C14.2076 408.543 25.1366 411.281 41.5301 411.281C65.5738 411.281 67.2131 392.662 67.2131 383.352V102.41H153.552V102.41ZM413.661 0H500V139.102V387.185H413.661V358.708C409.836 368.565 384.153 392.662 340.437 392.662C275.41 392.662 200.546 346.112 200.546 244.25C200.546 146.221 275.41 97.4808 340.437 97.4808C384.153 97.4808 409.836 122.673 413.661 128.697V0V0ZM353.005 316.539C388.525 316.539 417.486 291.895 417.486 244.25C417.486 198.248 388.525 173.603 353.005 173.603C315.847 173.603 284.153 198.795 284.153 244.25C284.153 291.347 315.847 316.539 353.005 316.539Z" />
                  </svg>
                </div>
              </a>
            </Link>
            <button
              className="block lg:hidden cursor-pointer text-4xl leading-none p-4 outline-none focus:outline-none bg-light-black dark:bg-white text-white dark:text-light-black"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <HiMenuAlt3 />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:justify-items-auto justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="nav-item">
                <Link href="/">
                  <a className="px-4 py-2 flex items-center text-lg font-body leading-snug hover:opacity-75 base-transition text-transition">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/projects">
                  <a className="px-4 py-2 flex items-center text-lg font-body leading-snug hover:opacity-75 base-transition text-transition">
                    Works
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-4 py-2 flex items-center text-lg font-body leading-snug hover:opacity-75 base-transition text-transition"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                {props.cv ? (
                  <a
                    className="px-4 py-2 flex items-center text-lg font-body leading-snug hover:opacity-75 base-transition text-transition"
                    href="#"
                  >
                    CV
                  </a>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item">
                <span
                  className="px-4 py-2 flex items-center leading-snug"
                  href="#"
                >
                  <ThemeToggle />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;