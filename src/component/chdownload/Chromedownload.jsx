import React, { useEffect, useRef } from "react";
import styles from "./chromedownload.module.css";
import chromesvg from "../../images/chrome.svg";
import Tabs from "./Tabs/tabs";
import { gsap } from "gsap";

const Chromedownload = ({ onFastTabClick }) => {
  const dataContainerRef = useRef(null);

  useEffect(() => {
    // Animation: move from 3px below to the original position and fade in
    gsap.fromTo(
      dataContainerRef.current,
      { opacity: 0, y: 12 }, // Start state
      { opacity: 1, y: 0, duration: 0.4 } // End state
    );
  }, []);

  return (
    <div className={styles.maincontainer}>
      <div ref={dataContainerRef} className={styles.datacontainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={chromesvg} alt="" />
        </div>
        <h1 className={styles.text}>
          The browser <br />
          built to be yours
        </h1>
        <Tabs onFastTabClick={onFastTabClick} />
        <div className={styles.downloaderlink}>
          Need the Chrome installer?{" "}
          <a href="/" className={styles.link}>
            Download here.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chromedownload;
