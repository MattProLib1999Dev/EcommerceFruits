import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { DisplayProduct, ListProduct } from './component/Product/product'

// Import CSS di Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Import JS di Bootstrap (Senza require)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayProduct product={ListProduct} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)