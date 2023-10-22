import React, { useEffect, useState } from "react";
import * as Hi from "react-icons/hi";
import * as Io from "react-icons/io";
import SettingProfilePng from "../assets/images/SettingsProfile.png";
import CartItems from "../components/CartItems";
import { useNavigate } from "react-router-dom";
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";
import Modal from "react-modal";
import items from "../assets/items.json";
import { IDContextProvider, useIDContext } from "../components/IDContext";

export const MyCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { idArray } = useIDContext(); // Get idArray from the context
  const { updateMoneyAmount } = useIDContext();

  const goBack = () => {
    navigate(-1);
  };

  const goProfile = () => {
    navigate("/profile");
  };
  const goSpecific = () => {
    navigate("/specifications");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Filter items based on the IDs in idArray
  const filteredItems = items.filter((item) => idArray.includes(item.id));

  const totalCost = filteredItems.reduce((acc, item) => acc + item.price, 0);

  const deliveryAmount = totalCost * 0.2;

  const fullPrice = totalCost + deliveryAmount;

  useEffect(() => {
    updateMoneyAmount(totalCost);
  }, [idArray]);

  return (
    <div className="mx-4">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="z-2 bg-body text-center p-4 mx-3 mt-40p pt-5 rounded-3"
      >
        <input type="date" className="w-100 py-2 mb-3" />
        <div className="d-flex flex-column">
          <button
            className="f-button-primary border-0 fs-5 p-2 mb-3 px-5 rounded-2"
            onClick={closeModal}
          >
            Finish
          </button>
        </div>
      </Modal>

      <div className="text-color-primary d-flex align-items-center justify-content-between mt-3 pt-5">
        <div>
          <Hi.HiOutlineArrowLeft size="40" onClick={goBack} />
        </div>
        <div className="fs-3 fw-semibold">Settings</div>
        <div>
          <Fa.FaUserAlt size="35" onClick={goProfile} />
        </div>
      </div>

      <div className="text-color-theme">
        <div
          className="text-color-theme flamber-gradient-2 rounded-4 py-2 px-3 mt-5 mx-4"
          onClick={goSpecific}
        >
          <div className="d-flex fs-5 fw-semibold justify-content between">
            <div>Specifications</div>
            <div>
              <Io.IoIosArrowForward />
            </div>
          </div>
          <div className="ms-1 fs-custom-small">
            Location, allergies, cutlery
          </div>
        </div>

        <div className="mt-4 fs-2 text-color-theme">Your Items</div>

        <div className="mx-3 pb-5 " style={{ marginBottom: "260px" }}>
          <div>
            <div className="d-flex flex-column  mt-3 mb-2">
              {filteredItems.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className=" w-100 position-fixed sticky-bottom">
          <div className="me-5">
            <div
              className="d-flex mb-3 mx-3 rounded-3 align-items-center justify-content-between bg-body custom-shadow px-3 py-3"
              onClick={openModal}
            >
              <div className="fs-5">Delivery date</div>
              <div className="z-0 flamber-gradient-2 rounded-2 px-3 pb-3 py-2 fs-5 align-items-center">
                <Bs.BsFillCalendarWeekFill />
              </div>
            </div>

            <div className="bg-body custom-shadow p-3 mx-3  rounded-3">
              <div className="d-flex justify-content-between">
                <div>Cart total:</div>
                <div>$ {totalCost}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Delivery:</div>
                <div>$ {deliveryAmount}</div>
              </div>

              <div className="my-2 selector-line"></div>

              <div className="d-flex justify-content-between ">
                <div>Total:</div>
                <div>$ {fullPrice}</div>
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
