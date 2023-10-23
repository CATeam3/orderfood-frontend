import React, { useState } from "react";
import * as Rx from "react-icons/rx";
import * as Fa from "react-icons/fa";
import ProfilePng from "../assets/images/Profile.png";
import * as Hi from "react-icons/hi";
import { SearchBar } from "../components/SearchBar";
import MenuItem from "../components/MenuItem";
import * as Bs from "react-icons/bs";
import Modal from "react-modal";
import items from "../assets/items.json";
import { useNavigate } from "react-router-dom";
import * as Bi from "react-icons/bi";
import { useIDContext } from "../components/IDContext";
import { Col, Container, Row } from "react-bootstrap";

export const HomeMenu = () => {
  const { totalCost } = useIDContext();
  const navigate = useNavigate();

  const [searchedItem, setSearchedItem] = useState("");

  const search = "";
  const goProfile = () => {
    navigate("/profile");
  };

  const goSettings = () => {
    navigate("/settings");
  };

  const goCart = () => {
    navigate("/my-cart");
  };

  const splitArray = (array) => {
    const middleIndex = Math.ceil(array.length / 2);
    const firstRow = array.slice(0, middleIndex);
    const secondRow = array.slice(middleIndex);
    return [firstRow, secondRow];
  };

  const [firstRow, secondRow] = splitArray(items);

  const handleSearchedItem = (data) => {
    setSearchedItem(data);
    console.log(data);
  };

  return (
    <div>
      <div className="flamber-gradient-2 px-4 py-5 d-md-none">
        <div className="text-white my-3 d-flex justify-content-between align-items-center  ">
          <div>
            <Bi.BiCog size="40" onClick={goSettings} />
          </div>
          <div className="fs-3 fw-medium">Flamber</div>
          <div>
            <Fa.FaUserAlt size="35" onClick={goProfile} />
          </div>
        </div>
      </div>

      <div className="text-white flamber-gradient-2 px-4 py-5 d-none d-md-block">
        <div className="my-3 d-flex justify-content-between align-items-center">
          <div className="d-none d-lg-block"></div>
          <div className="fs-3 fw-medium">Flamber</div>
          <div>
            <Rx.RxHamburgerMenu size="35" onClick={goProfile} />
          </div>
        </div>
      </div>

      <div className="d-flex">
        <Col sm={0} md={3} lg={4}></Col>
        <Col sm={12} md={6} lg={4}>
          <div className="d-flex align-items-center justify-content-between bg-body move-up mx-5 p-3 rounded-2 shadow">
            <div className="text-color-theme">
              <div className="text-dark-emphasis fs-6">My Cart</div>
              <div className="text-color-theme fs-6">Total: ${totalCost}</div>
            </div>
            <div className="d-flex">
              <button
                className="f-button-primary border-0 fs-6 p-1 px-4 rounded-2 me-2"
                onClick={goCart}
              >
                Go
                <Hi.HiArrowRight className="ms-2 " />
              </button>
            </div>
          </div>
        </Col>
        <Col sm={0} md={3} lg={4}></Col>
      </div>

      <div>
        <Row className=" d-none d-md-flex">
          <Col sm={3} md={3} lg={3}></Col>
          <Col sm={6} md={6} lg={6}>
            <div className="text-color-theme fs-3 fw-medium mb-3 mx-4">
              Hello User
            </div>
            <div className="mx-4 custom-search-bar custom-shadow ">
              <SearchBar
                sendSearchTerm={handleSearchedItem}
                className=" custom-search-bar-in"
              />
            </div>
          </Col>
          <Col sm={3} md={3} lg={3}></Col>
        </Row>

        <div className=" d-md-none d-block">
          <div className="text-color-theme fs-3 fw-medium mb-3 mx-4">
            Hello User
          </div>
          <div className="mx-4 custom-search-bar custom-shadow ">
            <SearchBar className=" custom-search-bar-in" />
          </div>
        </div>

        <div className="d-flex flex-column mt-3 mx-2 justify-content-center">
          <div className="d-flex">
            <div className="d-flex flex-column ms-4 mx-3 mt-2 mb-2">
              {firstRow
                .filter((item) => {
                  return searchedItem.toLowerCase() === ""
                    ? item
                    : item.title.toLowerCase().includes(searchedItem);
                })
                .map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
            </div>
            <div className="d-flex flex-column mx-2 me-4 mt-2 mb-2">
              {secondRow
                .filter((item) => {
                  return searchedItem.toLowerCase() === ""
                    ? item
                    : item.title.toLowerCase().includes(searchedItem);
                })
                .map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
