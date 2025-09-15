import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import { formatNPR } from '../utils/currency';

const Favorites = () => {
  const { items: favorites, removeFromFavorites, clearFavorites } = useFavorites();
  const { addToCart } = useCart();
  const { success } = useNotification();

  const handleAddToCart = (product) => {
    addToCart(product);
    success(`${product.name} added to cart`, {
      title: 'Added to Cart'
    });
  };

  const handleRemoveFromFavorites = (product) => {
    removeFromFavorites(product.id);
    success(`${product.name} removed from favorites`, {
      title: 'Removed from Favorites'
    });
  };

  const handleClearFavorites = () => {
    clearFavorites();
    success('All favorites cleared', {
      title: 'Favorites Cleared'
    });
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-jimdar-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-32 h-32 bg-jimdar-darker rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="h-16 w-16 text-jimdar-light" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-white mb-4">No Favorites Yet</h1>
          <p className="text-xl text-jimdar-light mb-8">
            Start adding items to your favorites to see them here
          </p>
          <Link
            to="/categories"
            className="inline-flex items-center px-8 py-4 bg-jimdar-blue text-white font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="mr-2 h-5 w-5" />
            Browse Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-jimdar-dark py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-white mb-2">My Favorites</h1>
            <p className="text-jimdar-light">{favorites.length} items saved</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleClearFavorites}
              className="text-red-400 hover:text-red-300 transition-colors duration-200"
            >
              Clear All
            </button>
            <Link
              to="/categories"
              className="inline-flex items-center text-jimdar-light hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="group relative bg-jimdar-darker rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Link to={`/product/${product.id}`}>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              
              <div className="p-4">
                <h3 className="text-lg font-serif font-semibold text-white mb-2 group-hover:text-jimdar-light transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-sm text-jimdar-light mb-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-jimdar-light">
                    {formatNPR(product.price)}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="p-2 bg-jimdar-blue text-white rounded-full hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-200 transform hover:scale-110"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleRemoveFromFavorites(product)}
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-200 transform hover:scale-110"
                      title="Remove from Favorites"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <div className="bg-jimdar-darker rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold text-white mb-4">
              Love what you see?
            </h3>
            <p className="text-jimdar-light mb-6">
              Add all your favorite items to cart and checkout in one go
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  favorites.forEach(product => addToCart(product));
                }}
                className="inline-flex items-center px-8 py-4 bg-jimdar-blue text-white font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add All to Cart
              </button>
              <Link
                to="/categories"
                className="inline-flex items-center px-8 py-4 border-2 border-jimdar-light text-jimdar-light font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 transform hover:scale-105"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
