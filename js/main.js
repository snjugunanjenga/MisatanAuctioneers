// Wait for document to load
document.addEventListener('DOMContentLoaded', function() {
    // Example: Check for user preferences (like theme) in localStorage
    const userPref = localStorage.getItem('userPreference');
    if (userPref) {
      document.body.classList.add(userPref);
    }
  
    // Additional initialization code such as image sliders or animations can go here
  
    // If a slider element is needed, you could initialize it:
    // initSlider();
  });
  
  // Function to validate the Contact Us form (used in contact.html)
  function validateForm(event) {
    event.preventDefault();  // Prevent form submission default
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');
  
    if (!fullName || !email || !message) {
      feedback.textContent = 'Please fill in all the fields.';
      feedback.style.color = 'red';
      return false;
    }
    
    feedback.textContent = 'Thank you! Your message has been sent.';
    feedback.style.color = 'green';
  
    // Store the submitted message in localStorage (optional)
    localStorage.setItem('lastMessage', JSON.stringify({
      fullName, email, message, timestamp: new Date().toISOString()
    }));
  
    document.getElementById('contactForm').reset();
    return true;
  }
  

