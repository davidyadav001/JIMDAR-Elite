import { convertToNPR } from '../utils/currency';

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
    name: 'Tops (Women)',
    subcategories: ['Blouses', 'Tank Tops', 'Crop Tops']
  },
  {
    id: 'mini-skirts',
    name: 'Mini Skirts (Women)',
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
    name: 'Elite Classic Tee',
    price: convertToNPR(89.99),
    category: 'tshirts',
    subcategory: 'Male',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    description: 'Premium cotton blend t-shirt with luxury finish',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy']
  },
  {
    id: 2,
    name: 'Luxury V-Neck Tee',
    price: convertToNPR(95.99),
    category: 'tshirts',
    subcategory: 'Female',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
    description: 'Elegant v-neck design with premium materials',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Cream']
  },
  {
    id: 3,
    name: 'Unisex Premium Tee',
    price: convertToNPR(92.99),
    category: 'tshirts',
    subcategory: 'Unisex',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop',
    description: 'Versatile unisex design with modern fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray']
  },

  // Formal Pants
  {
    id: 4,
    name: 'Executive Dress Pants',
    price: convertToNPR(189.99),
    category: 'formal-pants',
    subcategory: 'Male',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    description: 'Professional dress pants with perfect tailoring',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Black', 'Navy', 'Charcoal']
  },
  {
    id: 5,
    name: 'Elegant Trouser',
    price: convertToNPR(179.99),
    category: 'formal-pants',
    subcategory: 'Female',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    description: 'Sophisticated trousers for the modern professional',
    sizes: ['4', '6', '8', '10', '12'],
    colors: ['Black', 'Navy', 'Gray']
  },

  // Jeans Pants
  {
    id: 6,
    name: 'Premium Denim Jeans',
    price: convertToNPR(149.99),
    category: 'jeans-pants',
    subcategory: 'Male',
    image: 'https://images.unsplash.com/photo-1542272604-787c13755354?w=500&h=600&fit=crop',
    description: 'High-quality denim with perfect fit',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black']
  },
  {
    id: 7,
    name: 'Slim Fit Jeans',
    price: convertToNPR(139.99),
    category: 'jeans-pants',
    subcategory: 'Female',
    image: 'https://images.unsplash.com/photo-1542272604-787c13755354?w=500&h=600&fit=crop',
    description: 'Stylish slim fit jeans for everyday elegance',
    sizes: ['24', '26', '28', '30', '32'],
    colors: ['Dark Blue', 'Light Blue', 'Black']
  },

  // Tops (Women)
  {
    id: 8,
    name: 'Silk Blouse',
    price: convertToNPR(199.99),
    category: 'tops-women',
    subcategory: 'Blouses',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    description: 'Luxurious silk blouse with elegant drape',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Black', 'Cream', 'Navy']
  },
  {
    id: 9,
    name: 'Tank Top',
    price: convertToNPR(79.99),
    category: 'tops-women',
    subcategory: 'Tank Tops',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
    description: 'Comfortable and stylish tank top',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Gray']
  },

  // Mini Skirts
  {
    id: 10,
    name: 'Leather Mini Skirt',
    price: convertToNPR(249.99),
    category: 'mini-skirts',
    subcategory: 'Leather',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    description: 'Bold leather mini skirt for statement looks',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Brown', 'Red']
  },
  {
    id: 11,
    name: 'Denim Mini Skirt',
    price: convertToNPR(119.99),
    category: 'mini-skirts',
    subcategory: 'Denim',
    image: 'https://images.unsplash.com/photo-1542272604-787c13755354?w=500&h=600&fit=crop',
    description: 'Classic denim mini skirt with modern cut',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Dark Blue', 'Light Blue', 'Black']
  },

  // Boxers (Boys)
  {
    id: 12,
    name: 'Cotton Boxers',
    price: convertToNPR(39.99),
    category: 'boxers-boys',
    subcategory: 'Cotton',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop',
    description: 'Comfortable cotton boxers for everyday wear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Gray']
  },
  {
    id: 13,
    name: 'Silk Boxers',
    price: convertToNPR(79.99),
    category: 'boxers-boys',
    subcategory: 'Silk',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=600&fit=crop',
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
