import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./performanceContainer.module.css";
import videoSrc from "../../images/non-chrome.webm";

gsap.registerPlugin(ScrollTrigger);

const PerformanceContainer = () => {
  const sliderRef = useRef(null);
  const dataRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: "#fastRefContainer",
      start: "top top",
      end: "bottom center",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    const scrollTriggerConfig = {
      trigger: sliderRef.current,
      start: "top top",
      end: "bottom center",
      scrub: true,
    };

    gsap.to(sliderRef.current, {
      minHeight: "480px",
      scrollTrigger: scrollTriggerConfig,
    });

    gsap.to(dataRef.current, {
      height: "482px",
      width: "953px",
      scrollTrigger: scrollTriggerConfig,
    });

    gsap.to(videoRef.current, {
      height: "549px",
      x: -500,
      y: 200,
      scrollTrigger: scrollTriggerConfig,
    });
  }, []);

  return (
    <div id="fastRefContainer">
      <div className={styles.sliderContainer} ref={sliderRef}>
        <div className={styles.dataContainer} ref={dataRef}>
          <div className={styles.textSection}>
            <h1 className={styles.heading}>
              Prioritise <br /> performance
            </h1>
            <div className={styles.textContainer}>
              <div className={styles.subtext}>
                Chrome is built for performance. Optimise your experience with
                features like Energy Saver and Memory Saver.
              </div>
              <a href="/" className={styles.link}>
                Learn more about Memory and Energy Saver
              </a>
            </div>
          </div>
          <div className={styles.videoContainer} ref={videoRef}>
            <video
              className={styles.video}
              src={videoSrc}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceContainer;
