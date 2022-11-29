import axios from "axios";
import React from "react";

const GetWeather = (props) => {

    const [weather, setWeather] = React.useState(null);
    const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="+props.country+"&APPID=794ee95e63c5a32aaf88cd813fa2e425";

    React.useEffect(() => {
        axios.get(weatherAPI).then((response) => {
            console.log("inside")
            const data = response.data
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
          }).catch(
          );
      }, []);
    

    return(
        <div>
            <h1>{weather.temp.min}</h1>
        </div>
    )
  }

export default GetWeather;