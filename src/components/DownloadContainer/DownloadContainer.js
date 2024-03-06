import React from "react";
import styles from "./DownloadContainer.module.scss";
import AppStore from "../../../public/download-app-store.svg";
import GooglePlay from "../../../public/download-google-play.svg";

const DownloadContainer = () => {
  return (
    <div className={styles.container}>
      <p className={`mcH2 ${styles.downloadNowText}`}>DOWNLOAD THE APP NOW</p>
      <div className={styles.downloadBtnsContainer}>
        <a
          href="https://apps.apple.com/us/app/id1498988232"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AppStore />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.ratetherefs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GooglePlay />
        </a>
      </div>
    </div>
  );
};

export default DownloadContainer;
