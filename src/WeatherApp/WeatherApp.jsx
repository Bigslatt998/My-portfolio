import React, { useEffect, useRef, useState } from 'react'
import Styles from './WeatherApp.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlay, faPause, faPlus, faXmark, faAngleRight, faAngleLeft, faCloudSunRain, faMap, faSliders, faMoon, faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";
   
   const CloudRainIcon = <FontAwesomeIcon icon={faCloudSunRain}/>
   const MapIcon = <FontAwesomeIcon icon={faMap} />
   const SettingsIcon = <FontAwesomeIcon icon={faSliders} /> 
   const MoonIcon = <FontAwesomeIcon icon={faMoon} /> 
   const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />


const WeatherApp = () => {
    const [Weather, setWeather] = useState(false)
    const inputRef = useRef()
    const [isDark, setIsDark] = useState(false)
    const HandleDark = () => {
        setIsDark(!isDark)
    }
    
        const searcch = async (city) => {
            
            try{
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d1fe9bcb0d9c6c7b2e17646e70bc86a7`;
                const response = await fetch(url)
                const data = await response.json()
                const timezone = data.timezone
                const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000
                const localTime  = new Date(utc + timezone * 1000)
                setWeather({
                    humidity: data.main.humidity,
                    Location: data.name,
                    windspead: Math.floor(data.wind.speed),
                    temperature: Math.floor(data.main.temp / 10) + 1,
                    local: localTime.toLocaleString()
                    
                })
                console.log(data)
            } catch (error){
                
            }
        }
        

        useEffect(() => {
            searcch("Lagos")
        }, [])

        const currentDate = new Date()
        const year = currentDate.getFullYear()
        const day = currentDate.getDay()
        const month = currentDate.toLocaleString('default', {month: 'short'})
        const date = currentDate.getDate()
        const fullYear = ` ${date} / ${month} / ${year}`

        const min = currentDate.getMinutes()
        const hour = currentDate.getHours()
        const fullTime =` ${hour} : ${min} `
        

        return (
    <div className={`${Styles.Weather} ${isDark ? Styles.LightMood : '' }`}>
        <div className={Styles.WeatherCOntainer}>
            <div className={`${Styles.WeatherAside} ${isDark ? Styles.LightMoodII : ''}`}>
                <div className={Styles.Logo}>
                    <img src='#'/>
                </div>
                <div className={Styles.navContent}>
                        <div className={Styles.WeatherIcon}>
                            <i>{CloudRainIcon}</i>
                            <p>Weather</p>
                        </div>
                        <div className={Styles.MapIcon}>
                            <i>{MapIcon}</i>
                            <p>Map</p>
                        </div>
                        <div className={Styles.SettingsIcon}>
                            <i>{SettingsIcon}</i>
                            <p>Settings</p>
                        </div>

                </div>
                <i className={Styles.Darkmood} onClick={HandleDark}>{MoonIcon}</i>
            </div>
            <div className={`${Styles.Weathernav} ${isDark ? Styles.LightMood : ''}`}>
                <div className={Styles.Searchhh}>
                <input ref={inputRef}  type='search' placeholder='Search for cities' className={`${isDark ? Styles.LightMoodII : ''}`}/>
                <i onClick={() => searcch(inputRef.current.value)} className={Styles.searchIcon}>{searchIcon}</i>
                </div>
                <p className={Styles.DateTime}> <span>{Weather.local} .{Weather.Location}</span></p>
            </div>
            <div className={`${Styles.Weathermain} ${isDark ? Styles.LightMoodII : ''}`}>
                <div className={Styles.CityDisplay}>
                    
                    <div className={Styles.Cityname}>
                        <p>{Weather.Location}</p>
                        <p>Chance of rain 0%</p>
                    </div>
                    <div className={Styles.TempDisplay}>
                        <p style={{fontSize: '17px'}}> Temp: {Weather.temperature}<span style={{fontSize: '25px', fontWeight: 'bolder'}}>&deg; <span style={{fontSize: '20px'}}>c</span></span> </p>
                        <p style={{fontSize: '17px'}}> Humidty: {Weather.humidity}<span style={{fontSize: '10px', fontWeight: 'bolder'}}>%</span> </p>
                        <p style={{fontSize: '17px'}}> Wind: {Weather.windspead}<span style={{fontSize: '10px', fontWeight: 'bolder'}}> hm/h </span> </p>


                    </div>
                </div>
                <div className="IMgaDIsplay">
                    <img src='#'/>
                </div>
            </div>
            <div className={`${Styles.WeatherSection} ${isDark ? Styles.LightMoodII : ''}`}>
                <p>TODAY'S FORECAST</p>
                <div className={Styles.Cloudss}>
                    <div className="div">
                        <p>6:00AM</p>
                        <i>{CloudRainIcon}</i>
                        <p>25 &deg;</p>
                    </div>
                    <div className="div">
                        <p>6:00AM</p>
                        <i>{CloudRainIcon}</i>
                        <p>25 &deg;</p>
                    </div>
                    <div className="div">
                        <p>6:00AM</p>
                        <i>{CloudRainIcon}</i>
                        <p>25 &deg;</p>
                    </div>
                    <div className="div">
                        <p>6:00AM</p>
                        <i>{CloudRainIcon}</i>
                        <p>25 &deg;</p>
                    </div>
                    <div className="div">
                        <p>6:00AM</p>
                        <i>{CloudRainIcon}</i>
                        <p>25 &deg;</p>
                    </div>
                    <div className="div">
                        <p>6:00AM</p>
                        <i>{CloudRainIcon}</i>
                        <p>25 &deg;</p>
                    </div>
                </div>
            </div>
            <div className={`${Styles.WeatherAsideII} ${isDark ? Styles.LightMoodII : ''}`}>
                <p>7-DAY FORECAST</p>
                <div className={Styles.DaysForecast}>
                    <div className={`${Styles.DIv} ${Styles.Today}`}>
                        <p>Today</p>
                        <i>{CloudRainIcon} <span>Sunny</span></i>
                        <p>12/12</p>
                    </div>
                    <div  className={`${Styles.DIv} ${Styles.Today}`}>
                        <p>Today</p>
                        <i>{CloudRainIcon} <span>Sunny</span></i>
                        <p>12/12</p>
                    </div>
                    <div  className={`${Styles.DIv} ${Styles.Today}`}>
                        <p>Today</p>
                        <i>{CloudRainIcon} <span>Sunny</span></i>
                        <p>12/12</p>
                    </div>
                    <div  className={`${Styles.DIv} ${Styles.Today}`}>
                        <p>Today</p>
                        <i>{CloudRainIcon} <span>Sunny</span></i>
                        <p>12/12</p>
                    </div>
                    <div  className={`${Styles.DIv} ${Styles.Today}`}>
                        <p>Today</p>
                        <i>{CloudRainIcon} <span>Sunny</span></i>
                        <p>12/12</p>
                    </div>
                    <div  className={`${Styles.DIv} ${Styles.Today}`}>
                        <p>Today</p>
                        <i>{CloudRainIcon} <span>Sunny</span></i>
                        <p>12/12</p>
                    </div>
                    <div  className={`${Styles.DIv} ${Styles.Today}`}>
                        <p>Today</p>
                        <i>{CloudRainIcon} <span>Sunny</span></i>
                        <p>12/12</p>
                    </div>
                </div>
            </div>
            <div className={`${Styles.Weatherfooter} ${isDark ? Styles.LightMoodII : ''}`}>6</div>
        </div>
    </div>
  )
}

export default WeatherApp



{/* <div className={Styles.Cloudss}>
                    {Weather.forecast.list.slice(0, 6).map((hour, index)=>(
                        <div className="hour">
                            <p>{new Date(hour.dt * 1000).getHours()}:00</p>
                            <p>{Math.round(hour.main.temp)}&deg; C</p>
                        </div>
                    ))}
                </div> */}