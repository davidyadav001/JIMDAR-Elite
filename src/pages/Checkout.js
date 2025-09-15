import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ArrowLeft, Lock, CreditCard, Truck, Shield, Smartphone, Wallet, Banknote, QrCode } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import { formatNPRWithDecimals, FREE_SHIPPING_THRESHOLD, TAX_RATE } from '../utils/currency';

// Stripe public key (test mode)
const stripePromise = loadStripe('pk_test_51234567890abcdef');

const CheckoutForm = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setIsProcessing(false);
    } else {
      // Simulate successful payment
      setTimeout(() => {
        onSuccess(paymentMethod);
        setIsProcessing(false);
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-jimdar-light mb-2">
          Card Information
        </label>
        <div className="p-4 bg-jimdar-dark border border-jimdar-blue rounded-lg">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#88A9C3',
                  '::placeholder': {
                    color: '#2B4257',
                  },
                },
                invalid: {
                  color: '#ef4444',
                },
              },
            }}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-jimdar-light text-jimdar-darker font-semibold py-4 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isProcessing ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-jimdar-darker mr-2"></div>
            Processing...
          </>
        ) : (
          <>
            <Lock className="mr-2 h-5 w-5" />
            Complete Payment
          </>
        )}
      </button>
    </form>
  );
};

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const { success, error } = useNotification();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'NP'
  });

  const handleInputChange = (e) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value
    });
  };

  const handlePaymentSuccess = (paymentMethod) => {
    // Clear cart and redirect to confirmation
    clearCart();
    navigate('/order-confirmation', { 
      state: { 
        orderId: `JIM-${Date.now()}`,
        paymentMethod: paymentMethod.id,
        items: items,
        total: getTotalPrice() * (1 + TAX_RATE) + (getTotalPrice() >= FREE_SHIPPING_THRESHOLD ? 0 : 500)
      }
    });
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePayment = async () => {
    try {
      // Simulate payment processing
      success('Payment processed successfully!', {
        title: 'Payment Complete'
      });
      
      // Clear cart and redirect to confirmation
      clearCart();
      navigate('/order-confirmation', { 
        state: { 
          orderId: `JIM-${Date.now()}`,
          paymentMethod: selectedPaymentMethod,
          items: items,
          total: getTotalPrice() * (1 + TAX_RATE) + (getTotalPrice() >= FREE_SHIPPING_THRESHOLD ? 0 : 500)
        }
      });
    } catch (err) {
      error('Payment failed. Please try again.');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-jimdar-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-jimdar-light mb-8">
            Add some items to your cart before checking out
          </p>
          <button
            onClick={() => navigate('/categories')}
            className="inline-flex items-center px-8 py-4 bg-jimdar-blue text-white font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-jimdar-dark py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/cart')}
            className="inline-flex items-center text-jimdar-light hover:text-white transition-colors duration-200 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cart
          </button>
          <h1 className="text-4xl font-serif font-bold text-white">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            {/* Billing Information */}
            <div className="bg-jimdar-darker rounded-lg p-6">
              <h2 className="text-2xl font-serif font-semibold text-white mb-6">
                Billing Information
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-jimdar-light mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={billingInfo.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-jimdar-light mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={billingInfo.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-jimdar-light mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={billingInfo.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-jimdar-light mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={billingInfo.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-jimdar-light mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={billingInfo.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                    placeholder="Kathmandu"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-jimdar-light mb-2">
                    Province
                  </label>
                  <select
                    name="state"
                    value={billingInfo.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                  >
                    <option value="">Select Province</option>
                    <option value="Province 1">Province 1</option>
                    <option value="Madhesh Province">Madhesh Province</option>
                    <option value="Bagmati Province">Bagmati Province</option>
                    <option value="Gandaki Province">Gandaki Province</option>
                    <option value="Lumbini Province">Lumbini Province</option>
                    <option value="Karnali Province">Karnali Province</option>
                    <option value="Sudurpashchim Province">Sudurpashchim Province</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-jimdar-light mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={billingInfo.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                    placeholder="44600"
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-jimdar-darker rounded-lg p-6">
              <h2 className="text-2xl font-serif font-semibold text-white mb-6 flex items-center">
                <CreditCard className="mr-2 h-6 w-6" />
                Payment Information
              </h2>
              
              {/* Payment Method Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Choose Payment Method</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Credit/Debit Card */}
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedPaymentMethod === 'card' 
                        ? 'border-jimdar-light bg-jimdar-light/10' 
                        : 'border-jimdar-blue hover:border-jimdar-light'
                    }`}
                    onClick={() => handlePaymentMethodChange('card')}
                  >
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-6 w-6 text-jimdar-light" />
                      <div>
                        <h4 className="font-semibold text-white">Credit/Debit Card</h4>
                        <p className="text-sm text-jimdar-light">Visa, Mastercard, American Express</p>
                      </div>
                    </div>
                  </div>

                  {/* Cash on Delivery */}
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedPaymentMethod === 'cod' 
                        ? 'border-jimdar-light bg-jimdar-light/10' 
                        : 'border-jimdar-blue hover:border-jimdar-light'
                    }`}
                    onClick={() => handlePaymentMethodChange('cod')}
                  >
                    <div className="flex items-center space-x-3">
                      <Banknote className="h-6 w-6 text-jimdar-light" />
                      <div>
                        <h4 className="font-semibold text-white">Cash on Delivery</h4>
                        <p className="text-sm text-jimdar-light">Pay when you receive</p>
                      </div>
                    </div>
                  </div>

                  {/* PhonePay */}
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedPaymentMethod === 'phonepe' 
                        ? 'border-jimdar-light bg-jimdar-light/10' 
                        : 'border-jimdar-blue hover:border-jimdar-light'
                    }`}
                    onClick={() => handlePaymentMethodChange('phonepe')}
                  >
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-6 w-6 text-purple-400" />
                      <div>
                        <h4 className="font-semibold text-white">PhonePe</h4>
                        <p className="text-sm text-jimdar-light">UPI Payment</p>
                      </div>
                    </div>
                  </div>

                  {/* eSewa */}
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedPaymentMethod === 'esewa' 
                        ? 'border-jimdar-light bg-jimdar-light/10' 
                        : 'border-jimdar-blue hover:border-jimdar-light'
                    }`}
                    onClick={() => handlePaymentMethodChange('esewa')}
                  >
                    <div className="flex items-center space-x-3">
                      <Wallet className="h-6 w-6 text-green-400" />
                      <div>
                        <h4 className="font-semibold text-white">eSewa</h4>
                        <p className="text-sm text-jimdar-light">Digital Wallet</p>
                      </div>
                    </div>
                  </div>

                  {/* Khalti */}
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedPaymentMethod === 'khalti' 
                        ? 'border-jimdar-light bg-jimdar-light/10' 
                        : 'border-jimdar-blue hover:border-jimdar-light'
                    }`}
                    onClick={() => handlePaymentMethodChange('khalti')}
                  >
                    <div className="flex items-center space-x-3">
                      <QrCode className="h-6 w-6 text-blue-400" />
                      <div>
                        <h4 className="font-semibold text-white">Khalti</h4>
                        <p className="text-sm text-jimdar-light">Digital Payment</p>
                      </div>
                    </div>
                  </div>

                  {/* Bank Transfer */}
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedPaymentMethod === 'bank' 
                        ? 'border-jimdar-light bg-jimdar-light/10' 
                        : 'border-jimdar-blue hover:border-jimdar-light'
                    }`}
                    onClick={() => handlePaymentMethodChange('bank')}
                  >
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-6 w-6 text-yellow-400" />
                      <div>
                        <h4 className="font-semibold text-white">Bank Transfer</h4>
                        <p className="text-sm text-jimdar-light">Direct Bank Transfer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Form based on selected method */}
              {selectedPaymentMethod === 'card' && (
                <Elements stripe={stripePromise}>
                  <CheckoutForm onSuccess={handlePaymentSuccess} />
                </Elements>
              )}

              {selectedPaymentMethod === 'cod' && (
                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <Banknote className="h-6 w-6 text-green-400" />
                      <div>
                        <h4 className="font-semibold text-white">Cash on Delivery</h4>
                        <p className="text-sm text-jimdar-light">
                          Pay with cash when your order is delivered. No online payment required.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handlePayment}
                    className="w-full bg-jimdar-light text-jimdar-darker font-semibold py-4 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Banknote className="mr-2 h-5 w-5" />
                    Confirm Cash on Delivery
                  </button>
                </div>
              )}

              {selectedPaymentMethod === 'phonepe' && (
                <div className="space-y-4">
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-6 w-6 text-purple-400" />
                      <div>
                        <h4 className="font-semibold text-white">PhonePe Payment</h4>
                        <p className="text-sm text-jimdar-light">
                          Complete your payment using PhonePe UPI. You'll be redirected to the PhonePe app.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handlePayment}
                    className="w-full bg-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    Pay with PhonePe
                  </button>
                </div>
              )}

              {selectedPaymentMethod === 'esewa' && (
                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <Wallet className="h-6 w-6 text-green-400" />
                      <div>
                        <h4 className="font-semibold text-white">eSewa Payment</h4>
                        <p className="text-sm text-jimdar-light">
                          Pay securely using your eSewa wallet. Fast and convenient payment method.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handlePayment}
                    className="w-full bg-green-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Wallet className="mr-2 h-5 w-5" />
                    Pay with eSewa
                  </button>
                </div>
              )}

              {selectedPaymentMethod === 'khalti' && (
                <div className="space-y-4">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <QrCode className="h-6 w-6 text-blue-400" />
                      <div>
                        <h4 className="font-semibold text-white">Khalti Payment</h4>
                        <p className="text-sm text-jimdar-light">
                          Use Khalti for instant payments. Scan QR code or enter mobile number.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handlePayment}
                    className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <QrCode className="mr-2 h-5 w-5" />
                    Pay with Khalti
                  </button>
                </div>
              )}

              {selectedPaymentMethod === 'bank' && (
                <div className="space-y-4">
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-6 w-6 text-yellow-400" />
                      <div>
                        <h4 className="font-semibold text-white">Bank Transfer</h4>
                        <p className="text-sm text-jimdar-light">
                          Transfer funds directly to our bank account. Details will be provided after order confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-jimdar-dark rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-2">Bank Details:</h5>
                    <div className="space-y-1 text-sm text-jimdar-light">
                      <p><span className="font-medium">Bank:</span> Nepal Investment Bank</p>
                      <p><span className="font-medium">Account:</span> JIMDAR Elite Pvt. Ltd.</p>
                      <p><span className="font-medium">Account No:</span> 1234567890</p>
                      <p><span className="font-medium">Swift Code:</span> NIBLNPKA</p>
                    </div>
                  </div>
                  <button
                    onClick={handlePayment}
                    className="w-full bg-yellow-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Confirm Bank Transfer
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-jimdar-darker rounded-lg p-6">
              <h3 className="text-2xl font-serif font-semibold text-white mb-6">
                Order Summary
              </h3>

              {/* Order Items */}
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
                      <h4 className="text-sm font-semibold text-white truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-jimdar-light">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-jimdar-light">
                      {formatNPRWithDecimals(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-jimdar-light">
                  <span>Subtotal</span>
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

              {/* Security Features */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-jimdar-light">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>256-bit SSL encryption</span>
                </div>
                <div className="flex items-center text-sm text-jimdar-light">
                  <Truck className="h-4 w-4 mr-2" />
                  <span>Free worldwide shipping</span>
                </div>
                <div className="flex items-center text-sm text-jimdar-light">
                  <Lock className="h-4 w-4 mr-2" />
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
