
let countryList = [
  "USA",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "France",
  "Ireland",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Alexandria",
 

];

let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const date = new Date();

async function getData(apiKey = "Alexandria") {
  let resp = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=cea5731e1363429fb4242739240201&q=${apiKey}&days=3`
  );
  let infoArray = await resp.json();
  document.querySelector(".Location").innerHTML = infoArray.location.name;
  document.querySelector(" #s1").innerHTML = day[date.getDay()];
  document.querySelectorAll(".s2")[0].innerHTML = `${date.getDate()} ${month[date.getMonth()]}`;
  document.querySelectorAll(".T1")[0].innerHTML = infoArray.forecast.forecastday[1].day.mintemp_c + "°C";
  document.querySelectorAll(".T1")[1].innerHTML = infoArray.forecast.forecastday[2].day.mintemp_c + "°C";
  document.querySelectorAll(".s2")[1].innerHTML = `${date.getDate() + 1} ${month[date.getMonth()]}`;
  document.querySelectorAll(".s2")[2].innerHTML = `${date.getDate() + 2} ${month[date.getMonth()]}`;
  let Deg = document.querySelectorAll(".Deg");
  Deg[0].innerHTML = `${infoArray.forecast.forecastday[0].day.maxtemp_c}°C`;
  Deg[1].innerHTML = `${infoArray.forecast.forecastday[1].day.maxtemp_c}°C`;
  Deg[2].innerHTML = `${infoArray.forecast.forecastday[2].day.maxtemp_c}°C`;
  let custom = document.querySelectorAll(".custom");
  custom[0].innerHTML = infoArray.forecast.forecastday[0].day.condition.text;
  custom[1].innerHTML = infoArray.forecast.forecastday[1].day.condition.text;
  custom[2].innerHTML = infoArray.forecast.forecastday[2].day.condition.text;
}

getData();

(async function () {
  let searchCountry = document.querySelector("#searchInput");
  searchCountry.addEventListener("keydown", function () {
    for (let i = 0; i < countryList.length; i++) {
      if (countryList[i].includes(searchCountry.value)) {
        getData(countryList[i]);
        break;
      }
    }
  });
})();