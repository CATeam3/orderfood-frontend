import React from "react";
import Select from "react-select";
import * as Ai from "react-icons/ai";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#2C2C2C",
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

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export const SearchBar = () => {
  return (
    <div className="d-flex align-items-center search-bar rounded-2 ps-4 pe-1 py-1">
      <Ai.AiOutlineSearch className="text-color-theme" />
      <div className="w-100 ">
        <Select
          options={options}
          styles={customStyles}
          style={{ color: "white" }}
          placeholder="Search"
        />
      </div>
    </div>
  );
};
