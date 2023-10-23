import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ApiRequest from "../classes/ApiRequest";
import { Col, Container, Row } from "react-bootstrap";
import RegImg from "../assets/images/register-img.svg";
export const Register = () => {
  const navigator = useNavigate();

  const goLogin = () => {
    navigator("/login");
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
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    device: window.navigator.platform,
  });

  const formChangeHandler = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setUserInfo((prevState) => {
      return { ...prevState, [name]: value.trimStart() };
    });
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    let form = evt.target;
    form.classList.add("was-validated");

    const apiRequest = new ApiRequest(
      "POST",
      `${process.env.REACT_APP_API_URL}/api/register`,
      JSON.stringify(userInfo),
    );
    apiRequest.editHeader(
      "Authorization",
      `Bearer ${process.env.REACT_APP_API_KEY}`,
    );
    apiRequest.sendRequest().then((result) => {
      const parsed = JSON.parse(result);
      console.log("swal stuff", parsed);
      if (parsed.success) {
        localStorage.setItem("token", parsed.data.token);
        navigator("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: parsed.data.error,
        });
      }
    });
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
            className="mx-auto w-50 z-1"
            alt="Registration Image"
          />
        </div>
      </Col>

      <Col xs={12} md={6} lg={6} className=" px-5">
        <div className="m-4 spline-sans mt-5 pt-3 ">
          <div className="text-start mb-5">
            <div
              className="fw-semibold text-color-gray"
              style={{ fontSize: "36px" }}
            >
              <div
                className="text-color-theme"
                style={{ marginBottom: "-10px" }}
              >
                Wellcome let’s{" "}
              </div>
              <div className="text-color-theme">get started!</div>
            </div>

            <div
              className="fs-6 text-dark-emphasis"
              style={{ fontSize: "14px" }}
            >
              Join our community today by filling out this form!
            </div>
          </div>

          <form className="mb-5" onSubmit={formSubmitHandler}>
            <div className="text-start d-flex flex-column">
              <label
                className="fw-medium mb-2 text-color-theme"
                htmlFor="name"
                style={{ fontSize: "18px" }}
              >
                Your name
              </label>
              <input
                id="name"
                required
                pattern={"^[a-zA-Z0-9\\s]+$"}
                onChange={formChangeHandler}
                value={userInfo.name}
                name="name"
                type="text"
                className="rounded-2 border-0 px-4 py-3 mb-4 input-flamber"
                placeholder="Name"
              />
            </div>
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
                className="rounded-2 border-0 bg-body-secondary px-4 py-3 mb-4 input-flamber"
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
                className="rounded-2 border-0 bg-body-secondary px-4 py-3 mb-4 input-flamber"
                placeholder="Password"
              />
            </div>
            <div className="text-start d-flex flex-column">
              <label
                className="fw-medium mb-2 text-color-theme"
                htmlFor="confirmpassword"
                style={{ fontSize: "18px" }}
              >
                Confirm your password
              </label>
              <input
                onChange={formChangeHandler}
                value={userInfo.password_confirmation}
                name="password_confirmation"
                id="confirmpassword"
                type="confirmpassword"
                className="rounded-2 border-0 bg-body-secondary px-4 py-3 mb-4 input-flamber"
                placeholder="Confirm password"
              />
            </div>

            <div className="d-flex flex-column mt-4">
              <button
                type={"submit"}
                className="f-button-primary border-0 fs-5 p-2 px-5 rounded-2 mb-2"
              >
                Confirm
              </button>
            </div>

            <div className="d-flex justify-content-center">
              <p className="text-color-gray text-color-theme">
                Already have an account?
              </p>
              <button
                onClick={goLogin}
                className="text-color-primary text-decoration-none fw-medium ms-2 curser-p"
              >
                Log In!
              </button>
            </div>
          </form>

          <div className="mt-5 pt-5 bottom-center text-color-theme">
            All rights reserved Flember
          </div>
        </div>
      </Col>
    </Row>
  );
};
