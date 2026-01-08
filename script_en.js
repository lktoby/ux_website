const API_KEY_WEATHER = CONFIG.OPENWEATHER_API_KEY;

const URL = "https://api.openweathermap.org/data/2.5/weather?";

const CITY = 'q=Tokyo'; 

const url = URL + CITY + '&appid=' + API_KEY_WEATHER + '&units=metric'

fetch(url)
.then(response => response.json())
    .then((data) => {
    let weather = data.weather[0].description; 
    let city = data.name;
    let maxTemp = data.main.temp_max;
    let minTemp = data.main.temp_min;
    let navbar = document.getElementById("navbar");
    if (data.weather[0].icon.endsWith("n")) {
        navbar.setAttribute("data-bs-theme", "dark");
    } else if (data.weather[0].icon.endsWith("d")) {
        navbar.setAttribute("data-bs-theme", "light");
    }
        
    let icon_url = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
        
    let image = document.createElement("img");
    image.src = icon_url;
    let content = document.getElementById("weather_en");
    let weather_text = `Temperature: ${Math.round(maxTemp).toFixed(1)}° | ${Math.round(minTemp).toFixed(1)}°`;
    content.textContent = `Weather in ${city}: ${weather} `;
    content.appendChild(image);
    content.innerHTML += weather_text;
        
    let dateObj = new Date();
    dateObj.setTime(Number(data.dt) * 1000);
    let hours = dateObj.getHours();
    let greeting = document.getElementById("greeting_en");
    if (hours < 12) {
        greeting.textContent = "Good morning."
    } else if (hours >= 18) {
        greeting.textContent = "Good evening."
    }
})

const startbtn = document.getElementById("start-btn");
const introsec = document.getElementById("intro");
startbtn.addEventListener("click", () => {
    introsec.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

