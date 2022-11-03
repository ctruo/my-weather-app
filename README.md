# MyWeather Application

ReactJS Weather application that displays the current weather/5-day forecast of the queried location. Users can add locations to a dashboard to view weather data of multiple locations at once.

This application fetches weather data from the OpenWeather Current Weather and 5-day 3-hour Forecast APIs (https://openweathermap.org/api).

<br />

---

<br />

# Demo #
<p align="center" width="100%">
  <img src="img/demo.gif" width="80%" />
</p>

<br />

---

<br />

# Features #
## Home view ##
Displays the current date and time.

## Location searchbar ##
Users can view the current weather and 5 day forecast for a location using the searchbar. Invalid input is indicated when there searchbar is empty or an invalid location.
<p align="center" width="100%">
  <img src="img/invalid-input.png" width="30%" />
</p>

## Current Weather Display ##
Shows the city and country of the location. There are two main display cards: 
* Today's current weather conditions and temperature
* Extra weather details: high/low temperatures, wind speed, humidity,  sunrise/sunset, and precipation for the past 1-3 hours

## 5 Day Forecast ##
Displays the weather forecast for the next 5 days with extra details.

## Dashboard ##
Users can add locations they want to save on a dashboard. All weather info in the current weather display is included on each dashboard card. Users can delete locations from the dashboard.

## Theme selector ##
Four different themes are available to select from the settings:

|Day | Evening |
|----|---------|
|<img width="100%" src="img/theme/day.png">|<img width="100%" src="img/theme/evening.png">|
|<img width="100%" src="img/theme/night.png"> | <img width="100%" src="img/theme/cloud.png">|
|<p align="center" width="100%">Night<p> | <p align="center" width="100%">Cloudy<p> |

<br />

---

<br />

# Device Responsiveness #
## Desktop ##
| <img width="100%" src="img/desktop/desktop-home.png"> | <img width="100%" src="img/desktop/desktop-main.png"> | 
|----|---------|
| <img width="100%" src="img/desktop/desktop-forecast.png"> | <img width="100%" src="img/desktop/desktop-dash.png"> | 


## Tablet ##
| <img width="50%" src="img/tablet/tablet-home.png"> | <img width="50%" src="img/tablet/tablet-main.png"> | 
|----|---------|
| <p align="center" width="100%"><img width="50%" src="img/tablet/tablet-forecast.png"></p> | <p align="center" width="100%"><img width="50%" src="img/tablet/tablet-dash.png"></p>| 
|<p align="center" width="100%"><img width="50%" src="img/tablet/tablet-nav.png"></p>|

## Mobile ##
| <img width="30%" src="img/phone/phone-home.png"> | <img width="30%" src="img/phone/phone-main.png"> | 
|----|---------|
| <p align="center" width="100%"><img width="30%" src="img/phone/phone-forecast.png"></p>| <p align="center" width="100%"><img width="30%" src="img/phone/phone-dash.png"></p> | 
|<p align="center" width="100%"><img width="30%" src="img/phone/phone-nav.png"></p> |



