function getRandomWord() {
  const wordArray = ['London', 'Barcelona', 'New York', 'Los Angeles', 'Dallas', 'Seattle', 'Miami', 'Tokyo', 'Edinburgh', 'Toronto'];
  var index = Math.floor(Math.random() * wordArray.length);
  return wordArray[index];
}

function displayRandomWord() {
  var randomWord = getRandomWord();
  document.getElementById("word").textContent = randomWord;
}