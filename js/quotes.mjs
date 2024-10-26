// quotes.mjs

async function fetchQuote() {
    try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();
        document.getElementById("quote").textContent = `"${data[0].q}" - ${data[0].a}`;
    } catch (error) {
        document.getElementById("quote").textContent = "Unable to fetch quote.";
    }
}

fetchQuote();
