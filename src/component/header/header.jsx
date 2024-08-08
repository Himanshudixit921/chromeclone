import React from "react";
import chromesvg from "../../images/chrome.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.image} src={chromesvg} alt="Chrome Logo" />
        <div className={styles.text}>chrome</div>
      </div>
      <div className={styles.navbarContainer}>
        <ul className={styles.navbarLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">The Browser by Google</a>
          </li>
          <li className={styles.dropdown}>
            <a href="/" className={styles.dropbtn}>
              Features
            </a>
            <div className={styles.dropdownContent}>
              <a href="/">Overview</a>
              <a href="/">Google add-ons</a>
              <a href="/">Password check</a>
              <a href="/">Use across devices</a>
              <a href="/">Dark mode</a>
              <a href="/">Tabs</a>
              <a href="/">Articles for you</a>
              <a href="/">Extensions</a>
            </div>
          </li>
          <li className={styles.dropdown}>
            <a href="/" className={styles.dropbtn}>
              Support
            </a>
            <div className={styles.dropdownContent}>
              <a href="/">Overview</a>
              <a href="/">Helpful tips for Chrome</a>
              <a href="/">Support</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
