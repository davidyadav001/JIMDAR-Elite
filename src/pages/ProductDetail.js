import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { getProductById } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-jimdar-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-xl text-jimdar-light mb-8">
            The product you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/categories')}
            className="inline-flex items-center px-8 py-4 bg-jimdar-blue text-white font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Categories
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity
    });
  };

  const handleToggleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="min-h-screen bg-jimdar-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-jimdar-light hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-96 w-full object-cover object-center"
              />
            </div>
            
            {/* Additional Images Placeholder */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 rounded-lg">
                  <img
                    src={product.image}
                    alt={`${product.name} ${i}`}
                    className="h-20 w-full object-cover object-center hover:opacity-75 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif font-bold text-white mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-jimdar-light mb-4">
                {product.subcategory} • {product.category}
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-jimdar-light">(4.8) 124 reviews</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-jimdar-light">
                ${product.price}
              </p>
            </div>

            <div>
              <p className="text-jimdar-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-jimdar-light bg-jimdar-light text-jimdar-darker'
                          : 'border-jimdar-blue text-jimdar-light hover:border-jimdar-light hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        selectedColor === color
                          ? 'border-jimdar-light bg-jimdar-light text-jimdar-darker'
                          : 'border-jimdar-blue text-jimdar-light hover:border-jimdar-light hover:text-white'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-jimdar-darker text-jimdar-light rounded-lg hover:bg-jimdar-blue hover:text-white transition-colors duration-200 flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-xl font-semibold text-white w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-jimdar-darker text-jimdar-light rounded-lg hover:bg-jimdar-blue hover:text-white transition-colors duration-200 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-jimdar-light text-jimdar-darker font-semibold py-4 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </button>
              <button
                onClick={handleToggleFavorite}
                className={`px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isFavorite(product.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-jimdar-darker text-jimdar-light hover:bg-red-500 hover:text-white'
                }`}
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-jimdar-blue">
              <div className="text-center">
                <Truck className="h-8 w-8 text-jimdar-light mx-auto mb-2" />
                <p className="text-sm text-jimdar-light">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-jimdar-light mx-auto mb-2" />
                <p className="text-sm text-jimdar-light">Easy Returns</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-jimdar-light mx-auto mb-2" />
                <p className="text-sm text-jimdar-light">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
