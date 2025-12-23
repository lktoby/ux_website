const API_KEY_WEATHER = CONFIG.OPENWEATHER_API_KEY;

const URL = "https://api.openweathermap.org/data/2.5/weather?";

const CITY = 'q=Tokyo'; 

const url = URL + CITY + '&appid=' + API_KEY_WEATHER;

const to_japanese = {
    Thunderstorm: "嵐",
    Drizzle: "小雨",
    Rain: "雨",
    Snow: "雪",
    Clear: "晴れ",
    Clouds: "曇り"
}

fetch(url)
.then(response => response.json())
.then((data) => {
    let dateObj = new Date();    //Dateオブジェクト作成  make a Date object
    dateObj.setTime(Number(data.dt) * 1000); //取得したdtをセット set "dt" to the object
    let month = dateObj.getMonth();  // 月を取り出し。ただし1月が0  Jan. is 0.
    let day = dateObj.getDate();    // 日を取り出し
    let hours = dateObj.getHours();  // 時を取り出し
    let minutes = dateObj.getMinutes();  // 分を取り出し
    //console.log(`${month + 1}月${day}日 ${hours}時 ${minutes}分`)
    /* let title = document.getElementById("weather-title")
    title.textContent = `Weather at ${dateObj.toLocaleString()}` */
    
    let weather = data.weather[0].main;   //天気  
    let city = data.name;   // 都市名
    let maxTemp = data.main.temp_max; //最高気温
    
    let content = document.getElementById("weather");
    content.textContent = `今日の天気は${to_japanese[weather]}です。`

    /* let icon_url = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    let image = document.createElement("img")
    image.src = icon_url
    let card = document.getElementById("weather-card")
    let header = document.getElementById("weather-header")
    card.insertBefore(image, header) */
})

const startbtn = document.getElementById("start-btn");
const introsec = document.getElementById("intro");
startbtn.addEventListener("click", () => {
    introsec.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

const returnarrow = document.getElementById("return-arrow");
returnarrow.addEventListener("click", () => {
    window.scrollTo(0, 0);
});