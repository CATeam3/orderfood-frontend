import React, { useEffect, useState } from "react";

import "./assets/bootstrap/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ForgotPassword } from "./pages/ForgotPassword";
import { LogIn } from "./pages/LogIn";
import { ChangePassword } from "./pages/ChangePassword";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { ThemeToggle } from "./components/ThemeToggle";
import { WelcomePage } from "./pages/WelcomePage";
import { HomeMenu } from "./pages/HomeMenu";
import { Categories } from "./pages/Categories";
import { CategorySection } from "./pages/CategorySection";
import { ItemView } from "./pages/ItemView";
import { MyCart } from "./pages/MyCart";
import { Specifications } from "./pages/Specifications";

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
    <div
      className={`App bg-body`}
      data-bs-theme={localStorage.getItem("theme")}
    >
      <Specifications />
    </div>
  );
}

export default App;
