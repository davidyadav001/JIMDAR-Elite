import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail, ArrowRight, Home } from 'lucide-react';
import { formatNPRWithDecimals, TAX_RATE } from '../utils/currency';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, paymentMethod, items, total } = location.state || {};

  if (!orderId) {
    return (
      <div className="min-h-screen bg-jimdar-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Order Not Found</h1>
          <p className="text-xl text-jimdar-light mb-8">
            We couldn't find your order information.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-8 py-4 bg-jimdar-blue text-white font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-jimdar-dark py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-jimdar-light mb-2">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          <p className="text-lg text-jimdar-light">
            Order ID: <span className="font-mono font-bold text-jimdar-light">{orderId}</span>
          </p>
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Order Summary */}
          <div className="bg-jimdar-darker rounded-lg p-6">
            <h2 className="text-2xl font-serif font-semibold text-white mb-6">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-jimdar-light">
                      Qty: {item.quantity} • {item.subcategory}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-jimdar-light">
                    {formatNPRWithDecimals(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-jimdar-light">
                <span>Subtotal</span>
                <span>{formatNPRWithDecimals(total / (1 + TAX_RATE))}</span>
              </div>
              <div className="flex justify-between text-jimdar-light">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-jimdar-light">
                <span>Tax (VAT 13%)</span>
                <span>{formatNPRWithDecimals(total * TAX_RATE / (1 + TAX_RATE))}</span>
              </div>
              <hr className="border-jimdar-blue" />
              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span>{formatNPRWithDecimals(total)}</span>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="bg-jimdar-darker rounded-lg p-6">
            <h2 className="text-2xl font-serif font-semibold text-white mb-6">
              Shipping Information
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Package className="h-5 w-5 text-jimdar-light mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Processing</h3>
                  <p className="text-sm text-jimdar-light">
                    Your order is being prepared for shipment
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Truck className="h-5 w-5 text-jimdar-light mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Shipping</h3>
                  <p className="text-sm text-jimdar-light">
                    Estimated delivery: 3-5 business days
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-jimdar-light mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Confirmation</h3>
                  <p className="text-sm text-jimdar-light">
                    Order confirmation sent to your email
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-jimdar-blue rounded-lg">
              <h3 className="font-semibold text-white mb-2">Payment Method</h3>
              <p className="text-sm text-jimdar-light">
                Card ending in •••• {paymentMethod?.card?.last4 || '1234'}
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-jimdar-darker rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-serif font-semibold text-white mb-6 text-center">
            What's Next?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-jimdar-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Order Processing</h3>
              <p className="text-jimdar-light">
                We'll prepare your order and send you a tracking number
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-jimdar-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Shipping</h3>
              <p className="text-jimdar-light">
                Your order will be shipped with free worldwide delivery
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-jimdar-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Delivery</h3>
              <p className="text-jimdar-light">
                Enjoy your new luxury items from JIMDAR Elite
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/categories')}
              className="inline-flex items-center px-8 py-4 bg-jimdar-blue text-white font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 transform hover:scale-105"
            >
              Continue Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-8 py-4 border-2 border-jimdar-light text-jimdar-light font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 transform hover:scale-105"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </button>
          </div>
          
          <p className="text-jimdar-light">
            Need help? <a href="/contact" className="text-jimdar-light hover:text-white underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
