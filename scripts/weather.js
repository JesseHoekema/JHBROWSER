const apiKey = '44b67ce07c68213b812d81194f613650'; // Vervang dit met jouw OpenWeatherMap API-sleutel
const weatherBox = document.getElementById('weatherBox');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherConditionIconElement = document.getElementById('weatherConditionIcon');

function toggleWeatherBox() {
  if (weatherBox.style.display === 'block') {
    weatherBox.style.display = 'none';
  } else {
    weatherBox.style.display = 'block';
    // Gebruik de functie getWeather om de weerinformatie in te laden
    getWeather();
  }
}

function getWeather() {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        const location = data.name;
        const temperature = `${data.main.temp}°C`;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        locationElement.textContent = location;
        temperatureElement.textContent = `Temperature: ${temperature}`;
        descriptionElement.textContent = ` ${description}`;

        // Voeg het weericoon toe op basis van het verkregen icooncode
        weatherConditionIconElement.src = `http://openweathermap.org/img/wn/${iconCode}.png`;
        weatherConditionIconElement.alt = `Weather Icon: ${description}`;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        locationElement.textContent = 'Unable to fetch weather data.';
      });
  });
}