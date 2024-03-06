import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Logo from "../../../public/Logo-r.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Logo />
            <p>Rate The Refs</p>
          </div>
        </Link>

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

export default Footer;
