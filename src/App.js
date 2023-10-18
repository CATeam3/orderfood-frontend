import "./App.css";
import "./assets/bootstrap/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ForgotPassword } from "./pages/ForgotPassword";
import { LogIn } from "./pages/LogIn";
import { ChangePassword } from "./pages/ChangePassword";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className={`App container-fluid`} data-bs-theme="light">
      <Register />
    </div>
  );
}

export default App;
