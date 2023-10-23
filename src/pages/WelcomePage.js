import React, { useState, useEffect } from "react";
import darkLogo from "../assets/images/flamber-logo-dark.svg";
import lightLogo from "../assets/images/flamber-logo-light.svg";
import welcomeImg from "../assets/images/welcome-img.svg";
import { Container, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const welcomeMessages = [
  "Welcome to Flamber - Taste Elevated.",
  "Savor the Moment with Flamber.",
  "Order. Eat. Enjoy. Repeat. Welcome!",
  "Flamber: Where Food Meets Convenience.",
  "Hungry? You're in the right place. Welcome!",
];

const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
const randomMessage = welcomeMessages[randomIndex];

export const WelcomePage = () => {
  const [LogoTheme, setLogoTheme] = useState("");
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  const goRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setLogoTheme(lightLogo);
    } else {
      setLogoTheme(darkLogo);
    }
  }, []);

  return (
    <Container>
      <div className="half-screen-gradient w-100 d-none d-md-block " />
      <Row>
        <Col sm={2} md={2} lg={2} className="d-none d-md-block" />
        <Col xs={12} md={8} lg={8} className="pt-lg-4">
          <div className="bg-body p-5 rounded-4  mt-lg-5  mt-xxl-5 mt-sm-5 ">
            <div className="text-center justify-content-center mt-2">
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
                className="img-fluid col-sm-4 col-12"
              />
            </div>

            <div className="mx-5 mb-5 text-center">
              <h2 className="spline-sans text-color-primary fw-bold mb-3">
                Hello!
              </h2>
              <p className="spline-sans fw-medium text-color-theme">
                {randomMessage}
              </p>
            </div>

            <div className="d-flex flex-column px-4">
              <button
                onClick={goRegister}
                className="f-button-primary border-0 fs-5 p-2 px-5 rounded-2 mb-2"
              >
                Register
              </button>

              <button
                onClick={goLogin}
                className="f-button-secondery border-0 fs-5 p-2 px-5 rounded-2"
              >
                Log In
              </button>
            </div>
          </div>
        </Col>
        <Col sm={2} md={2} lg={2} className="d-none d-md-block" />
      </Row>
    </Container>
  );
};
