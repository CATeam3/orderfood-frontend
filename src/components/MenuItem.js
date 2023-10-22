import React, { useState, lazy, Suspense } from "react";
import * as Bs from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IDContextProvider, useIDContext } from "./IDContext";

const MenuItem = ({ item }) => {
  const navigator = useNavigate();
  const { addID } = useIDContext();

  const containerStyle = {
    backgroundImage: `url(${item.imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingBottom: "70px", // You can adjust the padding value as needed
    width: "130px",
  };

  const OpenItem = () => {
    localStorage.setItem("viewing", item.id);
    console.log(item.id);
    navigator("/item-view");
  };

  const handleAddToCart = () => {
    console.log("added");
    addID(item.id);
  };

  return (
    <div
      className="item  bg-body menu-item me-4 position-relative p-2 rounded-3 mb-3"
      style={{ width: "150px" }}
    >
      <div
        className="d-flex background-container rounded-3 justify-content-end mb-2"
        style={containerStyle}
        onClick={OpenItem}
      >
        <div className=" z-0 rounded-5 flamber-gradient-2 p-1 fs-custom-tiny fw-semibold mt-1 me-1">
          ★ {item.review}
        </div>
      </div>

      <div className=" d-flex flex-column text-overflow">
        <div onClick={OpenItem} className="text-color-theme">
          {item.title}
        </div>
        <div
          className="text-color-theme fs-custom-tiny mb-4 pb-2 text-overflow"
          onClick={OpenItem}
        >
          {item.description}
        </div>
        <div className="position-absolute bottom-left fs-custom-small mb-2 ms-2 text-color-theme">
          $ {item.price}
        </div>

        <div onClick={handleAddToCart}>
          <div className="py-1 z-0 rounded-circle px-1 flamber-gradient-2 position-absolute bottom-right fs-custom-small mb-2 me-2">
            <Bs.BsPlusLg size="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
