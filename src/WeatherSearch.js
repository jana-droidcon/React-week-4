import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { ThreeDots } from "react-loader-spinner";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function searchCity() {
    let apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="search-form-input"
        type="search"
        placeholder="Enter a City..."
        onChange={updateCity}
      />
      <input
        className="search-form-button"
        type="submit"
        name="search"
        value={"Search"}
      />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          {" "}
          <strong>
            {" "}
            The weather in <strong>{city}</strong> right now is:
          </strong>
          <li>
            <strong>Temperature: {Math.round(weather.temperature)}℃</strong>
          </li>
          <li>
            <strong>Condition: {weather.description} </strong>
          </li>
          <li>
            <strong>Humidity: {weather.humidity}%</strong>
          </li>
          <li>
            <strong>Wind: {Math.round(weather.wind)} km/h</strong>
          </li>
          <li>
            <img alt="icon" src={weather.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <h2>Loading weather</h2>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="white"
          radius="15"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        ;
      </div>
    );
  }
}
