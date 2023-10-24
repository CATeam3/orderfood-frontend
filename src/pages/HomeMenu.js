import React, { useEffect, useState } from "react";
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

import ApiRequest from "../classes/ApiRequest";
import * as Ai from "react-icons/ai";

export const HomeMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { totalCost } = useIDContext();
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [searchedItem, setSearchedItem] = useState("");

  const search = "";
  const goProfile = () => {
    navigate("/profile");
  };

  const goSettings = () => {
    navigate("/settings");
  };

  const goCart = () => {
    navigate("/cart");
  };

  const [menus, setMenus] = useState(null);

  useEffect(() => {
    const apiRequest = new ApiRequest(
      "GET",
      `${process.env.REACT_APP_API_URL}/api/menu`,
    );
    apiRequest
      .sendRequest()
      .then((result) => setMenus(() => JSON.parse(result).data))
      .catch((error) => console.log("Error@ForumsPage", error));
  }, []);

  const handleSearchedItem = (data) => {
    setSearchedItem(data);
    console.log(data);
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="fs-4 home-modal d-flex custom-shadow"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0)",
          },
        }}
      >
        <div className="bg-body">
          <div className="hover-select curser-p  p-2" onClick={goProfile}>
            Profile
          </div>
          <div className="hover-select curser-p  p-2" onClick={goSettings}>
            Settings
          </div>
        </div>
      </Modal>

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
            <Rx.RxHamburgerMenu size="35" onClick={openModal} />
          </div>
        </div>
      </div>

      <div className="d-md-flex d-none w-100">
        <Col md={3} lg={4}></Col>
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

      <div className="d-block d-md-none">
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
      </div>

      <div>
        <Row className=" d-none d-md-flex w-100">
          <Col sm={3} md={3} lg={3}></Col>
          <Col sm={6} md={6} lg={6}>
            <div className="text-color-theme fs-3 fw-medium mb-3 mx-4">
              Hello User
            </div>
            <div className="mx-4 custom-search-bar custom-shadow d-flex rounded-3">
              <Ai.AiOutlineSearch className="text-color-theme fs-1 " />
              <input
                placeholder="Search..."
                type="text"
                onInput={(e) => setSearchedItem(e.target.value)}
                className="w-100 bg-transparent"
              />
            </div>
          </Col>
          <Col sm={3} md={3} lg={3}></Col>
        </Row>

        <div className=" d-md-none d-block">
          <div className="text-color-theme fs-3 fw-medium mb-3 mx-4">
            Hello User
          </div>
          <div className="mx-4 custom-search-bar custom-shadow d-flex rounded-3">
            <Ai.AiOutlineSearch className="text-color-theme fs-1 " />
            <input
              placeholder="Search..."
              type="text"
              onInput={(e) => setSearchedItem(e.target.value)}
              className="w-100 bg-transparent"
            />
          </div>
        </div>

        <div className="row mt-5 mb-4 row-gap-2">
          {menus?.map((menu) => (
            <div
              key={menu.id}
              className="col-lg-4 mb-3 d-flex align-items-stretch"
            >
              <MenuItem key={menu.id} data={menu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
