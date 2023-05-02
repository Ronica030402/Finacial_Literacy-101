// Define the correct answers
const correctAnswers = ["a", "a", "a"];

// Get the quiz form and submit button
const quizForm = document.querySelector("#quiz-form");
const submitButton = document.querySelector("#submit-button");

// Get the results container and score/feedback text
const resultsContainer = document.querySelector("#results-container");
const scoreText = document.querySelector("#score-text");
const feedbackText = document.querySelector("#feedback-text");

// Add event listener to the submit button
submitButton.addEventListener("click", function(event) {
  // Prevent the default form submission
  event.preventDefault();
  
  // Get the user's answers and calculate the score
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value
  ];
  let score = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score += 1;
    }
  }
  
  // Calculate the percentage score and display it
  const percentageScore = Math.round((score / correctAnswers.length) * 100);
  scoreText.innerText = `You scored ${percentageScore}%`;
  
  // Display feedback based on the user's score
  if (percentageScore >= 80) {
    feedbackText.innerText = "Congratulations! You have a strong understanding of financial literacy.";
  } else if (percentageScore >= 50) {
    feedbackText.innerText = "You have a decent understanding of financial literacy, but there are areas where you can improve.";
  } else {
    feedbackText.innerText = "You have a poor understanding of financial literacy. Consider seeking additional resources to improve your knowledge.";
  }
  
  // Display the results container
  resultsContainer.style.display = "block";
});
