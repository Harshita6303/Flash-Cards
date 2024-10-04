const cardContainer = document.getElementById('cardContainer');
const backButton = document.getElementById('back');

const data = JSON.parse(localStorage.getItem('currentData'));

function createCard(key, value) {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = key;

    // Show value on click
    card.onclick = () => {
        card.textContent = value;
    };

    // Revert back to key on mouseup
    card.onmouseup = () => {
        card.textContent = key;
    };

    return card;
}

function loadCards() {
    for (const [key, value] of Object.entries(data)) {
        const card = createCard(key, value);
        cardContainer.appendChild(card);
    }
}

loadCards();

backButton.onclick = () => {
    window.location.href = 'index.html';
};
