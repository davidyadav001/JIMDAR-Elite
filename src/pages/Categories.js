import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';
import { Filter } from 'lucide-react';
import { formatNPR } from '../utils/currency';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 50000]);

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && subcategoryMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  const subcategories = selectedCategoryData ? selectedCategoryData.subcategories : [];

  return (
    <div className="min-h-screen bg-jimdar-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Our Collection</h1>
          <p className="text-xl text-jimdar-light">Discover luxury fashion across all categories</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-jimdar-darker rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-serif font-semibold text-white mb-6 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-jimdar-light mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSubcategory('all');
                  }}
                  className="w-full px-3 py-2 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subcategory Filter */}
              {subcategories.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-jimdar-light mb-2">
                    Subcategory
                  </label>
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="w-full px-3 py-2 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                  >
                    <option value="all">All Subcategories</option>
                    {subcategories.map((subcategory) => (
                      <option key={subcategory} value={subcategory}>
                        {subcategory}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-jimdar-light mb-2">
                  Price Range: {formatNPR(priceRange[0])} - {formatNPR(priceRange[1])}
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-jimdar-light mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-jimdar-dark border border-jimdar-blue rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-jimdar-light"
                >
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-jimdar-light">
                Showing {sortedProducts.length} products
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-jimdar-light">View:</span>
                <button className="p-2 bg-jimdar-blue text-white rounded">
                  Grid
                </button>
                <button className="p-2 bg-jimdar-darker text-jimdar-light rounded hover:bg-jimdar-blue hover:text-white">
                  List
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-jimdar-darker rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-12 w-12 text-jimdar-light" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-2">
                  No products found
                </h3>
                <p className="text-jimdar-light mb-4">
                  Try adjusting your filters to see more results
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory('all');
                    setPriceRange([0, 50000]);
                  }}
                  className="px-6 py-3 bg-jimdar-blue text-white rounded-lg hover:bg-jimdar-light hover:text-jimdar-darker transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
