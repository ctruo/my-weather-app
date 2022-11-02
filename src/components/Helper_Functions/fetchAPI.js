import { v4 as uuidv4 } from "uuid";

function mainData(url, setWeatherData, setValidSearch) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else throw new Error("Status code error:" + response.status);
    })
    .then((data) => {
      const queryData = {
        id: uuidv4(), //unique key
        city: data.name,
        country: data.sys.country,
        iconURL:
          "http://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@4x.png",
        temp: data.main.temp,
        desc: data.weather[0].description,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        windSpeed: data.wind.speed,
        rain: data.rain ? data.rain["1h"] || data.rain["3h"] : 0, //if no rain set to 0
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        humidity: data.main.humidity,
      };
      setValidSearch(true);
      setWeatherData(queryData);
    })
    .catch((error) => {
      setValidSearch(false);
      console.log("MAIN DATA " + error);
    });
}

//fetch API for forecastData, filter, and set forecastData state
function forecastData(url, setForecastData) {
  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error("Status code error:" + response.status);
    })
    .then((data) => {
      let filteredData = filter(data.list);
      setForecastData(filteredData);
    })
    .catch((error) => console.log("FORECAST DATA " + error));
}

//get one temp value for forecastData, uses 12:00:00 as time to get temp
function filter(data) {
  let filtered = [];
  let dayDone = [];

  for (let i = 0; i < data.length; i++) {
    let [date, time] = data[i].dt_txt.split(" ");

    if (time === "12:00:00") {
      filtered.push(data[i]);
      dayDone.push(date);
    }
  }
  return filtered;
}

export { mainData, forecastData };
