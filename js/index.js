let randomNums = [0, 1, 2, 3];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeQuote() {
  let randomNum = getRandomInt(0, quotesList.length - 1);

  if (randomNums.length == quotesList.length) {
    randomNums = [];
  }

  while (randomNums.includes(randomNum)) {
    randomNum = getRandomInt(0, quotesList.length - 1);
  }

  randomNums.push(randomNum);
  const selectedQuote = quotesList[randomNum];
  document.getElementById('quote').innerHTML = selectedQuote.quote;
  document.getElementById('auther').innerHTML = selectedQuote.auther;
}

window.onload = () => {
  changeQuote();
};
