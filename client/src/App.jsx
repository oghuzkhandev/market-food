import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import React from "react";
import CartPage from "./pages/CartPage";
import BillsPage from "./pages/BillsPage";
import UserPage from "./pages/UserPage";
import StatisticPage from "./pages/StatisticPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="sepet" element={<CartPage/>}/>
          <Route path="faturalar" element={<BillsPage/>}/>
          <Route path="musteriler" element={<UserPage/>}/>
          <Route path="istatistikler" element={<StatisticPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
