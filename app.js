// World Food Map Application

// Regional food data
const regionalFoods = {
    "North America": [
        { name: "Hamburger", description: "Classic American beef burger" },
        { name: "Maple Syrup", description: "Sweet Canadian syrup from maple trees" },
        { name: "Tacos", description: "Mexican corn or wheat tortillas with fillings" },
        { name: "Hot Dog", description: "Grilled sausage in a bun" },
        { name: "BBQ Ribs", description: "Slow-cooked pork ribs with sauce" }
    ],
    "South America": [
        { name: "Empanadas", description: "Baked or fried pastry with filling" },
        { name: "Ceviche", description: "Raw fish cured in citrus juices" },
        { name: "Feijoada", description: "Brazilian black bean and pork stew" },
        { name: "Asado", description: "Argentine grilled meat" },
        { name: "Arepas", description: "Venezuelan corn cakes" }
    ],
    "Europe": [
        { name: "Pizza", description: "Italian flatbread with toppings" },
        { name: "Croissant", description: "French buttery pastry" },
        { name: "Paella", description: "Spanish rice dish with seafood" },
        { name: "Fish & Chips", description: "British fried fish with potato chips" },
        { name: "Sauerkraut", description: "German fermented cabbage" }
    ],
    "Africa": [
        { name: "Injera", description: "Ethiopian sourdough flatbread" },
        { name: "Tagine", description: "North African slow-cooked stew" },
        { name: "Jollof Rice", description: "West African one-pot rice dish" },
        { name: "Bobotie", description: "South African spiced meat dish" },
        { name: "Couscous", description: "North African steamed semolina" }
    ],
    "Middle East": [
        { name: "Hummus", description: "Chickpea dip with tahini" },
        { name: "Falafel", description: "Deep-fried chickpea balls" },
        { name: "Shawarma", description: "Roasted meat wrap" },
        { name: "Baklava", description: "Sweet pastry with nuts and honey" },
        { name: "Kebab", description: "Grilled meat skewers" }
    ],
    "Asia": [
        { name: "Sushi", description: "Japanese vinegared rice with fish" },
        { name: "Dumplings", description: "Chinese filled dough pockets" },
        { name: "Kimchi", description: "Korean fermented vegetables" },
        { name: "Curry", description: "Indian spiced dish with sauce" },
        { name: "Peking Duck", description: "Chinese roasted duck specialty" }
    ],
    "Southeast Asia": [
        { name: "Pad Thai", description: "Thai stir-fried rice noodles" },
        { name: "Pho", description: "Vietnamese noodle soup" },
        { name: "Nasi Goreng", description: "Indonesian fried rice" },
        { name: "Satay", description: "Grilled meat skewers with peanut sauce" },
        { name: "Tom Yum", description: "Thai hot and sour soup" }
    ],
    "Oceania": [
        { name: "Meat Pie", description: "Australian savory pie" },
        { name: "Pavlova", description: "Meringue dessert with fruit" },
        { name: "Lamington", description: "Australian sponge cake with chocolate" },
        { name: "Hangi", description: "Maori earth oven cooked food" },
        { name: "Vegemite", description: "Australian yeast spread" }
    ]
};

// Application state
let currentRegion = null;
let userFoods = loadUserFoods();

// DOM elements
const regions = document.querySelectorAll('.region');
const foodPanel = document.getElementById('foodPanel');
const regionName = document.getElementById('regionName');
const typicalFoodsList = document.getElementById('typicalFoodsList');
const userFoodsList = document.getElementById('userFoodsList');
const addFoodForm = document.getElementById('addFoodForm');
const closePanel = document.getElementById('closePanel');
const foodNameInput = document.getElementById('foodName');
const foodDescriptionInput = document.getElementById('foodDescription');

// Initialize the app
function init() {
    // Add click handlers to regions
    regions.forEach(region => {
        region.addEventListener('click', handleRegionClick);
    });

    // Add close panel handler
    closePanel.addEventListener('click', closeFood Panel);

    // Add form submit handler
    addFoodForm.addEventListener('submit', handleAddFood);

    // Add touch support for mobile
    regions.forEach(region => {
        region.addEventListener('touchstart', handleRegionClick);
    });
}

