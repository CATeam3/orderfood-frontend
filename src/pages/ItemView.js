import React, { useState } from "react";
import items from "../assets/items.json";
import * as Hi from "react-icons/hi";
import * as Ai from "react-icons/ai";
import Money from "../assets/images/Symbols/MoneySymbol.svg";
import Time from "../assets/images/Symbols/TimeSymbol.svg";
import Star from "../assets/images/Symbols/StarSymbol.svg";
import NoStar from "../assets/images/Symbols/EmptyStarSymbol.svg";
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useIDContext } from "../components/IDContext";

export const ItemView = () => {
  const { addID } = useIDContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [mealSize, setMealSize] = useState("small");
  const [mealCount, setMealCount] = useState(1);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const viewingId = parseInt(localStorage.getItem("viewing"), 10); // Parse the value as an integer
  const itemWithId1 = items.find((item) => item.id === viewingId);

  if (!itemWithId1) {
    return null; // Handle the case when item with id 1 is not found
  }

  const { imageUrl, title, price, description, review, WaitTime, reviewCount } =
    itemWithId1;

  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    maxHeight: "45vh",
  };

  const handleMinusClick = () => {
    if (mealCount > 1) {
      setMealCount(mealCount - 1);
    }
  };

  const handlePlusClick = () => {
    setMealCount(mealCount + 1);
  };

  const AddToCart = () => {
    addID(viewingId);
    console.log(viewingId);
  };

  return (
    <div className="user-select-none">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="bg-body text-center p-4 mx-3 mt-40p pt-5 rounded-5"
      >
        <div className="d-flex justify-content-center mb-5 ">
          <img
            className="mx-2"
            style={{ width: "50px" }}
            src={starRating > 0 ? Star : NoStar}
            alt="Star"
            onClick={() => setStarRating(1)}
          />
          <img
            className="mx-2"
            style={{ width: "50px" }}
            src={starRating > 1 ? Star : NoStar}
            alt="Star"
            onClick={() => setStarRating(2)}
          />
          <img
            className="mx-2"
            style={{ width: "50px" }}
            src={starRating > 2 ? Star : NoStar}
            alt="Star"
            onClick={() => setStarRating(3)}
          />
          <img
            className="mx-2"
            style={{ width: "50px" }}
            src={starRating > 3 ? Star : NoStar}
            alt="Star"
            onClick={() => setStarRating(4)}
          />
          <img
            className="mx-2"
            style={{ width: "50px" }}
            src={starRating > 4 ? Star : NoStar}
            alt="Star"
            onClick={() => setStarRating(5)}
          />
        </div>

        <div className="d-flex flex-column">
          <button
            className="f-button-primary border-0 fs-5 p-2 mb-3 px-5 rounded-2"
            onClick={closeModal}
          >
            Review
          </button>
        </div>
      </Modal>
      <div className="ItemImage" style={containerStyle}>
        <div className="mx-4 mt-5 pt-3 text-color-theme d-flex ItemImageContent justify-content-between">
          <div onClick={goBack}>
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
          <div className="d-flex ">
            <img src={Money} />
            <div className="fs-4 ms-1">{price}</div>
          </div>
        </div>

        <div className="text-color-theme d-flex justify-content-between mx-5">
          <div className="d-flex" onClick={openModal}>
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
          <div
            className={`rounded-5 py-2 px-4 custom-shadow ${
              mealSize === "small" ? "flamber-gradient-2" : "bg-body"
            }`}
            onClick={() => setMealSize("small")}
          >
            Small
          </div>

          <div
            className={`rounded-5 py-2 px-4 custom-shadow ${
              mealSize === "medium" ? "flamber-gradient-2" : "bg-body"
            }`}
            onClick={() => setMealSize("medium")}
          >
            Medium
          </div>
          <div
            className={`rounded-5 py-2 px-4 custom-shadow ${
              mealSize === "large" ? "flamber-gradient-2" : "bg-body"
            }`}
            onClick={() => setMealSize("large")}
          >
            Large
          </div>
        </div>

        <div className="text-color-theme d-flex justify-content-between mx-5 mt-5">
          <div onClick={handleMinusClick}>
            <div className="d-flex align-items-center flamber-gradient-2 rounded-circle p-3 fw-bold fs-1  custom-shadow">
              <Fa.FaMinus size="20" />
            </div>
          </div>
          <div className="d-flex align-items-center fs-1 fw-bold">
            {mealCount}
          </div>
          <div onClick={handlePlusClick}>
            <div className="d-flex align-items-center flamber-gradient-2 rounded-circle p-3 fw-bold fs-1 custom-shadow">
              <Fa.FaPlus size="20" />
            </div>
          </div>
        </div>

        <div>
          <div className="d-flex py-2 px-3 mt-4 justify-content-between bg-white custom-shadow rounded-2 fs-5">
            <div>Totall:</div>
            <div>0.00</div>
          </div>

          <div
            className="justify-content-between text-color-theme d-flex align-items-center flamber-gradient-2 py-2 px-3 mt-2 rounded-2 fs-5 custom-shadow "
            onClick={() => {
              AddToCart();
              goBack();
            }}
          >
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
