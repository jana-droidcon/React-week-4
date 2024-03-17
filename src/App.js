import React from "react";
import WeatherSearch from "./WeatherSearch.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />

      <footer>
        <div>
          This project was coded by
          <a
            href="https://github.com/jana-droidcon"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Jana Hille
          </a>
          , is on
          <a
            href="https://github.com/jana-droidcon/React-week-4"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
          , hosted on
          <a href="" target="_blank" rel="noreferrer">
            {" "}
            Netlify
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
