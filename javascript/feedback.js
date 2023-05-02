
// Get references to the form elements
const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');

// Add an event listener to the form submit button
submitButton.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the values of the form fields
  const easyToUnderstand = document.querySelector('input[name="easy-to-understand"]:checked').value;
  const improveFinancialSkills = document.querySelector('input[name="improve-financial-skills"]:checked').value;
  const satisfiedDesignUsability = document.querySelector('select[name="satisfied-design-usability"]').value;
  const relevantUpToDate = document.querySelector('input[name="relevant-up-to-date"]:checked').value;

  // Do something with the form data
  console.log('Easy to Understand: ' + easyToUnderstand);
  console.log('Improve Financial Skills: ' + improveFinancialSkills);
  console.log('Satisfied with Design and Usability: ' + satisfiedDesignUsability);
  console.log('Relevant and Up-to-Date: ' + relevantUpToDate);

  // Display a thank you message
  const thankYouMessage = document.createElement('p');
  thankYouMessage.textContent = 'Thank you for your feedback!';
  form.appendChild(thankYouMessage);

  
});