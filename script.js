// Predefined combinations - each image has its own frame color and motto
const combinations = [
    {
        image: 'nlytix_gold.png',
        frameColor: '#AF833D',  // Gold
        motto: 'We intelligently separate the data gold from the visualization glitter.',
        mottoColor: '#D1B566',  // Bright gold
        backgroundColor: '#2C1810',  // Dark brown
        menuColor: '#AF833D'  // Same as frame color
    },
    {
        image: 'nlytix_flowers.png',
        frameColor: '#CB8E31',  // Blue
        motto: 'Seeds of data become full bloom insights when your business intelligence needs are refined and expertly addressed.',
        mottoColor: '#F7E14B',  // Sky blue
        backgroundColor: '#4A621B',  // Dark blue-gray
        menuColor: '#CB8E31'  // Same as frame color
    },
    {
        image: 'nlytix_jello.png',
        frameColor: '#C63F1F',  // Red
        motto: 'We have the perfect analytics recipe: teams that gel, insights that set.',
        mottoColor: '#F3EFEC',  // Light cream
        backgroundColor: '#EC752F',  // Dark orange
        menuColor: '#C63F1F'  // Same as frame color
    },
    // {
    //     image: 'nlytix_glass.png',
    //     frameColor: '#ED8B43',  // Green
    //     motto: 'The sun always shines on data: we reveal clear insights that bring your business objectives to life.',
    //     mottoColor: '#7CB598',  // Pale green
    //     backgroundColor: '#0F1A0F',  // Dark green
    //     menuColor: '#ED8B43'  // Same as frame color
    // },
    {
        image: 'nlytix_wood.png',
        frameColor: '#8B4513',  // dark brown
        motto: "Like a woodworker's specialized tools, we choose the right analytical methods for your very specific data challenges.",
        mottoColor: '#8B4513',  // brown
        backgroundColor: '#F5F5DC',  // beige-brown
        menuColor: '#8B4513'  // Same as frame color
    },
    {
        image: 'nlytix_paint.png',
        frameColor: '#306FC5',  // Orange
        motto: 'Like finger painting, raw data starts chaotic - we help you extract from it something beautiful and meaningful.',
        mottoColor: '#CB3A23',  // Light salmon
        backgroundColor: '#F0C643',  // Dark orange-brown
        menuColor: '#306FC5'  // Same as frame color
    },
    {
        image: 'nlytix_daycare.png',
        frameColor: '#E58D35',  // Orange
        motto: 'We take your data through every growth stage - from baby steps to advanced analytics milestones.',
        mottoColor: '#E5B642',  // Light salmon
        backgroundColor: '#3C88B1',  // Dark orange-brown
        menuColor: '#E58D35'  // Same as frame color
    },
    {
        image: 'nlytix_silvervelvet.png',
        frameColor: '#605E69',  // Dark purple
        motto: 'We transform your raw data into pure silver insights with a purple velvet touch.',
        mottoColor: '#C1BFC2',  // Light silver
        backgroundColor: '#29102C',  // Dark purple
        menuColor: '#605E69'  // Same as frame color
    },
    {
        image: 'nlytix_broadway.png',
        frameColor: '#D49334',  // Gold
        motto: 'Every dataset has a story - our AI applications illuminate the insights that deserve a standing ovation.',
        mottoColor: '#E7CC6D',  // Bright gold
        backgroundColor: '#582E0C',  // Dark brown
        menuColor: '#D49334'  // Same as frame color
    },
    {
        image: 'nlytix_beach.png',
        frameColor: '#8C907A',  // Gold
        motto: 'We sift through vast seashell-like datasets, separating valuable insights from useless debris.',
        mottoColor: '#D5C8B9',  // Bright gold
        backgroundColor: '#C7874E',  // Dark brown
        menuColor: '#8C907A'  // Same as frame color
    },
    {
        image: 'nlytix_circuit.png',
        frameColor: '#A04574',  // Gold
        motto: "Our AI transformer model is truly electrifying - it's got all the right connections.",
        mottoColor: '#6ACAC6',  // Bright gold
        backgroundColor: '#26454E',  // Dark brown
        menuColor: '#A04574'  // Same as frame color
    },
    {
        image: 'nlytix_crochet.png',
        frameColor: '#5299B9',  // Gold
        motto: "Knot your average dataset: When your data is all tangled up, we perform yarn-alytics and generate stitch-istics with needle-point precision.",
        mottoColor: '#F4CD48',  // Bright gold
        backgroundColor: '#5B4077',  // Dark brown
        menuColor: '#5299B9'  // Same as frame color
    }
];

