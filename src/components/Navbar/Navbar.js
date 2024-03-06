import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Logo from "../../../public/Logo-r.svg";
import Menu from "../../../public/icon-menu.svg";
import CloseMenu from "../../../public/icon-close-menu.svg";

const Navbar = ({ toggleMenu = () => {}, showingSideNav = false }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <a className={styles.logoContainer}>
            <Logo />
            <p>Rate The Refs</p>
          </a>
        </Link>

        <button onClick={toggleMenu} className={styles.menuBtn}>
          {showingSideNav ? <CloseMenu /> : <Menu />}
        </button>

        <div className={styles.linksContainer}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <p>|</p>
          <Link href="/terms-of-use">
            <a>Terms of Use</a>
          </Link>
          <p>|</p>
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
          <p>|</p>
          <Link href="/cookie-policy">
            <a>Cookie Policy</a>
          </Link>
          <p>|</p>
          <a href="mailto:info@ratetherefs.com">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
