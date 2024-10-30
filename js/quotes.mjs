// quotes.mjs

async function fetchQuote() {
    try {
        const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
        
        if (!response.ok) throw new Error("Failed to fetch quote");

        const data = await response.json();
        
        // Displaying the quote and author
        const quoteElement = document.getElementById("quote");
        quoteElement.textContent = `"${data.quote}" - ${data.author}`;
    } catch (error) {
        document.getElementById("quote").textContent = "Unable to fetch quote.";
        console.error("Error fetching quote:", error);
    }
}


fetchQuote();


document.getElementById("new-quote").addEventListener("click", fetchQuote);
