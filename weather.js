const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "3d99c8a7d103958c27ced050850a3bf6"
}
const input = document.querySelector("#enterYourCity");
input.addEventListener("keydown", enter);
function enter(e) {
    if (e.key === "Enter") {
        getInfo(input.value);
    }
}
async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&lang=en&appID=${api.key}`);
    const result = await res.json();
    displayResault(result);
}
getInfo("Haisyn, UA");
function displayResault(result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;
    getOurDate();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;
    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = "Feels like: " + `${Math.round(result.main.feels_like)}<span>°</span>`;
    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;
    backgroundPhoto (result);
    let variation = document.querySelector("#variation");
    variation.innerHTML ="Min: " + " " + `${Math.round(result.main.temp_min)}<span>°</span>` + "Max: " + " " + `${Math.round(result.main.temp_max)}<span>°</span>`;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = "Humidity: " + `${result.main.humidity}<span>%</span>`;
    let windSpeed = document.querySelector("#windSpeed");
    windSpeed.innerHTML = "Wind Speed: " + `${result.wind.speed}<span>m/s</span>`;
    let pressure = document.querySelector("#pressure");
    pressure.innerHTML = "Pressure: " + `${result.main.pressure}<span>hPa</span>`
}
function getOurDate() {
    const myDate = new Date;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = days[myDate.getDay()];
    let todaDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();
    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + " " + `${todaDate}` + " " + `${month}` + " " + `${year}`;
}
function backgroundPhoto (result) {
    const weatherMain = result.weather[0].main;
    const body = document.body;
    const container = document.querySelector("#container");
    const enterYourCity = document.querySelector("#enterYourCity");
    let sunny = document.querySelector(".sunny");
    let cloud = document.querySelector(".dark-clouds");
    let rain = document.querySelector(".rain");
    let thunderstorm = document.querySelector(".thunderstorm");
    let drizzle = document.querySelector(".drizzle");
    let snow = document.querySelector(".snow");
    switch (weatherMain) {
        case "Clear": 
            body.style.backgroundImage = "url(clear.jpg)";
            container.style.backgroundColor = "#84cbf7";
            enterYourCity.style.backgroundColor = "#84cbf7";
            sunny.style = "display:block";
            cloud.style = "display:none";
            rain.style = "display:none";
            drizzle.style = "display:none";
            thunderstorm.style = "display:none";
            snow.style = "display:none";
            break;
        case "Clouds":
            body.style.backgroundImage = "url(clouds.jpg)";
            container.style.backgroundColor = "#c3cdd3";
            enterYourCity.style.backgroundColor = "#c3cdd3";
            cloud.style = "display:block";
            sunny.style = "display:none";
            rain.style = "display:none";
            thunderstorm.style = "display:none";
            drizzle.style = "display:none";
            snow.style = "display:none";
            break;
        case "Rain":
            body.style.backgroundImage = "url(rain.jpg)";
            container.style.backgroundColor = "#93a7c0";
            enterYourCity.style.backgroundColor = "#93a7c0";
            rain.style = "display:block";
            sunny.style = "display:none";
            cloud.style = "display:none";
            thunderstorm.style = "display:none";
            drizzle.style = "display:none";
            snow.style = "display:none";
            break;
        case "Thunderstorm":
            body.style.backgroundImage = "url(thunderstorm.jpg)";
            container.style.backgroundColor = "#baa5bb";
            enterYourCity.style.backgroundColor = "#baa5bb";
            thunderstorm.style = "display:block";
            sunny.style = "display:none";
            cloud.style = "display:none";
            rain.style = "display:none";
            drizzle.style = "display:none";
            snow.style = "display:none";
            break;
        case "Drizzle":
            body.style.backgroundImage = "url(Drizzle.jpg)";
            container.style.backgroundColor = "#c1b1bb";
            enterYourCity.style.backgroundColor = "#c1b1bb";
            drizzle.style = "display:block";
            sunny.style = "display:none";
            cloud.style = "display:none";
            rain.style = "display:none";
            thunderstorm.style = "display:none";
            snow.style = "display:none";
            break;
        case "Snow":
            body.style.backgroundImage = "url(snow.jpg)";
            container.style.backgroundColor = "#d9cac4";
            enterYourCity.style.backgroundColor = "#d9cac4";
            snow.style = "display:block";
            sunny.style = "display:none";
            cloud.style = "display:none";
            rain.style = "display:none";
            thunderstorm.style = "display:none";
            drizzle.style = "display:none";
            break;
        default:
            body.style.backgroundImage = "url(photo.jpg)";
            container.style.backgroundColor = "#dab2ae";
            enterYourCity.style.backgroundColor = "#dab2ae";
    }
}



