
const timer = document.getElementById("timer");
const focus = document.getElementById("focus"); 
const pause = document.getElementById("pause"); 
const again = document.getElementById("again"); 


let timeLeft = 1500; 
let interval; 


const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${
    seconds.toString().padStart(2, "0")
  }`;
};

const startTimer = () => {
  if (interval) return; 
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time is up! Good job! ❤️");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
};
const stopTimer = () => {
  clearInterval(interval);
  interval = null; 
};
const resetTimer = () => {
  clearInterval(interval);
  interval = null;
  timeLeft = 1500; 
  updateTimer();
};

focus.addEventListener("click", startTimer);
pause.addEventListener("click", stopTimer);
again.addEventListener("click", resetTimer);

// Initialize the timer display on page load
updateTimer();
