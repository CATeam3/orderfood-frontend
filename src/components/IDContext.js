import React, { createContext, useContext, useEffect, useState } from "react";
import items from "../assets/items.json";

const IDContext = createContext();

export const useIDContext = () => useContext(IDContext);

export const IDContextProvider = ({ children }) => {
  const [idArray, setIdArray] = useState([]);
  const [moneyAmount, setMoneyAmount] = useState(0);
  const [totalCost, setTotalCost] = useState(0); // Initialize totalCost as 0

  const addID = (id) => {
    setIdArray((prevIds) => [...prevIds, id]);
  };

  const removeID = (id) => {
    setIdArray((prevIds) => prevIds.filter((item) => item !== id));
  };

  const updateMoneyAmount = (amount) => {
    setMoneyAmount(amount);
  };

  // Function to calculate and set totalCost
  const calculateTotalCost = () => {
    const filteredItems = items.filter((item) => idArray.includes(item.id));
    const cost = filteredItems.reduce((acc, item) => acc + item.price, 0);
    setTotalCost(cost);
  };

  useEffect(() => {
    calculateTotalCost();
  }, [idArray]);

  const contextValue = {
    idArray,
    moneyAmount,
    totalCost,
    addID,
    removeID,
    updateMoneyAmount,
    calculateTotalCost,
  };

  return (
    <IDContext.Provider value={contextValue}>{children}</IDContext.Provider>
  );
};
