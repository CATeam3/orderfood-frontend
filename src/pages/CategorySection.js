import React from "react";
import * as Tb from "react-icons/tb";
import ProfilePng from "../assets/images/Profile.png";
import * as Hi from "react-icons/hi";
import { SearchBar } from "../components/SearchBar";
import SectionItem from "../components/SectionItem";

export const CategorySection = () => {
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
  ];

  const splitArray = (array) => {
    const middleIndex = Math.ceil(array.length / 2);
    const firstRow = array.slice(0, middleIndex);
    const secondRow = array.slice(middleIndex);
    return [firstRow, secondRow];
  };

  const [firstRow, secondRow] = splitArray(items);

  return (
    <div>
      <div className="flamber-gradient-2 px-4 py-5">
        <div className="my-3 d-flex justify-content-between align-items-center">
          <div>
            <Tb.TbAlignLeft size="50" />
          </div>
          <div className="fs-3 fw-medium">Categories</div>
          <div>
            <img src={ProfilePng} style={{ width: "40px" }} alt="Profile" />
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between bg-body move-up mx-5 p-3 rounded-2 shadow">
        <div className="text-color-theme">
          <div className="text-dark-emphasis fs-6">My Cart</div>
          <div className="text-color-theme fs-6">Total: $0.00</div>
        </div>
        <div className="d-flex">
          <button className="f-button-primary border-0 fs-6 p-1 px-4 rounded-2 me-2">
            Go
            <Hi.HiArrowRight className="ms-2 me-" />
          </button>
        </div>
      </div>

      <div>
        <div className="text-color-theme fs-3 fw-medium mb-3 mx-4">
          What are you ordering today?
        </div>
        <div className="mx-4">
          <SearchBar />
        </div>

        <div className="d-flex flex-column mt-3 mx-2 justify-content-center">
          <div className="d-flex">
            <div className="d-flex flex-column mx-4 mt-2 mb-2">
              {firstRow.map((item) => (
                <SectionItem key={item.id} item={item} />
              ))}
            </div>
            <div className="d-flex flex-column mx-2 mt-2 mb-2">
              {secondRow.map((item) => (
                <SectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fw-medium w-100 pb-4 mt-5 pt-4 position-fixed sticky-bottom text-center flamber-gradient-2">
        All rights reserved Flamber
      </div>
    </div>
  );
};
