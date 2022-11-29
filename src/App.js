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

  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.data);
    });
  }, []);
  const onClickofCountry = () => {
    setOpenWeather(true);
    setCountry(one_post.country);
  } 

  if (!post) return null;

  return (
    <div>
      <h1 className="heading">Weather-APP</h1>
      <Dropdown 
              options={post} 
              onChange={onClickofCountry}
              value={post[0]} 
              placeholder="Select an option" />
      {openWeather ? <GetWeather country = {country}/> : null}
    </div>
  );
}