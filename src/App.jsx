import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { ProductDetail } from "./pages/ProductDetail.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import { NavBar } from "./components/NavBar.jsx";

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}
