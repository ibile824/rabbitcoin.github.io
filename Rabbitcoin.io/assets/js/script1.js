
let balance = 10;


function updateBalance() {
  document.getElementById('balance').textContent = balance;
}


function handleTurboClick() {
  balance += 60;
  updateBalance();
}


function handleFullEnergyClick() {
  balance += 50;
  updateBalance();
}


document.getElementById('turbo').addEventListener('click', handleTurboClick);
document.getElementById('charge').addEventListener('click', handleFullEnergyClick);


updateBalance();
// Set initial values
let coins = 0;
const maxCoins = 1000000000000000000000;

// Function to update progress bar based on accumulated coins
function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const coinCount = document.getElementById("coin-count");

  // Calculate progress as a percentage
  const progressPercent = (coins / maxCoins) * 1000000000000000000000;

  // Update width of progress bar and coin count
  <div
    className="progress-gradient h-2 rounded-full"
    style={{ width: `${calculateProgress()}%` }}
  ></div>
}

// Function to add coins
function addCoins(amount) {
  if (coins + amount <= maxCoins) {
    coins += amount;
    updateProgressBar();
  } else {
    alert("You've reached the maximum coin limit!");
  }
}