import React, {useState} from 'react';
import {fetchWeather} from './api/fetchWeather';
import './App.css';



const App =() => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (evt) => {
      if(evt.key === 'Enter'){
        const data = await fetchWeather(query)

        setWeather(data);
        console.log(data);
      }

  }

  return (
    <div className="main-container">
     <input
     className="search" type="text"
     placeholder="Search by city...."
     value= {query}
     onChange={(evt) => setQuery(evt.target.value)}
     onKeyPress = {search}
     
     
     />

     {weather.main && (
      <div className="city">
        <h2 className="city">
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </h2>
        <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
            <div className="info">
              <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
              <p>{weather.weather[0].description}</p>
            </div>

          </div>

      </div> 
      )}
    </div>
  );
}

export default App;
