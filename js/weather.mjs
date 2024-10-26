// weather.mjs

async function fetchWeather() {
    try {
        const response = await fetch(
            `https://api.weatherbit.io/v2.0/current?city=Springfield&country=US&key=6a3b273c26864d469c8fa43a0bde585d`
        );
        
        if (!response.ok) throw new Error("Weather data not found");

        const data = await response.json();
        const weatherData = data.data[0];

        const weatherDiv = document.getElementById("weather");
        weatherDiv.innerHTML = `
            <div class="weather-column">
                <p><strong class="weather-title">Description:</strong> ${weatherData.weather.description}</p>
                <p><strong class="weather-title">Temperature:</strong> ${weatherData.temp}°C</p>
                <p><strong class="weather-title">Feels Like:</strong> ${weatherData.app_temp}°C</p>
                <p><strong class="weather-title">Humidity:</strong> ${weatherData.rh}%</p>
            </div>
            <div class="weather-column">
                <p><strong class="weather-title">Wind Speed:</strong> ${weatherData.wind_spd} m/s</p>
                <p><strong class="weather-title">Wind Direction:</strong> ${weatherData.wind_cdir_full} (${weatherData.wind_cdir})</p>
                <p><strong class="weather-title">Cloud Coverage:</strong> ${weatherData.clouds}%</p>
                <p><strong class="weather-title">UV Index:</strong> ${weatherData.uv}</p>
            </div>
        `;
    } catch (error) {
        document.getElementById("weather").textContent = "Unable to fetch weather.";
        console.error("Error fetching weather data:", error);
    }
}

fetchWeather();
