import React from "react";
import items from "../assets/items.json";
import * as Hi from "react-icons/hi";
import * as Ai from "react-icons/ai";
import Money from "../assets/images/Symbols/MoneySymbol.svg";
import Time from "../assets/images/Symbols/TimeSymbol.svg";
import Star from "../assets/images/Symbols/StarSymbol.svg";
import * as Fa from "react-icons/fa";

export const ItemView = () => {
  const itemWithId1 = items.find((item) => item.id === 1);

  if (!itemWithId1) {
    return null; // Handle the case when item with id 1 is not found
  }

  const { imageUrl, title, price, description, review, WaitTime, reviewCount } =
    itemWithId1;

  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingBottom: "100%",
  };

  return (
    <div>
      <div className="ItemImage" style={containerStyle}>
        <div className="mx-4 mt-5 pt-3 text-color-theme d-flex ItemImageContent justify-content-between">
          <div>
            <Hi.HiArrowLeft size="40" />
          </div>
          <div>
            <Ai.AiOutlineHeart size="40" />
          </div>
        </div>
      </div>

      <div className="bg-body cover-div"></div>

      <div className="move-up-2 px-4">
        <div className="text-color-theme d-flex justify-content-between align-items-center mb-4">
          <div className="fs-1">{title}</div>
          <div className="d-flex">
            <img src={Money} />
            <div className="fs-4 ms-2">${price}</div>
          </div>
        </div>

        <div className="text-color-theme d-flex justify-content-between mx-5">
          <div className="d-flex">
            <img src={Star} />
            <div className="d-flex ms-2">
              <div>{review}</div>
              <div className="text-dark-emphasis ms-1">({reviewCount})</div>
            </div>
          </div>

          <div className="text-color-theme d-flex ">
            <img src={Time} />
            <div className="d-flex ms-2">
              <div>{WaitTime} </div>
              <div className="text-dark-emphasis ms-1">min</div>
            </div>
          </div>
        </div>

        <div className="text-color-theme mt-4">
          <div className="fw-bold">Description:</div>
          <div className="description-container">
            <div className="fs-custom-small description-text mx-3 mt-2">
              {description}
            </div>
          </div>
        </div>

        <div className="text-color-theme d-flex justify-content-between mx-3 mt-4">
          <div className="flamber-gradient-2 rounded-5 py-2 px-4 custom-shadow">
            Small
          </div>
          <div className="flamber-gradient-2 rounded-5 py-2 px-4  custom-shadow">
            Medium
          </div>
          <div className="flamber-gradient-2 rounded-5 py-2 px-4  custom-shadow">
            Large
          </div>
        </div>

        <div className="text-color-theme d-flex justify-content-between mx-5 mt-5">
          <div className="d-flex align-items-center flamber-gradient-2 rounded-circle p-3 fw-bold fs-1  custom-shadow">
            <Fa.FaMinus size="20" />
          </div>
          <div className="d-flex align-items-center fs-1 fw-bold">1</div>
          <div className="d-flex align-items-center flamber-gradient-2 rounded-circle p-3 fw-bold fs-1 custom-shadow">
            <Fa.FaPlus size="20" />
          </div>
        </div>

        <div>
          <div className="d-flex py-2 px-3 mt-4 justify-content-between bg-white custom-shadow rounded-2 fs-5">
            <div>Totall:</div>
            <div>0.00</div>
          </div>

          <div className="justify-content-between text-color-theme d-flex align-items-center flamber-gradient-2 py-2 px-3 mt-2 rounded-2 fs-5 custom-shadow ">
            <div>Add to cart</div>
            <div className="d-flex align-items-center">
              <div>|</div>
              <div className="ms-5">$ 3.5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
