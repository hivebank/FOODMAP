# 🌍 World Food Map

An interactive HTML5 web application that showcases typical foods from different regions around the world. Users can explore regional cuisines and contribute their own food discoveries.

## Features

- **Interactive World Map**: Click on different regions to explore their typical foods
- **Pre-populated Food Data**: Each region comes with 5 typical foods and descriptions
- **User Contributions**: Add your own foods to any region
- **Local Storage**: All user-added foods are saved locally in your browser
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Mobile-Friendly**: Touch-enabled for smartphones and tablets
- **Beautiful UI**: Modern, gradient design with smooth animations

## Regions Covered

1. **North America** - USA, Canada, Mexico
2. **South America** - Brazil, Argentina, Peru, Colombia, Venezuela
3. **Europe** - Italy, France, Spain, UK, Germany, and more
4. **Africa** - Ethiopia, Morocco, West Africa, South Africa
5. **Middle East** - Lebanon, Turkey, Iran, and surrounding areas
6. **Asia** - Japan, China, Korea, India
7. **Southeast Asia** - Thailand, Vietnam, Indonesia
8. **Oceania** - Australia, New Zealand

## How to Use

### For Users

1. **Open the App**: Simply open `index.html` in any modern web browser
2. **Explore Regions**: Click on any region on the map to see its typical foods
3. **View Foods**: Browse through the typical foods and community additions
4. **Add Your Food**: Fill out the form to add your own food to the selected region
5. **Delete Foods**: Remove any foods you've added using the delete button

### For Developers

#### Running Locally

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the folder
cd FOODMAP

# Open in browser (any of these methods)
# Method 1: Double-click index.html
# Method 2: Use a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000

# Method 3: Use VS Code Live Server extension
```

#### File Structure

```
FOODMAP/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── app.js          # Application logic and interactivity
└── README.md       # This file
```

#### Technologies Used

- **HTML5**: Semantic markup and SVG for the map
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **Vanilla JavaScript**: No frameworks needed!
- **LocalStorage API**: For persisting user data

## Features in Detail

### Interactive Map
- SVG-based world map with clickable regions
- Hover effects with visual feedback
- Selected region highlighting with pulse animation

### Food Management
- **Typical Foods**: Curated list of iconic foods per region
- **Community Additions**: User-contributed foods saved locally
- **Add Food**: Simple form with name and optional description
- **Delete Food**: Remove your contributions with confirmation

### Data Persistence
- Uses browser's localStorage to save user-added foods
- Data persists across sessions
- Separate storage per region
- Easy to clear (just clear browser data)

### Responsive Design
- Desktop: Side-by-side map and food panel
- Tablet: Stacked layout for better viewing
- Mobile: Optimized touch targets and text sizes
- All screen sizes supported from 320px and up

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (version 90+)
- Firefox (version 88+)
- Safari (version 14+)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential features for future versions:
- [ ] More detailed map with country-level data
- [ ] Food images and photos
- [ ] Search functionality
- [ ] Filter foods by category (desserts, main dishes, etc.)
- [ ] Share foods with others (backend integration)
- [ ] User ratings and reviews
- [ ] Food recipes
- [ ] Multi-language support
- [ ] Export/import food data

## Contributing

Feel free to contribute by:
1. Adding more typical foods to the regional data
2. Improving the map SVG for better accuracy
3. Enhancing the UI/UX
4. Adding new features
5. Fixing bugs
6. Improving documentation

## License

This project is open source and available for educational and personal use.

## Acknowledgments

- Food data curated from various culinary sources
- Inspired by the rich diversity of world cuisines
- Built with ❤️ for food lovers everywhere

---

**Enjoy exploring the world's flavors!** 🍕🍜🌮🍣🥘
