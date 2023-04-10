const wordArray = ['London', 'Barcelona', 'New York', 'Los Angeles', 'Dallas', 'Seattle', 'Miami', 'Tokyo', 'Edinburgh', 'Toronto']
function getRandomWord(arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index]
}

var randomWord = getRandomWord(wordArray)
console.log(randomWord)