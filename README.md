# Nlytix.com Website

A dynamic, interactive website showcasing Nlytix's data analytics services with rotating visual themes and engaging animations.

## 🌟 Overview

This website features a unique rotating display system that cycles through different visual themes, each with its own color scheme, background, and motto. The site combines modern web design with smooth animations and responsive functionality.

## 📁 Project Structure

```
nlytix.com/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript functionality and logic
├── tools.ipynb         # Image processing notebook (PNG resizer)
├── README.md           # This documentation
└── images/             # Image assets (PNG files)
    ├── nlytix_gold.png
    ├── nlytix_flowers.png
    ├── nlytix_jello.png
    ├── nlytix_glass.png
    ├── nlytix_wood.png
    └── nlytix_paint.png
```

## 🎨 Features

### 1. **Dynamic Theme Rotation**
- 6 unique visual themes that rotate every 12 seconds
- Each theme includes:
  - Custom background color
  - Unique frame color
  - Themed motto/tagline
  - Coordinated color palette

### 2. **Interactive Menu System**
- Four main sections:
  - **Info**: About Nlytix and company overview
  - **AIA**: AI & Analytics services
  - **Blog**: Insights and industry updates
  - **Hectomega**: Enterprise solutions platform

### 3. **Visual Effects**
- 3D hover effects on the main image
- Smooth color transitions (2-second duration)
- Fade-in/fade-out animations
- Responsive design for mobile devices

### 4. **Countdown Timer**
- 10-second countdown showing time until next theme change
- Visual feedback for user engagement

### 5. **Click-to-Action**
- Main image links to LinkedIn profile
- Hover effects reveal "click me" indicator

## 🔧 Technical Implementation

### HTML Structure (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags and external resource links -->
</head>
<body>
    <!-- Menu bar with navigation items -->
    <!-- Expandable menu content area -->
    <!-- Main content with image and tagline -->
    <!-- External JavaScript import -->
</body>
</html>
```

### CSS Architecture (`styles.css`)
- **Reset styles**: Universal box-sizing and margin/padding reset
- **Layout system**: Flexbox-based responsive layout
- **Component styles**: Modular styling for menu, image, and content areas
- **Animations**: Smooth transitions and hover effects
- **Responsive design**: Mobile-first approach with media queries

### JavaScript Logic (`script.js`)

#### Core Components:

1. **Theme Configuration**
```javascript
const combinations = [
    {
        image: 'nlytix_gold.png',
        frameColor: '#AF833D',
        motto: 'Separating the data gold from the visualization glitter',
        mottoColor: '#D1B566',
        backgroundColor: '#2C1810',
        menuColor: '#AF833D'
    },
    // ... 5 more themes
];
```

2. **RandomBag Class**
- Ensures all themes are shown before repeating
- Implements shuffled selection without immediate repetition
- Provides fair distribution of themes

3. **DOM Management**
- Clean separation of DOM queries and event handling
- Proper initialization using `DOMContentLoaded`
- Efficient element caching

4. **Animation Controller**
- Coordinated timing for smooth transitions
- Staggered updates for visual appeal
- Countdown synchronization

## 🎯 Theme Breakdown

| Theme | Primary Color | Motto | Visual Style |
|-------|---------------|-------|--------------|
| **Gold** | `#AF833D` | "Separating the data gold from the visualization glitter" | Elegant, premium |
| **Flowers** | `#47601B` | "Chaos becomes beauty when data needs are refined" | Natural, organic |
| **Jello** | `#C63F1F` | "Teams gel when data needs thicken and set" | Playful, dynamic |
| **Glass** | `#ED8B43` | "The sun always shines on data" | Clean, transparent |
| **Wood** | `#8B4513` | "Woodn't it be nice if data grew on trees?" | Warm, grounded |
| **Paint** | `#306FC5` | "Correlation between finger painting and data literacy" | Creative, artistic |

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development) or hosting platform

### Installation
1. Clone or download the project files
2. Ensure all image assets are in the same directory as HTML file
3. Open `index.html` in a web browser or serve via web server

### Local Development
```bash
# Using Python's built-in server
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP's built-in server
php -S localhost:8000
```

## 📱 Responsive Design

### Desktop (>768px)
- Full hover effects and animations
- Large images (350px width)
- Complete menu spacing
- 3D transforms on hover

### Mobile (≤768px)
- Simplified animations
- Smaller images (250px width)
- Condensed menu layout
- Touch-optimized interactions

## 🔄 Animation Timeline

1. **Page Load** (0s): Initialize with random theme
2. **Initial Display** (0-12s): Show first theme with countdown
3. **Theme Transition** (12s): 
   - Fade out current image (1s)
   - Change background colors (2s)
   - Load new image (0.1s)
   - Update frame colors (0.5s)
   - Fade in new image
4. **Repeat Cycle**: Every 12 seconds

## 🛠️ Image Processing Tool

The project includes `tools.ipynb`, a Jupyter notebook for processing PNG images:

### Features:
- Resize PNG images to 400px height (auto width)
- Batch processing from input to output folders
- Maintains aspect ratios
- High-quality LANCZOS resampling
- Advanced options for prefixes, suffixes, and optimization

### Usage:
1. Open `tools.ipynb` in Jupyter Notebook/Lab
2. Configure input and output folder paths
3. Run the cells to process images

## 🎨 Customization

### Adding New Themes
1. Add image file to project directory
2. Add new theme object to `combinations` array in `script.js`:
```javascript
{
    image: 'your_image.png',
    frameColor: '#HEXCOLOR',
    motto: 'Your custom motto',
    mottoColor: '#HEXCOLOR',
    backgroundColor: '#HEXCOLOR',
    menuColor: '#HEXCOLOR'
}
```

### Modifying Timing
- Change rotation interval: Modify `setInterval(updateContent, 12000)` value
- Adjust countdown: Modify `timeRemaining = 10` in `startCountdown()`
- Transition speeds: Update CSS `transition` properties

### Styling Updates
- Colors: Update CSS custom properties or individual selectors
- Fonts: Modify `font-family` declarations in `styles.css`
- Layout: Adjust flexbox properties and spacing

## 🔗 External Links

- **LinkedIn**: [linkedin.com/in/nlytix](https://linkedin.com/in/nlytix)
- **Main Image Click**: Opens LinkedIn profile in new tab

## 📊 Performance Considerations

- **Image Optimization**: Images are optimized for web delivery
- **CSS Transitions**: Hardware-accelerated transforms
- **JavaScript Efficiency**: Minimal DOM queries, cached elements
- **Resource Loading**: External CSS/JS files for better caching

## 🐛 Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **IE11**: Limited support (no CSS Grid, reduced animations)

## 📝 License

This project is proprietary software for Nlytix. All rights reserved.

## 🤝 Contributing

This is a private project. For contributions or suggestions, please contact the development team.

---

*Built with ❤️ for data visualization and analytics excellence.*
