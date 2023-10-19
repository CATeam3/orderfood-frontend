import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import ProfilePng from "../assets/images/Profile.png";

export const Profile = () => {
  return (
    <div className="flamber-gradient">
      <div className="bg-circle bg-body"></div>

      <div className="mx-4">
        <div className="d-flex align-items-center justify-content-between mt-3 pt-5">
          <div>
            <Unicons.UilArrowLeft size="40" />
          </div>
          <div className="fs-3 fw-semibold">Profile</div>
          <div>
            <Unicons.UilCog size="40" />
          </div>
        </div>

        <div>
          <img
            src={ProfilePng}
            className=" rounded-circle mt-5"
            style={{ width: "170px" }}
          />
        </div>

        <div className="text-color-primary fs-2 mt-4 pt-3 mb-5 pb-2">
          Name Lastname
        </div>

        <div>
          <div>
            <div className="text-color-theme d-flex justify-content-center">
              <div className="px-2 mx-1 bottom-border-color-primary">Info</div>
              <div className="px-2 mx-1">Favorite</div>
            </div>
            <div className="selector-line  rounded-5"></div>
          </div>

          <div className="mt-4 pt-3">
            <div className="d-flex flex-column info-bg rounded-2 mx-4 text-start p-2 px-3 mb-3">
              <div className="mb-1 text-color-primary fw-medium">Name:</div>
              <div className="">Name Lastname</div>
            </div>

            <div className="d-flex flex-column info-bg rounded-2 mx-4 text-start p-2 px-3 mb-3">
              <div className="mb-1 text-color-primary fw-medium">Adress:</div>
              <div className="">Adress</div>
            </div>

            <div className="d-flex flex-column info-bg rounded-2 mx-4 text-start p-2 px-3 mb-3">
              <div className="mb-1 text-color-primary fw-medium">Email:</div>
              <div className="">user@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-5 bottom-center text-color-theme">
          All rights reserved Flember
        </div>
      </div>
    </div>
  );
};
