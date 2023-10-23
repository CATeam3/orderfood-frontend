import React, { useState, lazy, Suspense } from "react";
import * as Bs from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IDContextProvider, useIDContext } from "./IDContext";

const MenuItem = ({ data }) => {
  const navigator = useNavigate();

  return (
    <div className="card">
      <img src={data.picture} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description}</p>
        <a
          style={{ borderRadius: 100, height: 30, width: 30, padding: 0 }}
          className={"btn flamber-gradient-2 float-end"}
        >
          <Bs.BsPlusLg size="20" />
        </a>
      </div>
    </div>
  );
};

export default MenuItem;
