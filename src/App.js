
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';



const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const[search, setSearch] = useState("");
  const searchButton = () => {
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=074eaff7c0ff65e46689daf289069896`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }
  
  // if (loading) {
  //   return <div>loading...
      
  //     </div>;

  // }

  return (
    <div className="App">
      Please Search your desired Country or City
      <br></br>
     <input className= "styling" type="text" placeholder='Country' value={search} onChange={(event) => setSearch(event.target.value)}></input>

      <br></br>
      {/* <input type="text" placeholder='City' value={search} onChange={(event) => setSearch(event.target.value)}></input> */}
      <br></br>
      <button className="btn" onClick={searchButton}>Search</button>

   
      {weatherData && typeof weatherData.main !== "undefined" ? (
  <div>
    <h1>{weatherData.name}</h1>
    <p>Temperature: {weatherData.main.temp} K</p>
    <p>Description: {weatherData.weather[0].description}</p>
  </div>
) : (
  <div>No data to display</div>
)}

     </div>
   
  );
};

export default Weather;