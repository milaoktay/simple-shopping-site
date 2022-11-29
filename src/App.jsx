import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="products" element={<Products />}></Route>

        <Route path="/" element={<Navigate to="products" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
