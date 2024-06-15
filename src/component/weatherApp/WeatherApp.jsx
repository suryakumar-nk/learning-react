import { useEffect, useState } from 'react';
import './style.css';

// weatherImg, temp, city, country, lat, lon, humidity, windSpeed
const WeatherDetails = (props) => {
  return (
    <>
      <div className='weather'>
        <div className='image'>
          <img src={props.weatherImg} alt="weatherImg" />
        </div>
        <div className='temperature'>{props.temp}&#176;C</div>
        <div className="city">{props.city}</div>
        <div className="country">{props.country}</div>
        <div className='cord'>
          <div>
            <span className="lat">latitude</span>
            <span>{props.lat}</span>
          </div>
          <div>
            <span className="log">longitude</span>
            <span>{props.lon}</span>
          </div>
        </div>
        <div className="fotter">
          <div>
            <img src='weather/humidity.png' alt='humidity' />
            <div>
              <div className='humidity'>{props.humidity}%</div>
              <div className='val'>HUMIDITY</div>
            </div>
          </div>
          <div>
            <img src='weather/wind.png' alt='wind' />
            <div>
              <div className='wind'>{props.windSpeed} km/h</div>
              <div className='val'>WIND SPEED</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const weatherIconMap = {
  "01d": "weather/clearsky.png",
  "01n": "weather/clearskynight.png",
  "02d": "weather/clearsky.png",
  "02n": "weather/clearskynight.png",
  "03d": "weather/cloudes.png",
  "03n": "weather/cloudes.png",
  "04d": "weather/cloudes.png",
  "04n": "weather/cloudes.png",
  "09d": "weather/rain.png",
  "09n": "weather/rain.png",
  "10d": "weather/rain.png",
  "10n": "weather/rain.png",
  "11d": "weather/thunderstorm.png",
  "11n": "weather/thunderstorm.png",
  "13d": "weather/snow.png",
  "13n": "weather/snow.png",
  "50d": "weather/mist.png",
  "50n": "weather/mist.png",
}

export const WeatherApp = () => {

  const apiKey = "API_TOKEN"
  const [weatherImg, setWeatherImg] = useState("weather/clearsky.png");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("chennai");
  const [country, setCountry] = useState("IN");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [humidity, setHumidity] = useState(85);
  const [windSpeed, setWindSpeed] = useState(85);

  useEffect(() => {
    if (loading) {
      search()
    }
  }, [loading]);

  const search = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=Metric&appid=${apiKey}`
      const data = await fetch(url);
      const res = await data.json()
      if (res.cod === '404') {
        console.log(res.message)
        setIsError(true)
        setErrorMessage(res.message)
      } else {
        setWeatherImg(weatherIconMap[res.weather[0].icon])
        setLon(res.coord.lon)
        setLat(res.coord.lat)
        setTemp(res.main.temp)
        setHumidity(res.main.humidity)
        setCity(res.name)
        setCountry(res.sys.country)
        setWindSpeed(res.wind.speed)
        setIsError(false)
      }
    } catch (error) {
      console.log("Error occured while generating QR Code " + error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='container'>
      <div className='input-container'>
        <input type='text' onChange={(e) => setText(e.target.value)} placeholder='Enter city name' />
        <img src='weather/search.png' onClick={() => setLoading(true)} alt='search'/>
      </div>
      <div className='display'>
        {
          loading ? <p>please weit...</p> :
          isError ? <p>{errorMessage}</p> :
          <WeatherDetails 
            weatherImg={weatherImg}
            temp={temp}
            city={city}
            country={country}
            lat={lat} lon={lon}
            humidity={humidity}
            windSpeed={windSpeed} 
          />
        }
      </div>
      <p style={{textAlign: "center", paddingTop:"20px", fontWeight:"lighter"}}>Designed By Surya Kumar</p>
    </div>
  )
}
