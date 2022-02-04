import React, { useState } from "react"
import axios from "axios"

import Header from "./Header"
import Contents from "./Contents"
import WeatherSearch from "./WeatherSearch"
import Data from "./Data"
import Context from "../Context"
import TimeDate from "./Time_Date"

   
const Main = () => {

    const api = process.env.REACT_APP_API_KEY
    
    const [weather, setWeather] = useState()
    const [cityName, setCityName] = useState()

    const api_call = async e => {

        e.preventDefault()

        const location = e.target.elements.location.value

        const API_KEY = api
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request

        setWeather(response.data.main)
        setCityName(response.data.name)
    }

    weather && console.log(weather)

    return (
        <div className="main">
            <Header />
            <Contents>
                <TimeDate />
                <Context.Provider value={{ api_call, weather, cityName }}>
                    <WeatherSearch />
                    {weather && <Data />}
                </Context.Provider>
            </Contents>
        </div>
    )
}

export default Main