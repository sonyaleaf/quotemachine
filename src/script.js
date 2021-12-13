let quoteData;

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json(); // from API, get array of JSON objects of quotes, with each object containing the text and author
  })
  .then(function(data) {
    quoteData = data;
    getQuote(data); // get quote on initial page load
  });

function getQuote() {
  const randomIndex = Math.floor(quoteData.length * Math.random()); // use length of quotes list to generate random index in range
  const text = quoteData[randomIndex].text; // get the quote text at randomIndex
  const author = quoteData[randomIndex].author; // get the author at randomIndex
  document.getElementById('text').innerHTML = text; // put quote text on page
  document.getElementById('author').innerHTML = author; // put quote author on page
  let fullQuote = text;
  if(author != null) {
    fullQuote += ' -' + author; // if the quote has an author, add to the fullQuote string
  }
  document.getElementById('tweet-quote').href = 'https://twitter.com/intent/tweet?text="' + fullQuote + '"'; // update tweet quote link to share quote text
}

document.getElementById('new-quote').addEventListener("click", getQuote);