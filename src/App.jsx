import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Products />
    </BrowserRouter>
  );
}

export default App;
