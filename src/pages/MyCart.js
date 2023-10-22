import React from "react";
import * as Hi from "react-icons/hi";
import * as Io from "react-icons/io";
import SettingProfilePng from "../assets/images/SettingsProfile.png";
import CartItems from "../components/CartItems";

export const MyCart = () => {
  const items = [
    {
      id: 1,
      title: "Margherita",
      price: 7.5,
      description: "Tomato sauce, mozzarella, basil...",
      review: 4.6,
      imageUrl: "https://i.ibb.co/54Kqdvr/placeholder.png",
    },
    {
      id: 2,
      title: "Bolognese",
      price: 8,
      description: "Tomato purée, beef, basil...",
      review: 4.6,
      imageUrl: "https://i.ibb.co/54Kqdvr/placeholder.png",
    },
    {
      id: 3,
      title: "Another Item",
      price: 9,
      description: "Another item description...",
      review: 4.8,
      imageUrl: "https://i.ibb.co/54Kqdvr/placeholder.png",
    },
    {
      id: 3,
      title: "Another Item",
      price: 9,
      description: "Another item description...",
      review: 4.8,
      imageUrl: "https://i.ibb.co/54Kqdvr/placeholder.png",
    },
    {
      id: 3,
      title: "Another Item",
      price: 9,
      description: "Another item description...",
      review: 4.8,
      imageUrl: "https://i.ibb.co/54Kqdvr/placeholder.png",
    },
    {
      id: 3,
      title: "Another Item",
      price: 9,
      description: "Another item description...",
      review: 4.8,
      imageUrl: "https://i.ibb.co/54Kqdvr/placeholder.png",
    },
    {
      id: 3,
      title: "Another Item",
      price: 9,
      description: "Another item description...",
      review: 4.8,
      imageUrl: "https://i.ibb.co/54Kqdvr/placeholder.png",
    },
    {
      id: 3,
      title: "Another Item",
      price: 9,
      description: "Another item description...",
      review: 4.8,
      imageUrl: "https://i.ibb.co/54Kqdvr/placeholder.png",
    },
  ];

  return (
    <div className="mx-4">
      <div className="text-color-primary d-flex align-items-center justify-content-between mt-3 pt-5">
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

      <div className="text-color-theme">
        <div className="text-color-theme flamber-gradient-2 rounded-4 py-2 px-3 mt-5 mx-4">
          <div className="d-flex fs-5 fw-semibold justify-content-between">
            <div>Specifications</div>
            <div>
              <Io.IoIosArrowForward />
            </div>
          </div>
          <div className="ms-1 fs-custom-small">
            Location, alergies, cutlary
          </div>
        </div>

        <div className="mt-4 fs-2 text-color-theme">Your Items</div>

        <div className="mx-3 pb-5 " style={{ marginBottom: "260px" }}>
          <div>
            <div className="d-flex flex-column  mt-3 mb-2">
              {items.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className=" w-100 position-fixed sticky-bottom">
          <div className="me-5">
            <div className="d-flex mb-3 mx-3 rounded-3 align-items-center justify-content-between bg-body custom-shadow px-3 py-3">
              <div className="fs-5">Promo Code</div>
              <div className="z-1 flamber-gradient-2 rounded-2 px-3 py-2 fs-5">
                Apply
              </div>
            </div>

            <div className="bg-body custom-shadow p-3 mx-3  rounded-3">
              <div className="d-flex justify-content-between">
                <div>Cart totall:</div>
                <div>$ 40.59</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Delivery:</div>
                <div>$ 40.59</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Promo discount:</div>
                <div>-$ 0.00</div>
              </div>

              <div className="my-2 selector-line"></div>

              <div className="d-flex justify-content-between ">
                <div>Totall:</div>
                <div>$ 40.59</div>
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
