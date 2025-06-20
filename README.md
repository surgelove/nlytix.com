# Nlytix.com - Dynamic Data Analytics Website

A sophisticated, interactive website showcasing Nlytix's data analytics and AI services through dynamic visual themes, responsive design, and engaging user experiences.

## 🌟 Overview

Nlytix.com features a unique rotating display system that cycles through 8 different visual themes, each with its own color scheme, background, motto, and artistic style. The site combines modern web development practices with smooth animations, responsive functionality, and a comprehensive blog section.

## 📁 Project Structure

```
nlytix.com/
├── index.html              # Main website entry point
├── styles.css              # Global styling and animations
├── script.js               # Core JavaScript functionality
├── tools.ipynb             # Image processing utilities
├── README.md               # Project documentation
├── webmaster.md            # Technical documentation
├── blog/                   # Blog section
│   ├── index.html          # Blog index with image gallery
│   ├── data-fundamentals.html
│   ├── analytics-insights.html
│   └── ai-revolution.html
└── assets/                 # Visual assets
    ├── Aia.png             # AI assistant branding
    ├── nlytix_broadway.png
    ├── nlytix_daycare.png
    ├── nlytix_flowers.png
    ├── nlytix_glass.png
    ├── nlytix_gold.png
    ├── nlytix_jello.png
    ├── nlytix_paint.png
    ├── nlytix_silvervelvet.png
    └── nlytix_wood.png
```

## ✨ Key Features

### 🎨 Dynamic Theme System
- **8 unique visual themes** that rotate randomly
- **12-second intervals** with countdown timer
- **Coordinated color palettes** affecting background, menu, and frame colors
- **Smooth transitions** between themes (2-second background fade)
- **No immediate repetition** using RandomBag algorithm

### 🧭 Interactive Navigation
- **4 main menu sections:**
  - **About**: Company overview with external links
  - **Aia**: AI trading assistant with image and description
  - **Blog**: Content hub with direct navigation
  - **Hectomega**: Trading platform information
- **Click-anywhere-to-close** menu functionality
- **Dynamic menu heights** that adjust to content
- **Special AIA styling** with light background theme

### 📚 Blog Section
- **Responsive blog index** with 3 featured articles
- **Complete image gallery** displaying all 9 themed PNG files
- **Full-screen image viewer** with modal functionality
- **Consistent styling** matching main site aesthetic
- **Mobile-optimized** layout and interactions

### 🎯 User Experience
- **Random initial display** (no fixed starting theme)
- **Hover effects** with 3D transforms
- **Responsive design** for desktop and mobile
- **Keyboard navigation** (Escape key closes modals)
- **Auto-reload failsafe** if countdown goes negative
- **Visual feedback** with hover states and animations

## 🛠️ Technical Implementation

### Core Architecture

**HTML Structure:**
- Semantic markup with accessibility considerations
- Modular component design
- Progressive enhancement approach

**CSS Features:**
- CSS Grid and Flexbox for responsive layouts
- Custom animations and keyframes
- Mobile-first responsive design
- CSS transitions for smooth state changes

**JavaScript Functionality:**
- ES6+ modern syntax
- Event-driven architecture
- DOM manipulation optimization
- RandomBag pattern for fair theme distribution

### Theme Configuration

```javascript
const combinations = [
    {
        image: 'nlytix_gold.png',
        frameColor: '#AF833D',
        motto: 'Intelligently separating the data gold from the visualization glitter.',
        mottoColor: '#D1B566',
        backgroundColor: '#2C1810',
        menuColor: '#AF833D'
    },
    // ... 7 additional themes
];
```

### RandomBag Algorithm
Ensures fair distribution of themes without immediate repetition:
- Shuffles all themes into a "bag"
- Draws themes randomly until bag is empty
- Refills and reshuffles for next cycle
- Prevents monotonous patterns

## � Visual Themes

| Theme | Accent Color | Visual Style | Motto Theme |
|-------|-------------|--------------|-------------|
| **Gold** | `#AF833D` | Premium, elegant | Data refinement |
| **Flowers** | `#47601B` | Natural, organic | Beauty from chaos |
| **Jello** | `#C63F1F` | Playful, dynamic | Team cohesion |
| **Glass** | `#ED8B43` | Clean, transparent | Data clarity |
| **Wood** | `#8B4513` | Warm, grounded | Natural data growth |
| **Paint** | `#306FC5` | Creative, artistic | Data literacy skills |
| **Daycare** | `#E58D35` | Nurturing, caring | Data environment care |
| **Broadway** | `#605E69` | Theatrical, dramatic | Data presentation |
| **Silver Velvet** | `#605E69` | Luxurious, smooth | Premium data handling |

