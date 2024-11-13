import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";
import ViewProduct from "./pages/ViewProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/product/create" element={<CreateProduct />} />
          <Route path="/product/view/:id" element={<ViewProduct />} />
          <Route path="/product/edit/:id" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
