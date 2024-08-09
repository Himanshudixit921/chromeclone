import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./performanceContainer.module.css";
import videoSrc from "../../images/non-chrome.webm";

gsap.registerPlugin(ScrollTrigger);

const PerformanceContainer = () => {
  const sliderRef = useRef(null);
  const dataRef = useRef(null);
  const videoRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlide = (direction) => {
    let newIndex = currentSlide + direction;
    if (newIndex < 0) newIndex = 0; // Prevent sliding left beyond the first slide
    if (newIndex > 2) newIndex = 2; // Prevent sliding right beyond the last slide

    if (newIndex !== currentSlide) {
      setCurrentSlide(newIndex);
      gsap.to(sliderRef.current, {
        x: `-${newIndex * 20}%`, // Adjust the slide based on the new index
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          // Ensure buttons are visible after the slide animation completes
          gsap.to(buttonContainerRef.current, { opacity: 1, duration: 0.5 });
        },
      });
    }
  };

  useLayoutEffect(() => {
    // Ensure the scroll position starts at the top
    window.scrollTo(0, 0);

    // Setup ScrollTrigger animations
    ScrollTrigger.create({
      trigger: "#fastRefContainer",
      start: "top top",
      end: "bottom center",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      onUpdate: ({ progress }) => {
        // Show the buttons when progress is halfway (arbitrary choice)
        if (progress > 0.5) {
          gsap.to(buttonContainerRef.current, { opacity: 1, duration: 0.5 });
        }
      },
    });

    const scrollTriggerConfig = {
      trigger: sliderRef.current,
      start: "top top",
      end: "bottom center",
      scrub: 1,
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

    gsap.fromTo(
      secondRef.current,
      { x: "40%" },
      {
        x: "0%",
        scrollTrigger: { ...scrollTriggerConfig, trigger: sliderRef.current },
      }
    );

    gsap.fromTo(
      thirdRef.current,
      { x: "30%" },
      {
        x: "0%",
        scrollTrigger: { ...scrollTriggerConfig, trigger: sliderRef.current },
      }
    );

    // Reinitialize ScrollTrigger and animations when component mounts
    ScrollTrigger.refresh();
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

        <div className={styles.secondContainer} ref={secondRef}>
          <div>Hello World</div>
        </div>
        <div className={styles.thirdContainer} ref={thirdRef}>
          <div>Hello World</div>
        </div>
      </div>
      <div
        className={styles.buttonContainer}
        ref={buttonContainerRef}
        style={{
          opacity: 0,
        }} // Adjust this value as needed
      >
        <button onClick={() => handleSlide(-1)}>&larr;</button>
        <button onClick={() => handleSlide(1)}>&rarr;</button>
      </div>
    </div>
  );
};

export default PerformanceContainer;
