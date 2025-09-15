import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { items: favorites } = useFavorites();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Cart', href: '/cart' },
    { name: 'Favorites', href: '/favorites' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-jimdar-darker shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="/images/logos/logo.png" 
                alt="JIMDAR Elite Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-white">JIMDAR Elite</h1>
              <p className="text-xs text-jimdar-light italic">Wear the Elite</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.href
                    ? 'text-white bg-gradient-to-r from-jimdar-blue to-jimdar-light shadow-lg'
                    : 'text-jimdar-light hover:text-white hover:bg-gradient-to-r hover:from-jimdar-blue/20 hover:to-jimdar-light/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-jimdar-blue to-jimdar-light rounded-lg animate-morphing-glow"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-jimdar-blue/0 to-jimdar-light/0 group-hover:from-jimdar-blue/10 group-hover:to-jimdar-light/10 rounded-lg transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Cart and Favorites Icons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/favorites"
              className="relative p-2 text-jimdar-light hover:text-white transition-colors duration-200"
            >
              <Heart className="h-6 w-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            
            <Link
              to="/cart"
              className="relative p-2 text-jimdar-light hover:text-white transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-jimdar-light text-jimdar-darker text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-jimdar-light hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-jimdar-blue rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-white bg-jimdar-darker'
                      : 'text-jimdar-light hover:text-white hover:bg-jimdar-darker'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
