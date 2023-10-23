// SearchBar.js

import React, { useState } from "react";
import Select from "react-select";
import * as Ai from "react-icons/ai";
import items from "../assets/items.json";
import MenuItem from "./MenuItem";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "rgba(44,44,44,0)",
    border: 0,
    boxShadow: "none",
  }),
  indicatorSeparator: () => {},
  dropdownIndicator: (provided) => ({
    ...provided,
    display: "none", // Hide the down arrow
  }),
  input: (provided, state) => ({
    ...provided,
    color: "white", // Set the input text color to white
  }),
};

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // Transform your items data into the expected format
  const options = items.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  // Filter items based on the search term
  const filteredItems = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="d-flex align-items-center search-bar rounded-2 ps-4 pe-1 py-1">
      <Ai.AiOutlineSearch className="text-color-theme" />
      <div className="w-100">
        <Select
          options={filteredItems}
          styles={customStyles}
          style={{ color: "white" }}
          placeholder="Search"
          onInputChange={(inputValue) => setSearchTerm(inputValue)}
        />
      </div>
    </div>
  );
};
