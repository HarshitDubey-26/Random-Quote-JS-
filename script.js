const btn = document.getElementById("btn");

const text = document.querySelector("p");
const quotes = [
  "Discipline is choosing what you want most over what you want now.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Dream big. Start small. Act now.",
  "The best way to predict the future is to create it.",
  "Hard work beats talent when talent doesn't work hard.",
  "Do something today that your future self will thank you for.",
  "Consistency creates results.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your only limit is your willingness to try.",
  "Great things never come from comfort zones.",
  "Failure is not the opposite of success; it's part of success.",
  "Small progress is still progress.",
  "The pain of discipline is less than the pain of regret.",
  "Focus on the process, not just the outcome.",
  "Success begins at the end of your comfort zone.",
  "Stay patient and trust your journey.",
  "Every expert was once a beginner.",
  "Opportunities don't happen. You create them.",
  "Difficult roads often lead to beautiful destinations.",
  "Believe you can, and you're halfway there.",
];
btn.addEventListener("click", function () {
 let random = Math.floor(Math.random()*20);
 text.innerText = quotes[random];
});