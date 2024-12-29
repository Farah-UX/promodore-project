// Select DOM elements
const timer = document.getElementById("timer"); // The timer display
const focus = document.getElementById("focus"); // Start button
const pause = document.getElementById("pause"); // Pause button
const again = document.getElementById("again"); // Reset button

// Timer variables
let timeLeft = 1500; // 25 minutes in seconds
let interval; // Stores the timer interval

// Function to update the timer display
const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${
    seconds.toString().padStart(2, "0")
  }`;
};

// Function to start the timer
const startTimer = () => {
  if (interval) return; // Prevent multiple intervals
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time is up! Good job! ❤️");
      timeLeft = 1500; // Reset timer
      updateTimer();
    }
  }, 1000);
};

// Function to stop the timer
const stopTimer = () => {
  clearInterval(interval);
  interval = null; // Clear interval state
};

// Function to reset the timer
const resetTimer = () => {
  clearInterval(interval);
  interval = null; // Clear interval state
  timeLeft = 1500; // Reset to 25 minutes
  updateTimer();
};

// Event listeners for buttons
focus.addEventListener("click", startTimer);
pause.addEventListener("click", stopTimer);
again.addEventListener("click", resetTimer);

// Initialize the timer display on page load
updateTimer();
