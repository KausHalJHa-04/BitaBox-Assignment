import React, { useEffect, useRef } from "react";
import "./Feature.css";
import vrSet from "../assets/Untitled.png"; // Your VR image

const Feature = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  /* -------------------------------------------
     SCROLL REVEAL ANIMATION
  ------------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  /* -------------------------------------------
     TRUE 3D TILT EFFECT (Perspective Wrapper)
  ------------------------------------------- */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const img = wrapper?.querySelector(".feature-img");

    if (!wrapper || !img) return;

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const midX = rect.width / 2;
      const midY = rect.height / 2;

      const rotateY = (x - midX) / 15;   // rotate left-right
      const rotateX = -(y - midY) / 15;  // rotate up-down

      img.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
      `;
    };

    const resetTilt = () => {
      img.style.transform = `
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
    };

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", resetTilt);

    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  /* -------------------------------------------
     FEATURES LIST
  ------------------------------------------- */
  const features = [
    "High-resolution OLED or LCD screens: Provide sharp and clear visuals.",
    "Inside-out tracking: Built-in sensors (cameras or other sensors).",
    "High-resolution OLED or LCD screens: Provide sharp and clear visuals.",
    "Refresh rate: Higher refresh rates reduce motion sickness.",
    "Eye tracking: Monitors the movement of the user’s eyes.",
    "Refresh rate: Higher refresh rates reduce motion sickness."
  ];

  return (
    <section className="features-section" ref={sectionRef}>
      {/* LEFT SIDE — TRUE 3D IMAGE */}
      <div className="left">
        <div className="tilt-wrapper" ref={wrapperRef}>
          <img
            src={vrSet}
            alt="VR Headset"
            className="feature-img"
          />
        </div>
      </div>

      {/* RIGHT SIDE — TEXT + FEATURES */}
      <div className="right">
        <h2 className="feature-title">
          Our Virtual Headsets <br /> Shine with Unique <br /> Features!
        </h2>

        <ul className="feature-list">
          {features.map((text, index) => (
            <li key={index}>
              <span className="icon">✦</span> {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Feature;
