import React from "react";

export const Register = () => {
  return (
    <div className="m-4 spline-sans mt-5 pt-3 ">
      <div className="text-start mb-5">
        <div
          className="fw-semibold text-color-gray"
          style={{ fontSize: "36px" }}
        >
          <div className="text-color-theme" style={{ marginBottom: "-10px" }}>
            Wellcome let’s{" "}
          </div>
          <div className="text-color-theme">get started!</div>
        </div>

        <div className="fs-6 text-dark-emphasis" style={{ fontSize: "14px" }}>
          Join our community today by filling out this form!
        </div>
      </div>

      <form className="mb-5">
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
            id="confirmpassword"
            type="confirmpassword"
            className="rounded-2 border-0 bg-body-secondary px-4 py-3 mb-4 input-flamber"
            placeholder="Confirm password"
          />
        </div>

        <div className="d-flex flex-column mt-4">
          <button className="f-button-primary border-0 fs-5 p-2 px-5 rounded-2 mb-2">
            Confirm
          </button>
        </div>

        <div className="d-flex justify-content-center">
          <p className="text-color-gray text-color-theme">
            Already have an account?
          </p>
          <a
            href="#"
            className="text-color-primary text-decoration-none fw-medium ms-2"
          >
            Log In!
          </a>
        </div>
      </form>

      <div className="mt-5 pt-5 bottom-center">All rights reserved Flember</div>
    </div>
  );
};
