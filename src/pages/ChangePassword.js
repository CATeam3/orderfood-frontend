import React from "react";

export const ChangePassword = () => {
  return (
    <div className="m-4 spline-sans mt-5 pt-3 ">
      <section>
        <div className="text-start mb-5">
          <div
            className="fw-semibold text-color-gray"
            style={{ fontSize: "36px" }}
          >
            <div style={{ marginBottom: "-10px" }}>Change your</div>
            <div>password!</div>
          </div>

          <div className="fs-6 text-dark-emphasis" style={{ fontSize: "14px" }}>
            Please enter your new password
          </div>
        </div>

        <form className="mb-5">
          <div className="text-start d-flex flex-column">
            <label
              className="fw-medium mb-2"
              htmlFor="newpassword"
              style={{ fontSize: "18px" }}
            >
              Your new password
            </label>
            <input
              id="newpassword"
              type="password"
              className="form-control rounded-2 border-0 bg-body-secondary px-4 py-3 mb-4 input-flamber"
              placeholder="New password"
            />
          </div>
          <div className="text-start d-flex flex-column">
            <label
              className="fw-medium mb-2"
              htmlFor="password"
              style={{ fontSize: "18px" }}
            >
              Confirm new password
            </label>
            <input
              id="password"
              type="password"
              className="form-control rounded-2 border-0 bg-body-secondary px-4 py-3 mb-4 input-flamber"
              placeholder="Confirm password"
            />
          </div>

          <div className="d-flex flex-column">
            <button className="f-button-primary border-0 fs-5 p-2 mt-5 px-5 rounded-2 mb-2">
              Confirm
            </button>
          </div>

          <div className="d-flex justify-content-center">
            <p className="text-color-gray">Changed your mind?</p>
            <a
              href="#"
              className="text-color-primary text-decoration-none fw-medium ms-2"
            >
              Go back!
            </a>
          </div>
        </form>
      </section>

      <div className="mt-5 pt-5 bottom-center">All rights reserved Flember</div>
    </div>
  );
};
