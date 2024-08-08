import React, { useState } from "react";

export default function Weather(props) {
  const api = {
    key: "6502c1aa99e2f5028509670b5dcbf386",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = async() => {
    props.setProgress(20)

    await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        result && setWeather(result);

      });
      props.setProgress(100)


  };

  return (
    <div style={{ padding: "10% 20%" }}>
      <div
        style={{
          border: "solid 5px black",
          height: "400px",
          textAlign: "center",
          padding: "10% 20%",
          backgroundColor: "lightblue",
        }}
      >
        <h1>Weather Forecast</h1>
        {/* search box */}
        <input
          type="text"
          placeholder="search...."
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* button */}
        <button onClick={searchPressed}>Search</button>
        {typeof weather.main != "undefined" ? (
          <div>
            {/* Location */}
            <p><strong>{weather.name}</strong></p>

            {/* temperature */}
            <p><strong>Temperature : {weather?.main?.temp}  Celcius</strong></p>

            {/* description */}
            <p><strong>{weather?.weather[0]?.description}</strong></p>

            {/* feels like */}
            <p><strong>Feels Like : {weather?.main?.feels_like}</strong></p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
