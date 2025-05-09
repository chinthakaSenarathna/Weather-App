import './Weather.css'
import search_icon from '../../assets/search.png'
import { useCallback, useEffect, useState } from 'react'
import LogoutButton from '../logout/LogoutButton'

const Weather = () => {
    const [weather,setWeather] = useState({})
    const [cities,setCities] = useState([])
    const [selectedCityCode, setSelectedCityCode] = useState('')

    const getCities = async() => {
        try{
            const response = await fetch('/cities.json')
            // console.log("hey")
            const data = await response.json()
            console.log(data.List)
            setCities(data.List)
        }catch(error){
            console.log("Something went wrrong "+error)
        }
    }

    const search = async() => {
        if (!selectedCityCode) return;

        try{
            const cachedData = localStorage.getItem(selectedCityCode)

            if(cachedData){
                const { timestap, data } = JSON.parse(cachedData)

                const now_ = new Date().getTime();

                if(now_ - timestap <= 300000){
                    setWeather(data)
                    return
                }

                localStorage.removeItem(selectedCityCode)
            }

            const url = `http://api.openweathermap.org/data/2.5/group?id=${selectedCityCode}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

            const response = await fetch(url)
            const responseData = await response.json()
            console.log(responseData)
            const selectedData = {
                weatherIcon: responseData?.list[0]?.weather[0]?.icon,
                temparature: Math.floor(responseData?.list[0]?.main?.temp),
                location: responseData?.list[0]?.name,
                description: responseData?.list[0]?.weather[0]?.description
            }

            const now = new Date().getTime();

            const cache = {
                timestap: now,
                data: selectedData
            }

            localStorage.setItem(selectedCityCode,JSON.stringify(cache))
            setWeather(selectedData)

        }catch(error){
            console.log("Something went wrrong "+error)
        }
    }

    useEffect(() => {
        getCities()
    },[])

    return (
        <div className="weather">
            <div className="logout-container">
                <LogoutButton  cities={cities}/>
            </div>
            <div className="search-bar">
            <select
                    value={selectedCityCode}
                    onChange={(e) => setSelectedCityCode(e.target.value)}
                >
                    <option value="">-- Select a city --</option>
                    {cities.map((city) => (
                    <option key={city.CityCode} value={city.CityCode}>
                        {city.CityName}
                    </option>
                    ))}
                </select>
                <img 
                    onClick={search}
                    src={search_icon} alt='search-icon' />
            </div>
            {weather?.weatherIcon && (
                <img
                    src={`http://openweathermap.org/img/wn/${weather.weatherIcon}@2x.png`}
                    alt="weather-icon"
                    className='weather-icon'
                />
            )}
            <p className='temperature'>{weather.temparature}°C</p>
            <p className='location'>{weather.location}</p>
            <p className='description'>{weather.description}</p>
        </div>
    );
}

export default Weather;