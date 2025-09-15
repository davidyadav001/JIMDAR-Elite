# JIMDAR Elite - Premium E-commerce Website

A luxury clothing brand e-commerce website built with React, TailwindCSS, and Three.js. Features a dark, premium design with smooth animations and a complete shopping experience.

## 🚀 Features

### Design & Branding
- **Premium Dark Theme** with custom color palette (`#14202E`, `#091235`, `#2B4257`, `#88A9C3`)
- **Luxury Typography** using Playfair Display (serif) and Inter (sans-serif)
- **Smooth Animations** with hover effects, transitions, and 3D elements
- **Responsive Design** optimized for desktop, tablet, and mobile

### 3D Animation
- **Three.js Integration** with rotating product cube and floating particles
- **Lightweight Performance** - animations don't block UI interactions
- **Interactive 3D Scene** with orbit controls and auto-rotation

### Product Categories
- **T-Shirts** (Male, Female, Unisex)
- **Formal Pants** (Male, Female)
- **Jeans Pants** (Male, Female)
- **Tops (Women)** (Blouses, Tank Tops, Crop Tops)
- **Mini Skirts (Women)** (Denim, Leather, Cotton)
- **Boxers (Boys)** (Cotton, Silk, Athletic)

### Shopping Features
- **Product Cards** with hover animations and quick actions
- **Shopping Cart** with quantity management and real-time totals
- **Favorites System** to save and manage preferred items
- **Product Detail Pages** with size/color selection and image galleries
- **Advanced Filtering** by category, subcategory, price range, and sorting

### Payment Integration
- **Stripe Test Mode** integration for secure payments
- **Checkout Flow** with billing information and card processing
- **Order Confirmation** with detailed order summary and tracking

### User Experience
- **Intuitive Navigation** with sticky header and mobile menu
- **Search & Filter** functionality across all products
- **Contact Form** with validation and submission handling
- **Loading States** and error handling throughout the app

## 🛠️ Tech Stack

- **Frontend**: React 18 with React Router
- **Styling**: TailwindCSS with custom configuration
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Payment**: Stripe (test mode)
- **State Management**: React Context API
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jimdar-elite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- `jimdar-dark`: #14202E (main background)
- `jimdar-darker`: #091235 (cards and accents)
- `jimdar-blue`: #2B4257 (borders and highlights)
- `jimdar-light`: #88A9C3 (text and secondary elements)

### Adding Products
Edit `src/data/products.js` to add new products or categories:
```javascript
{
  id: 14,
  name: 'New Product',
  price: 199.99,
  category: 'tshirts',
  subcategory: 'Male',
  image: 'https://images.unsplash.com/...',
  description: 'Product description',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Black', 'White']
}
```

### Stripe Configuration
Update the Stripe public key in `src/pages/Checkout.js`:
```javascript
const stripePromise = loadStripe('pk_test_your_stripe_public_key');
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── ProductCard.js  # Product display card
│   └── ThreeScene.js   # 3D animation component
├── context/            # React Context providers
│   ├── CartContext.js  # Shopping cart state
│   └── FavoritesContext.js # Favorites state
├── data/               # Static data
│   └── products.js     # Product and category data
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Categories.js   # Product listing
│   ├── Cart.js         # Shopping cart
│   ├── Favorites.js    # Saved items
│   ├── Contact.js      # Contact form
│   ├── ProductDetail.js # Product details
│   ├── Checkout.js     # Payment process
│   └── OrderConfirmation.js # Order success
└── App.js              # Main app component
```

## 🎯 Key Features Implementation

### 3D Animation
The Three.js integration creates an engaging visual experience:
- Rotating product cube with metallic material
- Floating particle system
- Smooth camera controls and auto-rotation
- Performance-optimized rendering

### State Management
Uses React Context for global state:
- Cart management with add/remove/update functionality
- Favorites system with persistent storage
- Real-time UI updates across components

### Payment Flow
Complete e-commerce checkout process:
- Billing information collection
- Stripe payment method integration
- Order confirmation with tracking details
- Error handling and loading states

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service:
   - Vercel
   - Netlify
   - AWS S3
   - Any static hosting service

## 📞 Support

For questions or support, please contact:
- Email: support@jimdarelite.com
- Website: [JIMDAR Elite](https://jimdarelite.com)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**JIMDAR Elite** - *Wear the Elite* ✨