const card = document.getElementById('card');
const keySpan = document.getElementById('key');
const nextButton = document.getElementById('next');


const backButton = document.getElementById('back');


const data = JSON.parse(localStorage.getItem('currentData'));

function getRandomKeyValue() {
    const keys = Object.keys(data);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    keySpan.textContent = randomKey;

    // Set up mouse events for interaction
    card.onmousedown = () => {
        keySpan.textContent = data[randomKey]; // Show value on click
    };
    
    card.onmouseup = () => {
        keySpan.textContent = randomKey; // Revert to key on release
    };
}

nextButton.onclick = getRandomKeyValue;
backButton.onclick = () => {
    window.location.href = 'index.html';
};

// Load the first random key-value pair
getRandomKeyValue();
