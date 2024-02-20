
const apiKey = '0f604c25585b04dd8221a8b8b3efff98';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.city').innerHTML = 'city';
        document.querySelector('.temp').innerHTML = '-';
        document.querySelector('.humidity').innerHTML = '%';
        document.querySelector('.wind').innerHTML = 'km/h';
        return;
    } else {
        var data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'images/clouds.png'
        }
        else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'images/clear.png'
        }
        else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'images/rain.png'
        }
        else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png'
        }
        else if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'images/mist.png'
        }
        else if (data.weather[0].main === 'Snow') {
            weatherIcon.src = 'images/snow.png'
        }

        document.querySelector('.error').style.display = 'none';
    }


}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
