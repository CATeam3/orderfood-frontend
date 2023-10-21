import React, { useState, useEffect } from "react";
import darkLogo from "../assets/images/flamber-logo-dark.svg";
import lightLogo from "../assets/images/flamber-logo-light.svg";
import welcomeImg from "../assets/images/welcome-img.svg";

export const WelcomePage = () => {
  const [LogoTheme, setLogoTheme] = useState("");

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setLogoTheme(lightLogo);
    } else {
      setLogoTheme(darkLogo);
    }
  }, []);

  return (
    <div className="bg-body page">
      <div className="text-center justify-content-center pt-5 mt-2">
        <img
          src={LogoTheme}
          alt="Flamber Logo"
          className="img-fluid col-sm-5 col-7"
        />
      </div>

      <div className="text-center justify-content-center mt-4 mb-2">
        <img
          src={welcomeImg}
          alt="Flamber Logo"
          className="img-fluid col-sm-7 col-12"
        />
      </div>

      <div className="mx-5 mb-5 text-center">
        <h2 className="spline-sans text-color-primary fw-bold mb-3">Hello!</h2>
        <p className="spline-sans fw-medium text-color-theme">
          there should be text here,
          <br />
          im not sure what text
        </p>
      </div>

      <div className="d-flex flex-column px-4">
        <button className="f-button-primary border-0 fs-5 p-2 px-5 rounded-2 mb-2">
          Register
        </button>

        <button className="f-button-secondery border-0 fs-5 p-2 px-5 rounded-2">
          Log In
        </button>
      </div>
    </div>
  );
};
