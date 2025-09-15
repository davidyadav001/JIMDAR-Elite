import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useNotification } from '../context/NotificationContext';
import { formatNPR } from '../utils/currency';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { success } = useNotification();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    success(`${product.name} added to cart`, {
      title: 'Added to Cart'
    });
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
      success(`${product.name} removed from favorites`, {
        title: 'Removed from Favorites'
      });
    } else {
      addToFavorites(product);
      success(`${product.name} added to favorites`, {
        title: 'Added to Favorites'
      });
    }
  };

  return (
    <div className="group relative bg-jimdar-darker rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
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
                onClick={handleAddToCart}
                className="p-2 bg-jimdar-blue text-white rounded-full hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-smooth-scale"
                title="Add to Cart"
              >
                <ShoppingCart className="h-4 w-4" />
              </button>
              <button
                onClick={handleToggleFavorite}
                className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-smooth-scale ${
                  isFavorite(product.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-600 text-jimdar-light hover:bg-red-500 hover:text-white'
                }`}
                title={isFavorite(product.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              >
                <Heart className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Quick view overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <Link
          to={`/product/${product.id}`}
          className="p-3 bg-white bg-opacity-90 text-jimdar-darker rounded-full hover:bg-opacity-100 transition-all duration-200 transform hover:scale-110"
        >
          <Eye className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
