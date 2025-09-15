import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Sparkles, Crown, Gem } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { formatNPR, FREE_SHIPPING_THRESHOLD } from '../utils/currency';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Animation */}
      <section className="relative bg-gradient-to-br from-jimdar-darker via-jimdar-dark to-jimdar-blue py-20 overflow-hidden">
        <ThreeScene />

        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full opacity-10 animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <Crown className="h-8 w-8 text-yellow-400 mr-3 animate-bounce" />
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-16 animate-fade-in bg-gradient-to-r from-white via-jimdar-light to-white bg-clip-text text-transparent">
                JIMDAR Elite
              </h1>
              <Gem className="h-8 w-8 text-yellow-400 ml-3 animate-bounce delay-500" />
            </div>

            <p className="text-xl md:text-2xl text-jimdar-light mb-12 animate-fade-in">
              Discover luxury fashion that defines your elite status
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up mt-6">
              <Link
                to="/categories"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-jimdar-light to-white text-jimdar-darker font-semibold rounded-lg hover:from-white hover:to-jimdar-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-jimdar-light text-jimdar-light font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-jimdar-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-jimdar-blue/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-gradient-to-br from-jimdar-darker to-jimdar-blue/20 rounded-xl hover:from-jimdar-blue/30 hover:to-jimdar-darker transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border border-jimdar-blue/20">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">Premium Quality</h3>
              <p className="text-jimdar-light text-lg">Only the finest materials and craftsmanship from around the world</p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-jimdar-darker to-jimdar-blue/20 rounded-xl hover:from-jimdar-blue/30 hover:to-jimdar-darker transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border border-jimdar-blue/20">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-green-400 transition-colors">Fast Shipping</h3>
              <p className="text-jimdar-light text-lg">Free worldwide delivery on orders over {formatNPR(FREE_SHIPPING_THRESHOLD)}</p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-jimdar-darker to-jimdar-blue/20 rounded-xl hover:from-jimdar-blue/30 hover:to-jimdar-darker transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border border-jimdar-blue/20">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Secure Payment</h3>
              <p className="text-jimdar-light text-lg">100% secure checkout with buyer protection and encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-jimdar-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Featured Collection</h2>
            <p className="text-xl text-jimdar-light">Handpicked luxury pieces for the discerning elite</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/categories"
              className="inline-flex items-center px-8 py-4 bg-jimdar-blue text-white font-semibold rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300 transform hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-jimdar-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Stay Elite</h2>
          <p className="text-lg text-jimdar-light mb-8">
            Subscribe to our newsletter for exclusive offers and early access to new collections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white placeholder-jimdar-light focus:outline-none focus:ring-2 focus:ring-jimdar-light"
            />
            <button className="px-6 py-3 bg-jimdar-light text-jimdar-darker font-semibold rounded-lg hover:bg-white transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
