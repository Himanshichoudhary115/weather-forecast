/*document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector(".buton");
    if (btn) {
        btn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            document.body.classList.toggle("light-mode");

        
            
    });
}
})*/
document.getElementById('search-btn').addEventListener('click', () => {
    const apiKey = 'f749ea0cbaf5e7762045dd23b269d934';  // Make sure this is your valid API key
    const city = document.getElementById('city-input').value.trim();  // Trim spaces

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log("Fetching weather data for:", city);  // Debugging line to check city
    fetch(apiUrl)
        .then(response => {
            console.log("Response status:", response.status);  // Check the status code
            if (!response.ok) {
                throw new Error('City not found');  // Handle invalid city
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather data:", data);  // Log the response data
            const cityName = data.name;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            document.getElementById('city-name').textContent = `Weather in ${cityName}`;
            document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
            document.getElementById('weather-description').textContent = `
                Condition: ${description}
                Humidity: ${humidity}%
                Wind Speed: ${windSpeed} m/s
            `;
        })
        .catch(error => {
            console.error("Error:", error);  // Log any errors
            document.getElementById('city-name').textContent = '';
            document.getElementById('temperature').textContent = '';
            document.getElementById('weather-description').textContent = `Error: ${error.message}`;
        });
});

