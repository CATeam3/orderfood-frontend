import "./App.css";
import "./assets/bootstrap/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ForgotPassword } from "./pages/ForgotPassword";
import { LogIn } from "./pages/LogIn";
import { ChangePassword } from "./pages/ChangePassword";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App bg-body" data-bs-theme="dark">
      <Profile />
    </div>
  );
}

export default App;
