import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DisplayProduct, ListProduct } from './component/Product/product'
// @ts-ignore
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './component/home-page/vetrina';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<DisplayProduct product={ListProduct} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)