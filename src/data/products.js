// Products with prices in Nepalese Rupees (NPR)

export const categories = [
  {
    id: 'tshirts',
    name: 'T-Shirts',
    subcategories: ['Male', 'Female', 'Unisex']
  },
  {
    id: 'formal-pants',
    name: 'Formal Pants',
    subcategories: ['Male', 'Female']
  },
  {
    id: 'jeans-pants',
    name: 'Jeans Pants',
    subcategories: ['Male', 'Female']
  },
  {
    id: 'tops-women',
    name: 'Formals (Women)',
    subcategories: ['Blouses', 'Tank Tops', 'Crop Tops']
  },
  {
    id: 'one-piece',
    name: 'One Piece (Women)',
    subcategories: ['Denim', 'Leather', 'Cotton']
  },
  {
    id: 'boxers-boys',
    name: 'Boxers (Boys)',
    subcategories: ['Cotton', 'Silk', 'Athletic']
  }
];

export const products = [
  // T-Shirts
  {
    id: 1,
    name: 'Classic Cotton T-Shirt',
    price: 1999,
    category: 'tshirts',
    subcategory: 'Male',
    image: '/images/products/tshirts/t1.jpg',
    description: 'Premium cotton blend t-shirt with luxury finish',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy']
  },
  {
    id: 2,
    name: 'V-Neck Casual T-Shirt',
    price: 2599,
    category: 'tshirts',
    subcategory: 'Female',
    image: '/images/products/tshirts/t2.jpg',
    description: 'Elegant v-neck design with premium materials',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Cream']
  },
  {
    id: 3,
    name: 'Unisex Graphic T-Shirt',
    price: 2299,
    category: 'tshirts',
    subcategory: 'Unisex',
    image: '/images/products/tshirts/t3.jpg',
    description: 'Versatile unisex design with modern fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray']
  },
  {
    id: 14,
    name: 'Athletic Performance T-Shirt',
    price: 1999,
    category: 'tshirts',
    subcategory: 'Male',
    image: '/images/products/tshirts/t4.jpg',
    description: 'High-performance sport t-shirt with premium comfort',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Gray']
  },

  // Formal Pants
  {
    id: 4,
    name: 'Classic Dress Trousers',
    price: 2999,
    category: 'formal-pants',
    subcategory: 'Male',
    image: '/images/products/formal-pants/p1.jpg',
    description: 'Professional dress pants with perfect tailoring',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Black', 'Navy', 'Charcoal']
  },
  {
    id: 5,
    name: 'Professional Trousers',
    price: 2999,
    category: 'formal-pants',
    subcategory: 'Female',
    image: '/images/products/formal-pants/p2.jpg',
    description: 'Sophisticated trousers for the modern professional',
    sizes: ['4', '6', '8', '10', '12'],
    colors: ['Black', 'Navy', 'Gray']
  },
  {
    id: 20,
    name: 'Luxury Dress Pants',
    price: 2999,
    category: 'formal-pants',
    subcategory: 'Male',
    image: '/images/products/formal-pants/p3.jpg',
    description: 'Premium formal pants with luxury finish and perfect fit',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Black', 'Navy', 'Charcoal', 'Gray']
  },

  // Jeans Pants
  {
    id: 6,
    name: 'Classic Blue Jeans',
    price: 3999,
    category: 'jeans-pants',
    subcategory: 'Male',
    image: '/images/products/jeans-pants/j1.jpg',
    description: 'High-quality denim with perfect fit',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black']
  },
  {
    id: 7,
    name: 'Slim Fit Denim Jeans',
    price: 3999,
    category: 'jeans-pants',
    subcategory: 'Female',
    image: '/images/products/jeans-pants/j2.jpg',
    description: 'Stylish slim fit jeans for everyday elegance',
    sizes: ['24', '26', '28', '30', '32'],
    colors: ['Dark Blue', 'Light Blue', 'Black']
  },
  {
    id: 19,
    name: 'Straight Cut Jeans',
    price: 3999,
    category: 'jeans-pants',
    subcategory: 'Male',
    image: '/images/products/jeans-pants/j3.jpg',
    description: 'Classic straight fit jeans with timeless style',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black']
  },

  // Tops (Women)
  {
    id: 8,
    name: 'Elegant Silk Blouse',
    price: 2999,
    category: 'tops-women',
    subcategory: 'Blouses',
    image: '/images/products/tops-women/wx.jpg',
    description: 'Luxurious silk blouse with elegant drape',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Black', 'Cream', 'Navy']
  },
  {
    id: 9,
    name: 'Casual Tank Top',
    price: 2999,
    category: 'tops-women',
    subcategory: 'Tank Tops',
    image: '/images/products/tops-women/wx1.jpg',
    description: 'Comfortable and stylish tank top',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Gray']
  },
  {
    id: 21,
    name: 'Professional Blouse',
    price: 2999,
    category: 'tops-women',
    subcategory: 'Blouses',
    image: '/images/products/tops-women/wx3.jpg',
    description: 'Elegant formal top with sophisticated design',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Navy', 'Gray']
  },

  // One Piece
  {
    id: 10,
    name: 'Leather One Piece',
    price: 3499,
    category: 'one-piece',
    subcategory: 'Leather',
    image: '/images/products/one-piece/op1.jpg',
    description: 'Bold leather one piece for statement looks',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Brown', 'Red']
  },
  {
    id: 11,
    name: 'Denim One Piece',
    price: 3399,
    category: 'one-piece',
    subcategory: 'Denim',
    image: '/images/products/one-piece/oa2.jpg',
    description: 'Classic denim one piece with modern cut',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Dark Blue', 'Light Blue', 'Black']
  },
  {
    id: 15,
    name: 'Elegant One Piece',
    price: 4999,
    category: 'one-piece',
    subcategory: 'Cotton',
    image: '/images/products/one-piece/o1.jpg',
    description: 'Elegant cotton one piece with sophisticated design',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Navy']
  },
  {
    id: 16,
    name: 'Casual One Piece',
    price: 3199,
    category: 'one-piece',
    subcategory: 'Cotton',
    image: '/images/products/one-piece/o2.jpg',
    description: 'Comfortable casual one piece for everyday wear',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Gray']
  },
  {
    id: 17,
    name: 'Premium One Piece',
    price: 4299,
    category: 'one-piece',
    subcategory: 'Leather',
    image: '/images/products/one-piece/o3.jpg',
    description: 'Premium leather one piece with luxury finish',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Brown', 'Red']
  },
  {
    id: 18,
    name: 'Designer One Piece',
    price: 5499,
    category: 'one-piece',
    subcategory: 'Denim',
    image: '/images/products/one-piece/oa1.jpg',
    description: 'Designer denim one piece with unique styling',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Dark Blue', 'Light Blue', 'Black']
  },

  // Boxers (Boys)
  {
    id: 12,
    name: 'Cotton Boxers',
    price: 1999,
    category: 'boxers-boys',
    subcategory: 'Cotton',
    image: '/images/products/boxers-boys/box1.jpg',
    description: 'Comfortable cotton boxers for everyday wear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Gray']
  },
  {
    id: 13,
    name: 'Silk Boxers',
    price: 2199,
    category: 'boxers-boys',
    subcategory: 'Silk',
    image: '/images/products/boxers-boys/box 2.jpg',
    description: 'Luxurious silk boxers for premium comfort',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy']
  }
];

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};
