const quoteContainer = document.getElementById(quote_container);
const quoteText = document.getElementById(quote);
const authorText = document.getElementById(quote_author);
const twitter_btn = document.getElementById(twitter_btn);
const newQuoteBtn = document.getElementById(new_quote);


// Get quote from API
async function getQuote(){
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`
    const apiUrl = `http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;
   
    try{
        const response = await fetch(proxyUrl+apiUrl);
        const data = await response.json();
        
    }catch(error){
        getQuote();
        console.log("Upsy Daisy. Try again", error);
        
    }
}







//load the quote
getQuote()