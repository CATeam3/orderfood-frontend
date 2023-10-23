import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/bootstrap/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Login } from "./pages/Login";
import { ChangePassword } from "./pages/ChangePassword";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { WelcomePage } from "./pages/WelcomePage";
import { HomeMenu } from "./pages/HomeMenu";
import { ItemView } from "./pages/ItemView";
import { MyCart } from "./pages/MyCart";
import { Specifications } from "./pages/Specifications";
import { ForgotPassword } from "./pages/ForgotPassword";
import { IDContextProvider } from "./components/IDContext";
import ProtectedRoute from "./middleware/ProtectedRoute";
function App() {
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
    } else {
      console.log(localStorage.getItem("theme"));
    }

    // Add an event listener to listen for changes in LocalStorage theme
  }, []);

  return (
    <IDContextProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/changepassword"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeMenu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/item"
          element={
            <ProtectedRoute>
              <ItemView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <MyCart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/specs"
          element={
            <ProtectedRoute>
              <Specifications />
            </ProtectedRoute>
          }
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </IDContextProvider>
  );
}

export default App;
