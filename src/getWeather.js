import axios from "axios";
import React from "react";

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
        <div>
            <h2>Hello from {props.country}</h2>
            <h1>{weather && weather.temp.min}</h1>
        </div>
    )
  }

export default GetWeather;
