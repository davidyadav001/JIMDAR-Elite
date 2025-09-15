import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import { formatNPR, formatNPRWithDecimals, FREE_SHIPPING_THRESHOLD, TAX_RATE } from '../utils/currency';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();
  const { success } = useNotification();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item.id);
    success(`${item.name} removed from cart`, {
      title: 'Removed from Cart'
    });
  };

  const handleClearCart = () => {
    clearCart();
    success('Cart cleared successfully', {
      title: 'Cart Cleared'
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-jimdar-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-32 h-32 bg-jimdar-darker rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="h-16 w-16 text-jimdar-light" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-jimdar-light mb-8">
            Discover our premium collection and add some luxury to your wardrobe
          </p>
          <Link
            to="/categories"
            className="inline-flex items-center px-8 py-4 bg-jimdar-blue text-white font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Start Shopping
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
            <h1 className="text-4xl font-serif font-bold text-white mb-2">Shopping Cart</h1>
            <p className="text-jimdar-light">{getTotalItems()} items in your cart</p>
          </div>
          <Link
            to="/categories"
            className="inline-flex items-center text-jimdar-light hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-jimdar-darker rounded-lg p-6 hover:bg-jimdar-blue transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-serif font-semibold text-white mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-jimdar-light mb-2">
                        {item.subcategory} • {item.category}
                      </p>
                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-jimdar-light">
                          {formatNPR(item.price)}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 bg-jimdar-dark text-jimdar-light rounded hover:bg-jimdar-blue hover:text-white transition-colors duration-200"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-white font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 bg-jimdar-dark text-jimdar-light rounded hover:bg-jimdar-blue hover:text-white transition-colors duration-200"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900 bg-red-900 bg-opacity-20 rounded-lg transition-all duration-200"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="mt-6">
              <button
                onClick={handleClearCart}
                className="text-red-400 hover:text-red-300 transition-colors duration-200"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-jimdar-darker rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-serif font-semibold text-white mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-jimdar-light">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>{formatNPRWithDecimals(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-jimdar-light">
                  <span>Shipping</span>
                  <span className={getTotalPrice() >= FREE_SHIPPING_THRESHOLD ? "text-green-400" : "text-jimdar-light"}>
                    {getTotalPrice() >= FREE_SHIPPING_THRESHOLD ? "Free" : formatNPRWithDecimals(500)}
                  </span>
                </div>
                <div className="flex justify-between text-jimdar-light">
                  <span>Tax (VAT 13%)</span>
                  <span>{formatNPRWithDecimals(getTotalPrice() * TAX_RATE)}</span>
                </div>
                <hr className="border-jimdar-blue" />
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span>{formatNPRWithDecimals(getTotalPrice() * (1 + TAX_RATE) + (getTotalPrice() >= FREE_SHIPPING_THRESHOLD ? 0 : 500))}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/checkout"
                  className="w-full bg-jimdar-light text-jimdar-darker font-semibold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 text-center block"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/categories"
                  className="w-full border-2 border-jimdar-light text-jimdar-light font-semibold py-3 px-6 rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 text-center block"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Security Badge */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-jimdar-light">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span>Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
