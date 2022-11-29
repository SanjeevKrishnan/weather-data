import axios from "axios";
import React from "react";
import GetWeather from "./getWeather";
import "./App.css"

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



export default function App() {
  const [post, setPost] = React.useState(null);
  const [country, setCountry] = React.useState(null);
  const [openWeather, setOpenWeather] = React.useState(false);
  const baseURL = "https://countriesnow.space/api/v0.1/countries";
  

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data.data
      let countries = []
      for(let i = 0; i< data.length; i++)
      {
        countries.push(data[i].country)
      }
      setPost(countries)
    });
  }, []);
  const onClickofCountry = (event) => {
    setOpenWeather(true);
    setCountry(event.value);
    console.log(event)
  } 

  if (!post) return null;

  return (
    <div>
      <h1 className="heading">Weather-APP</h1>
      <div className="dropdown-div">
      <Dropdown 
              options={post} 
              onChange={e => onClickofCountry(e)}
              placeholder="Select country" />
      </div>
      <div className="weather-div">
      {openWeather ? <GetWeather country = {country}/> : null}
      </div>
    </div>
  );
}