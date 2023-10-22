import React from "react";
import * as Bs from "react-icons/bs";

const MenuItem = ({ item }) => {
  const containerStyle = {
    backgroundImage: `url(${item.imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingBottom: "70px", // You can adjust the padding value as needed
    width: "130px",
  };

  return (
    <div
      className="item  bg-body menu-item me-4 position-relative p-2 rounded-3 "
      style={{ width: "150px" }}
    >
      <div
        className="d-flex background-container rounded-3 justify-content-end mb-2"
        style={containerStyle}
      >
        <div className="text-color-theme z-1 rounded-5 flamber-gradient-2 p-1 fs-custom-tiny fw-semibold mt-1 me-1">
          ★ {item.review}
        </div>
      </div>

      <div className="text-color-theme d-flex flex-column text-overflow">
        <div>{item.title}</div>
        <div className="fs-custom-tiny mb-3 pb-2 text-overflow">
          {item.description}
        </div>
        <div className="position-absolute bottom-left fs-custom-small mb-2 ms-2">
          $ {item.price}
        </div>

        <div className="py-1 z-1 rounded-circle px-1 flamber-gradient-2 position-absolute bottom-right fs-custom-small mb-2 me-2">
          <Bs.BsPlusLg size="20" />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
