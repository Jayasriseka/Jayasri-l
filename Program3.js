const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weather-result").innerHTML = "City not found!";
                return;
            }

            const weatherHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weather-result").innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
