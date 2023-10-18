import React from "react";
import logo from "../assets/images/flamber-logo-dark.svg";
import welcomeImg from "../assets/images/welcome-img.svg";

export const WelcomePage = () => {
  return (
    <div>
      <div className="row justify-content-center pt-5 mt-2">
        <img
          src={logo}
          alt="Flamber Logo"
          className="img-fluid col-sm-5 col-7"
        />
      </div>

      <div className="row justify-content-center mt-4 mb-2">
        <img
          src={welcomeImg}
          alt="Flamber Logo"
          className="img-fluid col-sm-7 col-12"
        />
      </div>

      <div className="mx-5 mb-5">
        <h2 className="spline-sans text-color-primary fw-bold mb-3">Hello!</h2>
        <p className="spline-sans fw-medium">
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
