import React from "react";
import styles from "./Header.module.scss";
import DownloadContainer from "../DownloadContainer/DownloadContainer";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>
          The 1st platform that enables you to share your opinion on the Ref’s
          performance
        </h1>
        <DownloadContainer />
        <div className={styles.heroImageDiv}>
          <img
            className={styles.heroImage}
            srcSet="/RTR-Hero.png 1x,/RTR-Hero@2x.png 2x, /RTR-Hero@3x.png 3x"
          />
          <img
            className={styles.heroImageMobile}
            srcSet="/RTR-Hero-mobile.png 1x,/RTR-Hero-mobile@2x.png 2x, /RTR-Hero-mobile@3x.png 3x"
          />
        </div>
      </div>
      <div className={styles.emptyBlue} />
    </div>
  );
};

export default Header;
