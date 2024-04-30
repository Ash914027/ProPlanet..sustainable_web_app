// JavaScript for interaction and behavior tracking
function trackActivity() {
    alert('Activity tracking started!');
    // Logic for tracking user activities and suggesting sustainable behaviors
}

function showFunFact() {
    const funFacts = [
        'Did you know recycling one aluminum can saves enough energy to run a TV for 3 hours?',
        'Turning off the tap while brushing your teeth can save up to 8 gallons of water a day.',
        'A single reusable bag can replace up to 500 disposable plastic bags.'
    ];

    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    alert(randomFact);
}

function openPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Example of showing a popup when a user does something unsustainable
function suggestSustainableBehavior() {
    const suggestion = 'Consider using a reusable bag instead of plastic bags.';
    openPopup(suggestion);
}
$(document).ready(function() {
    $('#start-tracking-button').click(function() {
        $('#tracking-notification').fadeIn(); // Show the notification with spinner
        setTimeout(function() {
            $('#tracking-notification').fadeOut(); // Hide it after 0.56 seconds
        }, 560); // 560 ms for 0.56 seconds
    });
});
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
  
    // Get relevant information about the clicked content, like text or attributes
    const contentInfo = {
      tagName: clickedElement.tagName,
      textContent: clickedElement.textContent,
      id: clickedElement.id,
      className: clickedElement.className,
      // You can add other attributes or metadata here
    };
  
    // Store the information in Local Storage
    storeClickedContent(contentInfo);
  });
  function getClickedContent() {
    const storedContent = localStorage.getItem('clickedContent');
  
    if (storedContent) {
      return JSON.parse(storedContent);
    }
  
    return [];
  }
  
  // Use the stored information for recommendations
  const clickedContent = getClickedContent();
  
  // Example: Create a set of unique class names to recommend related content
  const uniqueClassNames = new Set(clickedContent.map(info => info.className));
  
  // Use this information to generate recommendations
  // This is a simple example, but in a real application, you might use this data to suggest similar articles, products, etc.
  document.addEventListener('click', function(event) {
    const clickedElement = event.target;
  
    const contentInfo = {
      tagName: clickedElement.tagName,
      textContent: clickedElement.textContent,
      id: clickedElement.id,
      className: clickedElement.className,
    };
  
    storeClickedContent(contentInfo);
  });
  
  function storeClickedContent(contentInfo) {
    let storedContent = localStorage.getItem('clickedContent');
  
    if (storedContent) {
      storedContent = JSON.parse(storedContent);
    } else {
      storedContent = [];
    }
  
    storedContent.push(contentInfo);
  
    localStorage.setItem('clickedContent', JSON.stringify(storedContent));
  }
  // Array of fun facts
