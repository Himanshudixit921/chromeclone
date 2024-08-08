import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./performanceContainer.module.css";
import videoSrc from "../../images/non-chrome.webm";

gsap.registerPlugin(ScrollTrigger);

const PerformanceContainer = () => {
  const pinSlider = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const firstContainer = document.querySelector(
        `.${styles.firstContainer}`
      );
      const secondContainer = document.querySelector(
        `.${styles.container}:nth-of-type(2)`
      );
      const thirdContainer = document.querySelector(
        `.${styles.container}:nth-of-type(3)`
      );

      // Ensure all elements are visible
      gsap.set([firstContainer, secondContainer, thirdContainer], {
        autoAlpha: 1,
      });

      // GSAP timeline setup
      let tl = gsap.timeline({
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
    }, pinSlider);

    return () => ctx.revert();
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
