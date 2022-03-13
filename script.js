var quotes = [
  "Ravenclaw",
    "Hufflepuff",
    "Gryffindor",
    "Slytherin",
]

function home() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

