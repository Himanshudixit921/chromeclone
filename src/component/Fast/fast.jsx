import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./fast.module.css";

gsap.registerPlugin(ScrollTrigger);

const Fast = () => {
  const fastRef = useRef(null);

  useEffect(() => {
    const chars = fastRef.current.querySelectorAll("span");

    gsap.from(chars, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: fastRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.firstLine}>
          The{" "}
          <span ref={fastRef} className={styles.fast}>
            {"Fast".split("").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </span>{" "}
          way to do
        </h1>
        <h1 className={styles.secondLine}>things online</h1>
      </div>
    </div>
  );
};

export default Fast;
