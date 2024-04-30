// Function to toggle additional information when a suggestion card is clicked
function toggleExtraInfo(cardId) {
    const card = document.getElementById(cardId);
    const extraInfo = card.querySelector('.extra-info');
    if (extraInfo.style.display === 'none') {
        extraInfo.style.display = 'block';
    } else {
        extraInfo.style.display = 'none';
    }
}

// Adding event listeners to all suggestion cards
document.addEventListener('DOMContentLoaded', () => {
    const suggestionCards = document.querySelectorAll('.suggestion-card');
    suggestionCards.forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.id;
            toggleExtraInfo(cardId);
        });
    });
});

// Function for the "Learn More" button action
function showMoreInfo(cardId) {
    alert('Additional information about ' + cardId);
}
