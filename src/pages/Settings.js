import React, { useState } from "react";
import Modal from "react-modal";
import * as Io from "react-icons/io";
import * as Hi from "react-icons/hi";
import * as Fa6 from "react-icons/fa6";
import * as Bs from "react-icons/bs";
import SettingProfilePng from "../assets/images/SettingsProfile.png";
import { ThemeToggle } from "../components/ThemeToggle";

export const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flamber-gradient">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="bg-body text-center p-4 mx-3 mt-40p pt-5"
      >
        <Bs.BsDoorOpenFill size="170" className="text-color-primary my-5 " />
        <div className="fs-1 fw-semibold mb-4">
          Are you certain you want <br /> to Log Out?
        </div>
        <div className="d-flex flex-column">
          <button className="f-button-primary border-0 fs-5 p-2 mb-3 px-5 rounded-2">
            No, Just Kidding
          </button>
        </div>
        <div className="d-flex flex-column">
          <button className="f-button-secondery border-0 fs-5 p-2  px-5 rounded-2">
            Yes, Log Out
          </button>
        </div>
      </Modal>

      <div className="mx-4">
        <div className="d-flex align-items-center justify-content-between mt-3 pt-5">
          <div>
            <Hi.HiOutlineArrowLeft size="40" />
          </div>
          <div className="fs-3 fw-semibold">Settings</div>
          <div>
            <img
              src={SettingProfilePng}
              className=" rounded-circle"
              style={{ width: "40px" }}
            />
          </div>
        </div>

        <div className="mt-5 pt-4 ">
          <div className="d-flex justify-content-between settings-options  ps-3 rounded-2 mb-3">
            <div className="fs-3 fw-semibold">Edit account</div>
            <div>
              <Io.IoIosArrowForward size="40" />
            </div>
          </div>

          <div className="d-flex justify-content-between settings-options  ps-3 rounded-2 mb-3">
            <div className="fs-3 fw-semibold">Language?</div>
            <div className="d-flex align-items-center">
              <div>English</div>
              <div>
                <Io.IoIosArrowForward size="40" />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between settings-options  ps-3 rounded-2 mb-3">
            <div className="fs-3 fw-semibold">Privacy</div>
            <div>
              <Io.IoIosArrowForward size="40" />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mx-2">
          <div className="fs-3">Theme</div>

          <div>
            <ThemeToggle />
          </div>
        </div>

        <div
          className="d-flex justify-content-between align-items-center mx-2 mt-4"
          onClick={openModal}
        >
          <div className="fs-6 ">Log Out</div>
          <div>
            <Fa6.FaArrowRightFromBracket size="20" />
          </div>
        </div>

        <div className="mt-5 pt-5 bottom-center fw-medium">
          All rights reserved Flember
        </div>
      </div>
    </div>
  );
};
