import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import RegImg from "../assets/images/login-img.svg";
import ApiRequest from "../classes/ApiRequest";
import Swal from "sweetalert2";

export const Login = () => {
  const navigator = useNavigate();

  const goRegister = () => {
    navigator("/register");
  };
  const goReset = () => {
    navigator("/forgotpassword");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      navigator("/home");
    } else {
      const apiRequest = new ApiRequest(
        "POST",
        `${process.env.REACT_APP_API_URL}/api/login`,
        JSON.stringify(userInfo),
      );
      apiRequest.editHeader(
        "Authorization",
        `Bearer ${process.env.REACT_APP_API_KEY}`,
      );
      apiRequest
        .sendRequest()
        .then((result) => {
          const parsed = JSON.parse(result);
          console.log(parsed);
          if (parsed.success) {
            localStorage.setItem("token", parsed.data.token);
            navigator("/home");
          } else {
          }
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    }
  }, []);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    device: window.navigator.platform,
  });

  const formChangeHandler = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setUserInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    const apiRequest = new ApiRequest(
      "POST",
      `${process.env.REACT_APP_API_URL}/api/login`,
      JSON.stringify(userInfo),
    );
    apiRequest.editHeader(
      "Authorization",
      `Bearer ${process.env.REACT_APP_API_KEY}`,
    );
    apiRequest
      .sendRequest()
      .then((result) => {
        const parsed = JSON.parse(result);
        console.log(parsed);
        if (parsed.success) {
          localStorage.setItem("token", parsed.data.token);
          navigator("/home");
        } else {
          Swal.fire({
            icon: "error",
            title: parsed.data.error,
          });
        }
      })
      .catch((error) => null);
  };

  return (
    <Row className="justify-content-end w-100">
      <div className="half-screen-gradient w-50 d-none d-md-block" />

      <Col
        sm={2}
        md={6}
        lg={6}
        className="d-none d-flex d-md-block d-flex align-items-center my-auto"
      >
        <div className="d-flex">
          <img
            src={RegImg}
            className="mx-auto w-50 z-1"
            alt="Registration Image"
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
                  Welcome
                </div>
                <div className="text-color-theme">back! 👋</div>
              </div>

              <div
                className="fs-6 text-dark-emphasis"
                style={{ fontSize: "14px" }}
              >
                Log in to continue your delicious journey with us.
              </div>
            </div>

            <form className="mb-5" onSubmit={formSubmitHandler}>
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
                  onChange={formChangeHandler}
                  value={userInfo.email}
                  name="email"
                  type="text"
                  className="form-control rounded-2 border-0 bg-body-secondary px-4 py-3 mb-4 input-flamber"
                  placeholder="Email"
                />
              </div>
              <div className="text-start d-flex flex-column">
                <label
                  className="fw-medium mb-2 text-color-theme"
                  htmlFor="password"
                  style={{ fontSize: "18px" }}
                >
                  Your password
                </label>
                <input
                  id="password"
                  onChange={formChangeHandler}
                  value={userInfo.password}
                  name="password"
                  type="password"
                  className="form-control rounded-2 border-0 bg-body-secondary px-4 py-3 mb-4 input-flamber"
                  placeholder="Password"
                />
              </div>
              <div className="text-start mb-3">
                <label className="custom-checkbox text-color-theme">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember me?
                </label>
              </div>

              <div className="text-start mb-1">
                <a
                  onClick={goReset}
                  style={{ fontSize: "14px" }}
                  className=" text-color-primary text-decoration-none fw-medium curser-p "
                >
                  Forgot your password?
                </a>
              </div>

              <div className="d-flex flex-column">
                <button
                  type={"submit"}
                  className="f-button-primary border-0 fs-5 p-2 px-5 rounded-2 mb-2"
                >
                  Confirm
                </button>
              </div>

              <div className="d-flex justify-content-center">
                <p className="text-color-gray text-color-theme">
                  Don’t have an account?
                </p>
                <div
                  onClick={goRegister}
                  className="text-color-primary text-decoration-none fw-medium ms-2 curser-p"
                >
                  Register!
                </div>
              </div>
            </form>
          </section>


        </div>
      </Col>
    </Row>
  );
};
