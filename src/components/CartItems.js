import React from "react";
import * as Bs from "react-icons/bs";
import * as Fa from "react-icons/fa";

const CartItems = ({ item }) => {
  const containerStyle = {
    backgroundImage: `url(${item.imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "30px",
  };

  return (
    <div className="item d-flex bg-body custom-shadow position-relative p-2 pb-0 rounded-3 justify-content-between mb-3">
      <div className="d-flex ">
        <div
          className=" d-flex background-container rounded-3 justify-content-end mb-2"
          style={containerStyle}
        ></div>
        <div className="ms-3">
          <div className="text-color-theme d-flex flex-column text-overflow">
            <div>{item.title}</div>
            <div className="d-flex mt-2">
              <div className="d-flex text-color-theme d-flex justify-content-between ">
                <div className="z-1 d-flex align-items-center flamber-gradient-2 rounded-circle p-2 fw-bold   custom-shadow">
                  <Fa.FaMinus size="10" />
                </div>
                <div className="d-flex align-items-center fw-bold mx-2">1</div>
                <div className="z-1 d-flex align-items-center flamber-gradient-2 rounded-circle p-2 fw-bold  custom-shadow">
                  <Fa.FaPlus size="10" />
                </div>
              </div>
              <div className=" fw-semibold ms-4">$ {item.price}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="align-items-end">
        <Fa.FaTimes />
      </div>
    </div>
  );
};

export default CartItems;
