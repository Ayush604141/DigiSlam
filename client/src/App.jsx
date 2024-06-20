import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Auth from "./components/auth/Auth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth initialTab="login" />} />
      <Route path="/sign-up" element={<Auth initialTab="sign-up" />} />
    </Routes>
  );
}
