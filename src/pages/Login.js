import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigator = useNavigate();

  return (
    <div className="m-4 spline-sans mt-5 pt-3 ">
      <section>
        <div className="text-start mb-5">
          <div
            className="fw-semibold text-color-gray"
            style={{ fontSize: "36px" }}
          >
            <div className="text-color-theme" style={{ marginBottom: "-10px" }}>
              Welcome
            </div>
            <div className="text-color-theme">back! 👋</div>
          </div>

          <div className="fs-6 text-dark-emphasis" style={{ fontSize: "14px" }}>
            Log in to continue your delicious journey with us.
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
              href="#"
              style={{ fontSize: "14px" }}
              className=" text-color-primary text-decoration-none fw-medium "
            >
              Forgot your password?
            </a>
          </div>

          <div className="d-flex flex-column">
            <button
              onClick={() => navigator("/home")}
              className="f-button-primary border-0 fs-5 p-2 px-5 rounded-2 mb-2"
            >
              Confirm
            </button>
          </div>

          <div className="d-flex justify-content-center">
            <p className="text-color-gray text-color-theme">
              Don’t have an account?
            </p>
            <a
              href="#"
              onClick={() => navigator("/register")}
              className="text-color-primary text-decoration-none fw-medium ms-2"
            >
              Register!
            </a>
          </div>
        </form>
      </section>

      <div className="mt-5 pt-5 bottom-center text-color-theme">
        All rights reserved Flember
      </div>
    </div>
  );
};
