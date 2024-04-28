const dataForm=document.querySelector('#dataForm')
const cityInput = document.querySelector('#city')
const display = document.querySelector('#display')
const place='Nairobi'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=a9d6f8d2e6cb7ba0fd3cf5c5fa3a4b45`;



// const weatherData = fetch(url).then(response => response.json()).then(data => data).catch(error => error)
// console.log(weatherData);

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // Optional: log the data to see the structure

        const weatherInfo = `
            <p >City: ${data.name}</p>
            <p>Temperature: ${(data.main.temp-273.15).toFixed(1)}°C</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
        display.innerHTML = weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to fetch weather data when the page loads
window.onload = getWeather;