## 🚀 Getting Started

### Prerequisites
- Modern web browser with ES6+ support
- Local web server (for proper CORS handling)
- All image assets in project root

### Quick Start
```bash
# Clone the repository
git clone [repository-url]
cd nlytix.com

# Start local server (choose one)
python -m http.server 8000        # Python
npx http-server                   # Node.js
php -S localhost:8000             # PHP

# Open browser to localhost:8000
```

### Development Setup
1. Ensure all PNG assets are in the root directory
2. Test on multiple screen sizes
3. Verify all external links are functional
4. Check image gallery modal functionality

## 📱 Responsive Design

### Desktop Experience (>768px)
- Full 3D hover effects
- Large images (350px framed display)
- Complete animation set
- Multi-column blog layout
- Expanded menu spacing

### Mobile Experience (≤768px)
- Touch-optimized interactions
- Scaled images (250px display)
- Simplified animations
- Single-column layouts
- Compact menu design
- Optimized image gallery

## � Customization Guide

### Adding New Themes
1. Add PNG image to root directory
2. Update `combinations` array in `script.js`
3. Add image to blog gallery if desired
4. Test color coordination

### Modifying Behavior
- **Rotation timing**: Change `setInterval` value (default: 12000ms)
- **Countdown duration**: Modify `timeRemaining` (default: 10 seconds)
- **Transition speed**: Adjust CSS `transition` properties

### Content Updates
- **Menu content**: Edit `menuContents` object in `script.js`
- **Blog posts**: Modify individual HTML files in `/blog/`
- **External links**: Update URLs in menu content

## �️ Image Processing

### Tools.ipynb Features
- **Batch PNG processing** with quality preservation
- **Aspect ratio maintenance** during resizing
- **Configurable output dimensions**
- **Folder-based batch operations**
- **Advanced resampling options**

### Usage Example
```python
# Configure paths and run processing
input_folder = "original_images"
output_folder = "processed_images"
target_height = 400
# Process all images maintaining aspect ratios
```

## � Blog System

### Features
- **Article index** with preview cards
- **Full-screen image viewer** for gallery
- **Responsive image grid** (100px thumbnails)
- **Modal navigation** with keyboard support
- **Consistent branding** with main site

### Content Structure
- **Data Fundamentals**: Foundation concepts
- **Analytics Insights**: Business intelligence focus
- **AI Revolution**: Artificial intelligence trends

## 🔗 External Integrations

- **LinkedIn Profile**: Direct professional networking link
- **GitHub Repository**: Source code access
- **Hectomega Platform**: Trading challenge site
- **Social Media**: Expandable for future platforms

## 📊 Performance Optimizations

### Loading Strategy
- **Optimized image assets** for web delivery
- **Efficient DOM caching** to minimize queries
- **Hardware-accelerated CSS** animations
- **Lazy loading considerations** for future expansion

### Browser Compatibility
- **Modern browsers**: Full feature support
- **Progressive enhancement**: Graceful degradation
- **Touch device optimization**: Mobile-first approach
- **Accessibility features**: Keyboard navigation support

## 🐛 Troubleshooting

### Common Issues
- **Images not loading**: Check file paths and CORS policy
- **Menu not opening**: Verify JavaScript is enabled
- **Animations not smooth**: Check browser hardware acceleration
- **Mobile layout issues**: Test viewport meta tag

### Debug Features
- **Console logging**: Available for development
- **Auto-reload failsafe**: Prevents countdown errors
- **Error handling**: Graceful degradation patterns

## � Future Enhancements

### Planned Features
- **Dynamic image loading** from directory scanning
- **Theme customization** user interface
- **Blog CMS integration** for easier content management
- **Analytics tracking** for user engagement
- **SEO optimizations** for better discoverability

### Technical Improvements
- **Service worker** for offline functionality
- **Image optimization** with WebP format support
- **Component-based architecture** for better maintainability
- **Automated testing** suite implementation

## 📝 License & Credits

**Copyright © 2025 Nlytix Inc. All rights reserved.**

This project represents proprietary software developed for Nlytix's digital presence. All visual assets, code, and content are protected intellectual property.

### Technologies Used
- **Vanilla JavaScript** (ES6+)
- **CSS3** with advanced features
- **HTML5** semantic markup
- **Responsive Web Design** principles
- **Modern browser APIs**

---

*Crafted with precision for data analytics excellence* ✨

**Live Site**: [nlytix.com](https://nlytix.com)  
**Contact**: [LinkedIn Profile](https://linkedin.com/in/nlytix)  
**Version**: 2.0 (2025)
