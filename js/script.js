// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// variable declaring an array of javascript objects containing quotes
var quotes = [
    {quote:"To truth only a brief celebration of victory is allowed between the two long periods during which it is condemned as paradoxical, or disparaged as trivial.", source:"Arthur Schopenhauer", citation:"The World as Will and Representation", year:1819},
    {quote:"Language serves not only to express thoughts, but to make possible thoughts which could not exist without it.", source:"Bertrand Russell", citation:"Human Knowledge: Its Scope and Limits", year:1948},
    {quote:"Do the wise thing and the kind thing too, and make the best of us and not the worst.", source:"Charles Dickens", citation:"Hard Times", year:1854},
    {quote:"A man who dares to waste one hour of time has not discovered the value of life.", source:"Charles Darwin", citation:"The Life and Letters of Charles Darwin", year:1897},
    {quote:"A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.", source:"George R.R. Martin", citation:"A Dance with Dragons", year:2011},
    {quote:"If you only read the books that everyone else is reading, you can only think what everyone else is thinking.", source:"Haruki Murakami", citation:"Norweigian Wood", year:1987},
    {quote:"It ought to make us feel ashamed when we talk like we know what we're talking about when we talk about love.", source:"Raymond Carver", citation:"What We Talk About When We Talk About Love", year:1981},
    {quote:"That which can be asserted without evidence, can be dismissed without evidence", source:"Christopher Hitchens", citation:"Slate Magazine", year:2003},
    {quote:"Reality is not always probable, or likely.", source:"Jorge Luis Borges", citation:"orldwide Laws of Life : 200 Eternal Spiritual Principles", year:1998},
    {quote:"Whatever is my right as a man is also the right of another; and it becomes my duty to guarantee as well as to possess.", source:"Thomas Paine", citation:"The Rights of Man", year:1791},
    ];



//defining variables

var message = '';
var viewedquotes = [];


//function to print the randomly selected quote and insert into HTML of element with the class of "outputDiv"

function print(message) {     
        var outputDiv = document.getElementById('quote-box');
        outputDiv.innerHTML = message;
}               

//a function that creates a random number between 0 and the length of quotes to randomly select an object or index of the quotes array and then to return the value of it.

function getRandomQuote() {
        var quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
        return quoteObject;
}


//RandomColors function to generate random RGB values and then to return those values


function RandomColors() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        var colors = 'rgb(' + red + ',' + green + ',' + blue + ')';
        return colors;
}


//Takes the random quote function stores it into var printObject and then adds them to message variable as a string of paragraphs and spans.
//If citation and year are undefined it does not print them.
//Resets the message variable to be '' after for a new click to generate a new quote.  
//Uses the getRandomColors function to change the body's background color each time the button is clicked.

function printQuote() {
        var printObject = getRandomQuote();
        message += '<p class="quote">' + printObject.quote + '</p>';
        message += '<p class="source">' + printObject.source + '';
        if (printObject.citation !== undefined) {
                message += '<span class ="citation">' + printObject.citation + '</span>';
            }
        if (printObject.year !== undefined) {
                message += '<span class ="year">' + printObject.year + '</span>';
            }
        message += '</p>';
        print(message);
        message = '';
        var getRandomColors = RandomColors();
        document.body.style.backgroundColor = getRandomColors;
}

// function that runs the printQuote function every 5 seconds
setInterval(function(){
  printQuote();
}, 5000);


