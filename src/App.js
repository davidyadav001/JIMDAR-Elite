import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import ErrorBoundary from './components/ErrorBoundary';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <NotificationProvider>
          <CartProvider>
            <FavoritesProvider>
              <div className="min-h-screen bg-jimdar-dark">
                <Header />
                <main>
                  <PageTransition>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/categories" element={<Categories />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/favorites" element={<Favorites />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/product/:id" element={<ProductDetail />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/order-confirmation" element={<OrderConfirmation />} />
                    </Routes>
                  </PageTransition>
                </main>
              </div>
            </FavoritesProvider>
          </CartProvider>
        </NotificationProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
