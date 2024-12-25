let totalCoins = 0;

// Load coins from localStorage on page load
window.onload = function () {
  const savedCoins = localStorage.getItem("totalCoins");
  if (savedCoins) {
    totalCoins = parseInt(savedCoins);
    document.getElementById("coin-count").textContent = totalCoins;
  }
};

function completeTask(button, reward) {
  // Disable the button and show a loading state
  button.textContent = "Please wait to verify the task";
  button.disabled = false;
  button.style.backgroundColor = "#ff9800";

  // Simulate a 20-second delay before completing the task
  setTimeout(() => {
    // Add reward to total coins
    totalCoins += reward;

    // Update the coin display
    document.getElementById("coin-count").textContent = totalCoins;

    // Save the new coin total to localStorage
    localStorage.setItem("totalCoins", totalCoins);

    // Mark the task as completed
    button.textContent = "✔ Completed";
    button.style.backgroundColor = "#4caf50";
    button.style.color = "white";
  }, 10000); // 10,000 milliseconds = 20 seconds
}