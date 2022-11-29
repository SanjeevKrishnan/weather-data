import axios from "axios";
import React from "react";
import GetWeather from "./getWeather";

const baseURL = "https://countriesnow.space/api/v0.1/countries";

export default function App() {
  const [post, setPost] = React.useState(null);
  const [country, setCountry] = React.useState(null);
  const [openWeather, setOpenWeather] = React.useState(false);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>Weather-APP</h1>
      {post.map(one_post => {
        return(
          <div>
            <div key={one_post.id} onClick={() => {
                setOpenWeather(true)
                setCountry(one_post.country);
              }}>
              {one_post.country}
            </div>
          </div>
        );
      })}
      {openWeather ? <GetWeather country = {country}/> : null}
    </div>
  );
}