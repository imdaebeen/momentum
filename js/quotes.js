const quotes = [
    {
        quote: "No great man ever complains of want of opportunity.",
        author:"unknown",
    },
    {
        quote: "Do not accustom yourself to use big words for little matters.",
        author:"unknown",
    },
    {
        quote: "Patterning your life around other's opinions is nothing more than slavery.",
        author:"unknown",
    },
    {
        quote: ".love what you have.",
        author:"unknown",
    },
    {
        quote: "It ain't over till it's over.",
        author:"unknown",
    },
    {
        quote: "Life is not fair, get used to it.",
        author:"unknown",
    },
    {
        quote: "Only I can change my life, No one can do it for me.",
        author:"unknown",
    },
    {
        quote: "The unexamined life is not worth living.",
        author:"unknown",
    },
    {
        quote: "Life is a tragedy when seen in close-up, but a comedy in long shot.",
        author:"unknown",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author:"unknown",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;