// Handle region click
function handleRegionClick(event) {
    const regionElement = event.target;
    const regionNameText = regionElement.dataset.region;

    // Remove previous selection
    regions.forEach(r => r.classList.remove('selected'));

    // Select current region
    regionElement.classList.add('selected');
    currentRegion = regionNameText;

    // Display food data
    displayRegionFoods(regionNameText);
}

// Display foods for selected region
function displayRegionFoods(region) {
    regionName.textContent = region;

    // Display typical foods
    const typicalFoods = regionalFoods[region] || [];
    typicalFoodsList.innerHTML = '';

    if (typicalFoods.length === 0) {
        typicalFoodsList.innerHTML = '<li class="empty-state">No typical foods listed yet.</li>';
    } else {
        typicalFoods.forEach(food => {
            const li = createFoodListItem(food);
            typicalFoodsList.appendChild(li);
        });
    }

    // Display user-added foods
    const userRegionFoods = userFoods[region] || [];
    userFoodsList.innerHTML = '';

    if (userRegionFoods.length === 0) {
        userFoodsList.innerHTML = '<li class="empty-state">No community additions yet. Be the first!</li>';
    } else {
        userRegionFoods.forEach((food, index) => {
            const li = createFoodListItem(food, true, index);
            userFoodsList.appendChild(li);
        });
    }

    // Scroll to top of panel
    foodPanel.scrollTop = 0;
}

// Create food list item
function createFoodListItem(food, isUserFood = false, index = null) {
    const li = document.createElement('li');

    const nameSpan = document.createElement('span');
    nameSpan.className = 'food-item-name';
    nameSpan.textContent = food.name;

    li.appendChild(nameSpan);

    if (food.description) {
        const descDiv = document.createElement('div');
        descDiv.className = 'food-item-desc';
        descDiv.textContent = food.description;
        li.appendChild(descDiv);
    }

    // Add delete button for user foods
    if (isUserFood) {
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-food-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteUserFood(index);
        li.appendChild(deleteBtn);
    }

    return li;
}

// Handle add food form submission
function handleAddFood(event) {
    event.preventDefault();

    if (!currentRegion) {
        alert('Please select a region first!');
        return;
    }

    const foodName = foodNameInput.value.trim();
    const foodDescription = foodDescriptionInput.value.trim();

    if (!foodName) {
        alert('Please enter a food name!');
        return;
    }

    // Add food to user foods
    if (!userFoods[currentRegion]) {
        userFoods[currentRegion] = [];
    }

    userFoods[currentRegion].push({
        name: foodName,
        description: foodDescription || ''
    });

    // Save to localStorage
    saveUserFoods();

    // Refresh display
    displayRegionFoods(currentRegion);

    // Clear form
    foodNameInput.value = '';
    foodDescriptionInput.value = '';

    // Show success feedback
    showFeedback('Food added successfully!');
}

// Delete user food
function deleteUserFood(index) {
    if (!currentRegion || !userFoods[currentRegion]) {
        return;
    }

    if (confirm('Are you sure you want to delete this food?')) {
        userFoods[currentRegion].splice(index, 1);

        // Clean up empty arrays
        if (userFoods[currentRegion].length === 0) {
            delete userFoods[currentRegion];
        }

        // Save to localStorage
        saveUserFoods();

        // Refresh display
        displayRegionFoods(currentRegion);

        showFeedback('Food deleted successfully!');
    }
}

// Close food panel
function closeFoodPanel() {
    regions.forEach(r => r.classList.remove('selected'));
    currentRegion = null;
    regionName.textContent = 'Select a region';
    typicalFoodsList.innerHTML = '';
    userFoodsList.innerHTML = '';
    foodNameInput.value = '';
    foodDescriptionInput.value = '';
}

// LocalStorage functions
function saveUserFoods() {
    try {
        localStorage.setItem('worldFoodMapUserFoods', JSON.stringify(userFoods));
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        alert('Could not save data. Your browser may have localStorage disabled.');
    }
}

function loadUserFoods() {
    try {
        const saved = localStorage.getItem('worldFoodMapUserFoods');
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        console.error('Error loading from localStorage:', e);
        return {};
    }
}

// Show feedback message
function showFeedback(message) {
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
    `;
    feedback.textContent = message;

    document.body.appendChild(feedback);

    // Remove after 3 seconds
    setTimeout(() => {
        feedback.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 3000);
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        regionalFoods,
        saveUserFoods,
        loadUserFoods
    };
}
