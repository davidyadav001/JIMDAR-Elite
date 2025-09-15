# JIMDAR Elite - Image Organization Guide

## 📁 Folder Structure

### 🎯 **Products Images** (`/products/`)
Organize your product images by category:

- **`tshirts/`** - T-shirt product images
- **`formal-pants/`** - Formal pants product images  
- **`jeans-pants/`** - Jeans product images
- **`tops-women/`** - Women's tops product images
- **`mini-skirts/`** - Mini skirts product images
- **`boxers-boys/`** - Boxers product images

### 🖼️ **Other Images**
- **`hero/`** - Hero section images, banners
- **`banners/`** - Promotional banners
- **`logos/`** - Brand logos and assets
- **`icons/`** - UI icons and graphics

## 📋 **Image Guidelines**

### ✅ **Recommended Specifications:**
- **Format**: JPG, PNG, WebP
- **Size**: 500x600px (optimal for product cards)
- **Quality**: High resolution, well-lit
- **Naming**: Use descriptive names (e.g., `elite-classic-tee-black.jpg`)

### 📝 **Naming Convention:**
```
product-name-color-variant.jpg
Examples:
- elite-classic-tee-black.jpg
- luxury-vneck-tee-white.jpg
- premium-denim-jeans-dark-blue.jpg
```

## 🔗 **How to Use Images in Code**

### **For Product Images:**
```javascript
// In products.js
image: '/images/products/tshirts/elite-classic-tee-black.jpg'
```

### **For Hero/Banner Images:**
```javascript
// In components
src="/images/hero/jimdar-hero-banner.jpg"
```

## 📂 **Quick Start:**
1. **Add your JPG images** to the appropriate category folders
2. **Update the image paths** in `src/data/products.js`
3. **Test the display** in your application

## 🎨 **Pro Tips:**
- Keep images under 500KB for fast loading
- Use consistent lighting and backgrounds
- Consider creating multiple angles for each product
- Optimize images for web (compress if needed)

---
**Happy organizing! 🎉**
