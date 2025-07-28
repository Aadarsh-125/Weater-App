import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";
import React, { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 25.15,
        temp: 30.0,
        humidity: 60,
        tempMin: 25.05,
        tempMax: 35.05,
        weather: "Sunny",
    });

    let updateInfo = (weatherData) => {
        setWeatherInfo(weatherData)
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather Application</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