// Bag implementation for random selection without immediate repetition
class RandomBag {
    constructor(items) {
        this.originalItems = [...items];
        this.bag = [];
        this.lastDrawn = null;
        this.refillBag();
    }

    refillBag() {
        this.bag = [...this.originalItems];
        // Shuffle the bag
        for (let i = this.bag.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
        }
        // Ensure first item is not the same as last drawn
        if (this.lastDrawn && this.bag.length > 1 && this.bag[this.bag.length - 1] === this.lastDrawn) {
            // Find a different item to swap with the last
            for (let i = 0; i < this.bag.length - 1; i++) {
                if (this.bag[i] !== this.lastDrawn) {
                    [this.bag[i], this.bag[this.bag.length - 1]] = [this.bag[this.bag.length - 1], this.bag[i]];
                    break;
                }
            }
        }
    }

    draw() {
        if (this.bag.length === 0) {
            this.refillBag();
        }
        const item = this.bag.pop();
        this.lastDrawn = item;
        return item;
    }

    // Remove a specific item from the current bag
    removeItem(item) {
        const index = this.bag.findIndex(bagItem => bagItem === item);
        if (index !== -1) {
            this.bag.splice(index, 1);
        }
    }
}

// Create bag for combinations
const combinationBag = new RandomBag(combinations);

// DOM elements
let imageElement, taglineElement, frameElement, containerElement, bodyElement;
let countdownElement, menuBarElement, menuContentElement, menuTextElement;

// Menu content data
const menuContents = {
    about: `
        <h2>About nlytix inc.</h2>
        <p>nlytix (pronounced "Analytics") is a Canadian data analytics and AI consulting company that transforms complex data into actionable insights. We specialize in helping organizations of all sizes unlock the full potential of their data, whether they're working with massive datasets or focused analytics projects.</p>
        <p><a href="mailto:sl@nlytix.com">Email</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://linkedin.com/in/nlytix" target="_blank">LinkedIn</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/surgelove" target="_blank">GitHub</a></p>
    `,
    aia: `
        <div style="display: flex; align-items: flex-start; gap: 20px;">
            <img src="Aia.png" alt="Aia" style="max-width: 150px; height: auto; flex-shrink: 0;">
            <div style="flex: 1;">
                <h2>Aia</h2>
                <p>Aia is an AI-powered trading assistante who specializes in profitable automated trading. She analyzes market instruments by profiling stocks, studying historical patterns, and continuously optimizing her trading algorithms and strategies to maximize returns.</p>
            </div>
        </div>
    `,
    blog: `
        <h2>Blog & Insights</h2>
        <p>Stay updated with the latest trends in data science, analytics, and artificial intelligence through our regularly updated blog.
        Topics cover industry best practices, case studies, and emerging technologies in the data landscape.</p>
        <p><a href="blog/index.html" target="_blank">Visit Blog</a></p>
    `,
    hectomega: `
        <h2>hectomega</h2>
        <p>Hectomega is an ambitious trading challenge that proves small investments can yield extraordinary returns through disciplined strategy and compound growth. Starting with just $100, we systematically trade and reinvest all profits with one goal: reaching $1 million. Powered by Ms. Aia, our AI trading assistante.</p>
        <p><a href="https://hectomega.com" target="_blank">Visit hectomega</a></p>
    `
};

// Menu functionality
let activeMenu = null;

function toggleMenu(menuType) {
    if (activeMenu === menuType) {
        // Close the menu
        closeMenu();
    } else {
        // Open or switch menu
        openMenu(menuType);
    }
}

