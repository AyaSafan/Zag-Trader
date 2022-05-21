import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignTemplate from "./pages/sign/templates/signTemplate";
import RegisterForm from "./pages/sign/templates/registerForm";
import LoginForm from "./pages/sign/templates/loginForm";
import Dashboard from "./pages/dashboard/dashboad";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignTemplate />}>
          <Route path="sign-up" element={<RegisterForm />} />
          <Route path="sign-in" element={<LoginForm />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
