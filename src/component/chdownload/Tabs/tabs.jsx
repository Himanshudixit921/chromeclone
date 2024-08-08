// Tabs.js
import React from "react";
import styles from "./tabs.module.css";

const Tabs = ({ onFastTabClick }) => {
  const tabs = ["Updates", "Yours", "Safe", "Fast", "By Google"];

  const handleTabClick = (tab) => {
    if (tab === "Fast") {
      onFastTabClick();
    }
  };

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={styles.tabButton}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
