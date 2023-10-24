import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegImg from "../assets/images/forgot-img.svg";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const navigator = useNavigate();
  const goBack = () => {
    navigator(-1);
  };

  return (
    <Row className="justify-content-end w-100">
      <div className="half-screen-gradient w-50 d-none d-md-block" />

      <Col
        sm={2}
        md={6}
        lg={6}
        className="d-none d-flex d-md-block d-flex align-items-center my-auto "
      >
        <div className="d-flex">
          <img
            src={RegImg}
            className="mx-auto z-1"
            alt="Registration Image"
            style={{ width: "50%", paddingTop: "25%" }}
          />
        </div>
      </Col>

      <Col xs={12} md={6} lg={6} className=" px-5 mt-5">
        <div className="m-4 spline-sans mt-5 pt-3 ">
          <section>
            <div className="text-start mb-5">
              <div
                className="fw-semibold text-color-gray"
                style={{ fontSize: "36px" }}
              >
                <div
                  className="text-color-theme"
                  style={{ marginBottom: "-10px" }}
                >
                  Forgot your
                </div>
                <div className="text-color-theme">password?</div>
              </div>

              <div
                className="fs-6 text-dark-emphasis pt-2"
                style={{ fontSize: "14px" }}
              >
                Don’t worry just fill out this form and we will send you a
                password resset on your mail.
              </div>
            </div>

            <form className="mb-5">
              <div className="text-start d-flex flex-column">
                <label
                  className="fw-medium mb-2 text-color-theme"
                  htmlFor="email"
                  style={{ fontSize: "18px" }}
                >
                  Your email
                </label>
                <input
                  id="email"
                  type="text"
                  className="form-control rounded-2 border-0 bg-body-secondary px-4 py-3 mb-4 input-flamber"
                  placeholder="Email"
                />
              </div>

              <div className="d-flex flex-column">
                <button className="f-button-primary border-0 fs-5 p-2 mt-5 px-5 rounded-2 mb-2 ">
                  Confirm
                </button>
              </div>

              <div className="d-flex justify-content-center">
                <p className="text-color-gray text-color-theme">
                  Changed your mind?
                </p>
                <div
                  onClick={goBack}
                  className="text-color-primary text-decoration-none fw-medium ms-2 curser-p"
                >
                  Go back!
                </div>
              </div>
            </form>
          </section>

        </div>
      </Col>
    </Row>
  );
};
