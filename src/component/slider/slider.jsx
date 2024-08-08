import React, { useEffect, useRef } from "react";
import styles from "./slider.module.css";
import chromeGallery1 from "../../slideImages/chrome-gallery-1.webp";
import chromeGallery2 from "../../slideImages/chrome-gallery-2.webp";
import chromeGallery3 from "../../slideImages/chrome-gallery-3.webp";
import chromeGallery4 from "../../slideImages/chrome-gallery-4.webp";
import chromeGallery5 from "../../slideImages/chrome-gallery-5.webp";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);
  const fourthImageRef = useRef(null);
  const fifthImageRef = useRef(null);
  const animationContainerRef = useRef(null);
  const savedScrollPosition = useRef(0);

  useEffect(() => {
    savedScrollPosition.current = window.scrollY;
    ScrollTrigger.clearScrollMemory();
    window.history.scrollRestoration = "manual";

    const firstAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: animationContainerRef.current,
        start: "top center",
        end: "top 20%",
        scrub: 0.5,
        // markers: true,
      },
    });

    firstAnimation
      .to(firstImageRef.current, {
        xPercent: -23,
        yPercent: 22,
        ease: "none",
      })
      .to(
        secondImageRef.current,
        {
          opacity: 1,
          yPercent: -50,
        },
        0
      )
      .to(
        thirdImageRef.current,
        {
          yPercent: -8,
          scale: 1,
        },
        0
      )
      .to(
        fourthImageRef.current,
        {
          yPercent: 26,
          xPercent: -52,
          scale: 1,
        },
        0
      )
      .to(
        fifthImageRef.current,
        {
          yPercent: -10,
          xPercent: -23,
        },
        0
      );

    const secondAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: animationContainerRef.current,
        start: "top 20%",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    });

    secondAnimation.to(animationContainerRef.current, {
      xPercent: -20,
      ease: "none",
    });

    const restoreScrollPosition = () => {
      window.scrollTo(0, savedScrollPosition.current);
    };
    setTimeout(restoreScrollPosition, 0);

    const logScrollPosition = () => {
      console.log("Scroll Position:", window.scrollY);
      console.log(
        "Trigger Start:",
        ScrollTrigger.getAll().map((trigger) => ({
          trigger: trigger.trigger,
          start: trigger.start,
        }))
      );
    };

    window.addEventListener("scroll", logScrollPosition);

    return () => {
      window.removeEventListener("scroll", logScrollPosition);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearScrollMemory();
      firstAnimation.kill();
      secondAnimation.kill();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.animationContainer}
        ref={animationContainerRef}
        id="animationContainer"
      >
        <img
          ref={firstImageRef}
          className={styles.firstImage}
          src={chromeGallery1}
          alt="Chrome Gallery 1"
        />
        <img
          ref={secondImageRef}
          className={styles.secondImage}
          src={chromeGallery2}
          alt="Chrome Gallery 2"
        />
        <img
          ref={thirdImageRef}
          className={styles.thirdImage}
          src={chromeGallery3}
          alt="Chrome Gallery 3"
        />
        <img
          ref={fourthImageRef}
          className={styles.fourthImage}
          src={chromeGallery4}
          alt="Chrome Gallery 4"
        />
        <img
          ref={fifthImageRef}
          className={styles.fifthImage}
          src={chromeGallery5}
          alt="Chrome Gallery 5"
        />
      </div>
    </div>
  );
};

export default Slider;
