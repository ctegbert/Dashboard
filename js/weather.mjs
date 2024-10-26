// weather.mjs

async function fetchWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=YourCity&units=metric&appid=a429ebe61058fdb20f5bbe641c363675`
        );
        if (!response.ok) throw new Error("Weather data not found");

        const data = await response.json();
        const weatherDiv = document.getElementById("weather");
        weatherDiv.textContent = `${data.weather[0].description}, ${data.main.temp}°C`;
    } catch (error) {
        document.getElementById("weather").textContent = "Unable to fetch weather.";
    }
}

fetchWeather();
