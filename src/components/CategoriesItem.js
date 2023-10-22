import React from "react";

const MenuItem = ({ item }) => {
  const containerStyle = {
    backgroundImage: `url(${item.imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "150px",
    position: "relative",
  };

  return (
    <div>
      <div className="me-3" style={{ width: "150px" }}>
        <div
          className="item menu-item  d-flex rounded-3 background-container rounded-3 text-center"
          style={containerStyle}
        >
          <div className="overlay rounded-3"></div>
          <div className="fs-2 text-overflow text-color-theme z-1 rounded-5 p-1 fw-semibold my-4 mx-2">
            {item.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
