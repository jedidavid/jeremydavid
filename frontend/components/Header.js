import React, { useRef } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { getStrapiMedia } from "../lib/media";
import MenuToggle from "./MenuToggle";
import { motion, useCycle } from "framer-motion";
import useDimensions from "../lib/use-dimensions";
import MenuItem from "./MenuItem";

const Header = (props) => {
  const [isNavbarOpen, setNavbarOpen] = useCycle(false, true);
  const containerRef = useRef(false);
  const { height } = useDimensions(containerRef);

  const menuOpenVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
  };

  const childVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.nav
      className="py-8"
      initial={false}
      animate={isNavbarOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <div className="nav-holder">
        <div className="w-full relative flex justify-between">
          <Link href="/">
            <a className="leading-none inline-block whitespace-no-wrap base-transition text-transition">
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
          <MenuToggle toggle={() => setNavbarOpen(!isNavbarOpen)} />
        </div>
        <motion.div
          className={
            "lg:flex flex-grow items-center lg:justify-items-auto justify-center bg:white dark:bg-matte-black" +
            (isNavbarOpen ? " flex nav-open" : " hidden")
          }
          variants={menuOpenVariants}
        >
          <motion.ul
            className="flex flex-col lg:flex-row list-none lg:ml-auto items-center"
            variants={childVariants}
          >
            <MenuItem>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/works">
                <a className="nav-link">Works</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </MenuItem>
            {props.cv && (
              <MenuItem>
                <a
                  className="nav-link"
                  href={getStrapiMedia(props.cv)}
                  download={props.cv.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  CV
                </a>
              </MenuItem>
            )}
            <MenuItem>
              <span className="px-4 py-2 flex items-center leading-snug">
                <ThemeToggle />
              </span>
            </MenuItem>
          </motion.ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Header;
