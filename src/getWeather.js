import axios from "axios";
import React from "react";
import "./App.css"

const GetWeather = (props) => {
    console.log("inside", props.country)
    const [weather, setWeather] = React.useState(null);
    const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="+props.country+"&APPID=794ee95e63c5a32aaf88cd813fa2e425";

    React.useEffect(() => {
        console.log("useEffect called");
        const getWeatherAPI = async () => {
          try {
            const res = await axios.get(weatherAPI);
            const data = res.data
            console.log(data)
            setWeather({
                "temp": {
                  "min": data.main.temp_min,
                  "max": data.main.temp_max,
                  "avg": data.main.temp
                },
                "humidity": data.main.humidity,
                "wind": {
                  "deg": data.wind.deg,
                  "gust": data.wind.gust,
                  "speed": data.wind.speed
                }
              });          
            } catch (e) {
            console.log(e);
          }
        };
        getWeatherAPI();
      }, [props.country]);
      console.log(weather);

    return(
        <div style={{marginTop: "128px"}}>
            <h2>Latest weather details for {props.country}!</h2>
            <div className="weather-wrapper">
                <div className="weather-box">
                    <p className="weather-type">Temperature</p>
                    <p>Min Temperature: {weather && weather.temp.min} K</p>
                    <p>Max Temperature: {weather && weather.temp.max} K</p>
                    <p>Avg Temperature: {weather && weather.temp.avg} K</p>
                </div>
                <div className="weather-box">
                    <p className="weather-type">Humididty</p>
                    <p>{weather && weather.humidity} %</p>
                </div>
                <div className="weather-box">
                    <p className="weather-type">Wind</p>
                    <p>Degree: {weather && weather.wind.deg}°</p>
                    <p>Gust: {weather && weather.wind.gust} m/s</p>
                    <p>Speed: {weather && weather.wind.speed} m/s</p>
                </div>
            </div>
            
        </div>
    )
  }

export default GetWeather;
