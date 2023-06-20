let dt = document.querySelector("#date-time");
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
console.log(day);
dt.innerHTML = `${day} ${hours}:${minutes}`;

function getweather(response) {
  let card_title = document.querySelector("#card-title");
  console.log(response);
  card_title.innerHTML = response.data.name;
  //console.log(response.data.main.temp);
  let temp_label = document.querySelector("#temp_label");
  celsius_button.addEventListener("click", function (event) {
    temp_label.innerHTML = Math.round(response.data.main.temp);
  });
  farenh_button.addEventListener("click", function (event) {
    temp_label.innerHTML = (Math.round(response.data.main.temp) * 9) / 5 + 32;
  });
  temp_label.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";

function doSearch(event) {
  let search_input = document.querySelector("#search-input");
  //console.log(search_input.value);
  let search_text = search_input.value;
  let city = search_input.value;
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  search_input.value = `Searching weather in ${search_text}...`;
  axios.get(apiLink).then(getweather);
}

let search_icon = document.querySelector("#search-icon");
search_icon.addEventListener("click", doSearch);

let celsius_button = document.querySelector(".celcius");
let farenh_button = document.querySelector(".farenh");

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  apiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiLink).then(getweather);
  //console.log(position.coords.latitude);
  //console.log(position.coords.longitude);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let current_button = document.querySelector(".current-button");
current_button.addEventListener("click", getCurrentPosition);

//add search on click of enter or/and the change of icon when searching
