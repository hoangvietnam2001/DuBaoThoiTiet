// import 'js/moment.js';


const appId = '874c55f74a07ca5fb697fabe9830a620';
const DEFAULT_VALUE = '--';
const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const tempreture = document.querySelector('.temprature');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const winSpeed = document.querySelector('.wind-speed');

searchInput.addEventListener('change', (e) => {

    if (searchInput === '') {
        alert('Nhập tên thành phố');
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&lang=vi&appid=${appId}&units=metric&lang=vi`)
            .then(async res => {
                const data = await res.json();
                console.log('Data :', data);

                cityName.innerHTML = data.name || DEFAULT_VALUE;
                weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
                tempreture.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
                weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

                sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
                sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
                humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
                winSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
            })
    }
});