function openMenu(menuType) {
    activeMenu = menuType;
    
    // If menu is already open, temporarily shrink it for smooth transition
    if (menuContentElement.classList.contains('active')) {
        menuContentElement.style.maxHeight = '0px';
        menuContentElement.style.padding = '0px';
        
        setTimeout(() => {
            // Update content and styling
            menuTextElement.innerHTML = menuContents[menuType];
            
            // Special styling for AIA menu
            if (menuType === 'aia') {
                menuContentElement.style.background = 'rgba(255, 255, 255, 0.9)';
                menuContentElement.style.color = '#333';
            } else {
                menuContentElement.style.background = 'rgba(0, 0, 0, 0.8)';
                menuContentElement.style.color = 'white';
            }
            
            // Calculate content height and expand
            const contentHeight = menuTextElement.scrollHeight + 60; // Add padding
            menuContentElement.style.maxHeight = Math.max(contentHeight, 200) + 'px';
            menuContentElement.style.padding = '30px';
        }, 250); // Half of the transition duration
    } else {
        // First time opening - show content immediately
        menuTextElement.innerHTML = menuContents[menuType];
        menuContentElement.classList.add('active');
        
        // Special styling for AIA menu
        if (menuType === 'aia') {
            menuContentElement.style.background = 'rgba(255, 255, 255, 0.9)';
            menuContentElement.style.color = '#333';
        } else {
            menuContentElement.style.background = 'rgba(0, 0, 0, 0.8)';
            menuContentElement.style.color = 'white';
        }
        
        // Set dynamic height
        setTimeout(() => {
            const contentHeight = menuTextElement.scrollHeight + 60;
            menuContentElement.style.maxHeight = Math.max(contentHeight, 200) + 'px';
        }, 10);
    }
    
    // Update active menu item
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-menu="${menuType}"]`).classList.add('active');
}

function closeMenu() {
    activeMenu = null;
    menuContentElement.classList.remove('active');
    // Reset to CSS-controlled sizing
    menuContentElement.style.maxHeight = '';
    menuContentElement.style.padding = '';
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
}

// Initialize DOM elements and event listeners
function initializeApp() {
    // Get DOM elements
    imageElement = document.getElementById('mainImage');
    taglineElement = document.getElementById('taglineText');
    frameElement = document.querySelector('.golden-frame');
    containerElement = document.querySelector('.image-container');
    bodyElement = document.body;
    countdownElement = document.getElementById('countdown');
    menuBarElement = document.getElementById('menuBar');
    menuContentElement = document.getElementById('menuContent');
    menuTextElement = document.getElementById('menuText');

    // Add menu event listeners
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const menuType = item.getAttribute('data-menu');
            toggleMenu(menuType);
        });
    });

    // Add click event listener to the image container
    containerElement.addEventListener('click', function() {
        toggleMenu('about');
    });

    // Add document click listener to close menu when clicking elsewhere
    document.addEventListener('click', function(event) {
        // Don't close if clicking on menu items, menu content, images, or links
        if (event.target.closest('.menu-item') || 
            event.target.closest('.menu-content') || 
            event.target.tagName === 'IMG' || 
            event.target.tagName === 'A' ||
            event.target.closest('a')) {
            return;
        }
        
        // Close menu if one is currently open
        if (activeMenu) {
            closeMenu();
        }
    });

    // Initialize content
    initializeContent();

    // Start the rotation after initial load
    setTimeout(() => {
        updateContent();
        // Continue updating every 12 seconds
        setInterval(updateContent, 12000);
    }, 12000); // Wait 12 seconds before first change
}

// Countdown functionality
let countdownInterval;
let timeRemaining = 10;

function startCountdown() {
    timeRemaining = 10;
    countdownElement.textContent = timeRemaining;
    
    countdownInterval = setInterval(() => {
        timeRemaining--;
        countdownElement.textContent = timeRemaining;
        
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
        }
        
        if (timeRemaining < 0) {
            location.reload();
        }
    }, 1000);
}

function updateContent() {
    // Clear existing countdown
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Get random combination from bag
    const combination = combinationBag.draw();

    // Start background and menu color transition first
    bodyElement.style.backgroundColor = combination.backgroundColor;
    menuBarElement.style.backgroundColor = combination.menuColor;

    // Update image with slower fade effect
    imageElement.style.opacity = '0';
    
    setTimeout(() => {
        imageElement.src = combination.image;
        // Wait a bit more for the image to load before fading in
        setTimeout(() => {
            imageElement.style.opacity = '1';
            // Start countdown after image appears
            startCountdown();
        }, 100);
    }, 1000); // Increased delay to 1 second

    // Update frame colors with delay to sync with image
    setTimeout(() => {
        frameElement.style.borderColor = combination.frameColor;
        containerElement.style.backgroundColor = combination.frameColor;

        // Update tagline text and color
        taglineElement.textContent = combination.motto;
        taglineElement.style.color = combination.mottoColor;
    }, 500);
}

// Initialize with random combination on page load
function initializeContent() {
    const combination = combinationBag.draw(); // Get a random combination from the bag
    
    // Set initial content without transitions
    imageElement.src = combination.image;
    frameElement.style.borderColor = combination.frameColor;
    containerElement.style.backgroundColor = combination.frameColor;
    taglineElement.textContent = combination.motto;
    taglineElement.style.color = combination.mottoColor;
    bodyElement.style.backgroundColor = combination.backgroundColor;
    menuBarElement.style.backgroundColor = combination.menuColor;
    
    // Start initial countdown
    startCountdown();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
