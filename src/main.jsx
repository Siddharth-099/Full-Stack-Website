import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './context/Product.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <Product>
    <CartProvider>
      <App />
    </CartProvider>
  </Product>
)
