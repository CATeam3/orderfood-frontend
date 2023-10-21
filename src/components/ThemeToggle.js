import React, { useEffect, useState } from "react";
import Moon from "../assets/images/darkThemeToggle/dark.svg";
import MoonSelected from "../assets/images/darkThemeToggle/dark-selected.svg";
import Sun from "../assets/images/darkThemeToggle/light.svg";
import SunSelected from "../assets/images/darkThemeToggle/light-selected.svg";

export const ThemeToggle = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const [sunImageSource, setSunImageSource] = useState(SunSelected);
  const [moonImageSource, setMoonImageSource] = useState(Moon);

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setSunImageSource(Sun);
      setMoonImageSource(MoonSelected);
    } else {
      setSunImageSource(SunSelected);
      setMoonImageSource(Moon);
    }

    if (localStorage.getItem("theme") == "dark") {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, []);

  const toggleAnimation = () => {
    window.location.reload(false);

    console.log(isAnimating);

    if (localStorage.getItem("theme") == "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }

    console.log(localStorage.getItem("theme"));

    if (localStorage.getItem("theme") == "dark") {
      setSunImageSource(Sun);
      setMoonImageSource(MoonSelected);
    } else {
      setSunImageSource(SunSelected);
      setMoonImageSource(Moon);
    }

    setTimeout(() => {
      setIsAnimating(!isAnimating);
    }, 250); // 250 milliseconds (0.25 seconds)
  };

  return (
    <div
      className="theme-toggle d-flex justify-content-between m-2 user-select-none bg-body"
      onClick={toggleAnimation}
    >
      <div
        className={`theme-selector-ball ${isAnimating ? "moveRight" : ""}`}
      ></div>

      <img src={sunImageSource} className="z-1 m-2 theme-selected" alt="Sun" />

      <img
        src={moonImageSource}
        className="z-1 m-2 theme-selected"
        alt="Moon"
      />
    </div>
  );
};
