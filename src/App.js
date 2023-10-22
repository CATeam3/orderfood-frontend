import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./assets/bootstrap/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ForgotPassword } from "./pages/ForgotPassword";
import { LogIn } from "./pages/LogIn";
import { ChangePassword } from "./pages/ChangePassword";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { WelcomePage } from "./pages/WelcomePage";
import { HomeMenu } from "./pages/HomeMenu";
import { ItemView } from "./pages/ItemView";
import { MyCart } from "./pages/MyCart";
import { Specifications } from "./pages/Specifications";
import { IDContextProvider } from "./components/IDContext";

function App() {
  useEffect(() => {
    localStorage.setItem("viewing", 1);

    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
    } else {
      console.log(localStorage.getItem("theme"));
    }
  }, []);

  return (
    <IDContextProvider>
      <div
        className={`App bg-body`}
        data-bs-theme={localStorage.getItem("theme")}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<WelcomePage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/home-menu" element={<HomeMenu />} />
            <Route path="/item-view" element={<ItemView />} />
            <Route path="/my-cart" element={<MyCart />} />
            <Route path="/specifications" element={<Specifications />} />
          </Routes>
        </BrowserRouter>
      </div>
    </IDContextProvider>
  );
}

export default App;
