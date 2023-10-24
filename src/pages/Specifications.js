import React, { useState } from "react";
import * as Hi from "react-icons/hi";
import * as Io from "react-icons/io";
import SettingProfilePng from "../assets/images/SettingsProfile.png";
import { MapMenu } from "../components/MapMenu";
import { useNavigate } from "react-router-dom";
import * as Fa from "react-icons/fa";

export const Specifications = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goProfile = () => {
    navigate("/profile");
  };

  const goCart = () => {
    navigate("/cart");
  };

  return (
    <div className="mx-4">
      <div className="text-color-primary d-flex align-items-center justify-content-between mt-3 pt-5">
        <div>
          <Hi.HiOutlineArrowLeft size="40" onClick={goBack} />
        </div>
        <div className="fs-3 fw-semibold">Specifications</div>
        <div>
          <Fa.FaUserAlt size="35" onClick={goProfile} />
        </div>
      </div>

      <div className="text-color-theme">
        <div
          className="text-color-theme flamber-gradient-2 rounded-4 py-2 px-3 mt-5 mx-4"
          onClick={goCart}
        >
          <div className="d-flex fs-5 fw-semibold justify-content-between">
            <div>My Cart</div>
            <div>
              <Io.IoIosArrowForward />
            </div>
          </div>
          <div className="ms-1 fs-custom-small">Items, promo code, price</div>
        </div>

        <div className="mx-3">
          <div className="mt-5 pt-2">
            <MapMenu />
          </div>
        </div>

        <div className=" w-100 position-fixed sticky-bottom">
          <div className="me-5">
            <div className="d-flex mb-3 mx-3 rounded-3 align-items-center justify-content-between bg-body custom-shadow px-3 py-3">
              <div className="fs-5">Cutlery</div>
              <div className="text-start">
                <label className="custom-checkbox2 text-color-theme">
                  <input type="checkbox" />
                  <span className="checkmark2"></span>
                </label>
              </div>
            </div>

            <div className="bg-body custom-shadow p-3 mx-3  rounded-3">
              <div className="d-flex flex-column justify-content-between">
                <div>Allergies</div>
                <div className="mt-2">
                  <textarea
                    placeholder="Allergies, dislikes..."
                    className="w-100 rounded-3 p-2"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column">
              <button className="f-button-primary border-0 fs-5 p-2 px-5 rounded-2 mb-2">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
