import React from "react";
import Link from "next/link";
import styles from "./Sidenav.module.scss";
import Logo from "../../../public/Logo-r.svg";
import CloseMenu from "../../../public/icon-close-menu.svg";

const Sidenav = ({ toggleMenu }) => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <Link href="/">
          <a onClick={toggleMenu}>Home</a>
        </Link>
        <Link href="/terms-of-use">
          <a onClick={toggleMenu}>Terms of Use</a>
        </Link>
        <Link href="/privacy-policy">
          <a onClick={toggleMenu}>Privacy Policy</a>
        </Link>
        <Link href="/cookie-policy">
          <a onClick={toggleMenu}>Cookie Policy</a>
        </Link>
        <a href="mailto:info@ratetherefs.com">Contact Us</a>
      </div>
    </div>
  );
};

export default Sidenav;
