import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./performanceContainer.module.css";
import videoSrc from "../../images/non-chrome.webm";

gsap.registerPlugin(ScrollTrigger);

const PerformanceContainer = () => {
  const pinSlider = useRef(null);
  const savedScrollPosition = useRef(0);

  useEffect(() => {
    savedScrollPosition.current = window.scrollY;
    ScrollTrigger.clearScrollMemory();
    window.history.scrollRestoration = "manual";

    const firstContainer = document.querySelector(`.${styles.firstContainer}`);
    const secondContainer = document.querySelector(
      `.${styles.container}:nth-of-type(2)`
    );
    const thirdContainer = document.querySelector(
      `.${styles.container}:nth-of-type(3)`
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinSlider.current,
        scrub: 1,
        pin: true,
        start: "top top",
        end: "+=500 top",
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      firstContainer,
      { scale: 1.2 },
      { scale: 1, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        secondContainer,
        { x: 200 },
        { x: 0, duration: 0.8, ease: "power2.out" },
        0
      )
      .fromTo(
        thirdContainer,
        { x: 200 },
        { x: 0, duration: 0.8, ease: "power2.out" },
        0
      );

    const restoreScrollPosition = () => {
      window.scrollTo(0, savedScrollPosition.current);
    };
    setTimeout(restoreScrollPosition, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearScrollMemory();
      tl.kill();
    };
  }, []);

  return (
    <div ref={pinSlider} className={styles.outerWrapper}>
      <div className={styles.containerWrapper}>
        <div className={`${styles.container} ${styles.firstContainer}`}>
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
          <div className={styles.imageSection}>
            <video
              className={styles.video}
              src={videoSrc}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div className={styles.container}></div>
        <div className={styles.container}></div>
      </div>
    </div>
  );
};

export default PerformanceContainer;
