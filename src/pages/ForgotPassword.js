import React from "react";

export const ForgotPassword = () => {
  return (
    <div className="m-4 spline-sans mt-5 pt-3 ">
      <section>
        <div className="text-start mb-5">
          <div
            className="fw-semibold text-color-gray"
            style={{ fontSize: "36px" }}
          >
            <div className="text-color-theme" style={{ marginBottom: "-10px" }}>
              Forgot your
            </div>
            <div className="text-color-theme">password?</div>
          </div>

          <div
            className="fs-6 text-dark-emphasis pt-2"
            style={{ fontSize: "14px" }}
          >
            Don’t worry just fill out this form and we will send you a password
            resset on your mail.
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
            <a
              href="#"
              className="text-color-primary text-decoration-none fw-medium ms-2"
            >
              Go back!
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
