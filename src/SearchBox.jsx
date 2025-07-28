import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import "./SearchBox.css";
import './App.css';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "36b3caf2bc3777f26a9c029b5a4eeb71";

    let getWeatherinfo = async () =>{
        try{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(err) {
        throw err;
    } 
};

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async (e) =>{
        try{
        e.preventDefault();
        console.log(city);
        setCity("");
        let weatherData = await getWeatherinfo();
        updateInfo(weatherData)
    }catch(err) {
        setError(true);
    }
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button type="submit" variant="contained">Search</Button>
                {error && <p style={{color: "red"}}>No Such place exists.</p>}
            </form>
        </div>
    )
}
