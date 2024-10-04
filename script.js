const cardContainer = document.getElementById('cardContainer');

async function loadJSONFiles() {
    const files = ['data/sorting.json', 'data/aptitude.json'];

    for (const file of files) {
        const response = await fetch(file);
        const data = await response.json();

        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = file.split('/').pop();

        // Create buttons
        const buttons = document.createElement('div');
        buttons.className = 'buttons';

        const randomButton = document.createElement('button');
        randomButton.className = 'button';
        randomButton.textContent = 'Random';
        randomButton.onclick = () => {
            localStorage.setItem('currentData', JSON.stringify(data));
            window.location.href = 'random-card.html';
        };

        const allButton = document.createElement('button');
        allButton.className = 'button';
        allButton.textContent = 'All';
        allButton.onclick = () => {
            localStorage.setItem('currentData', JSON.stringify(data));
            window.location.href = 'all-cards.html';
        };

        buttons.appendChild(randomButton);
        buttons.appendChild(allButton);
        card.appendChild(buttons);
        cardContainer.appendChild(card);
    }
}

// Load JSON files on page load
loadJSONFiles();
