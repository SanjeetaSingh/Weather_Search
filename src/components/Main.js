import React, { useState } from "react"
import axios from "axios"

import Contents from "./Contents"
import WeatherSearch from "./WeatherSearch"
import Data from "./Data"
import Context from "../Context"
import ErrorMessage from './ErrorMessage'
import TimeDate from "./Time_Date"
import Footer from "./Footer"

/**
 * This function handles the API calls and respones and 
 * passes the data through states and displays it on the 
 * dashbord.
 * 
 * @returns displays the dashboard with data
 */
const Main = () => {

    // The API key for openweathermaps
    const api = process.env.REACT_APP_API_KEY

    const [weather, setWeather] = useState()
    const [cityName, setCityName] = useState()
    const [errMsg, setErrMsg] = useState()
    const [des, setDes] = useState()
    const [icon, setIcon] = useState()


    const api_call = async e => {

        e.preventDefault()

        const location = e.target.elements.location.value

        // if the weather is not entered the user is informed 
        if (!location) {
            return setErrMsg("Please enter a City."), setWeather
        }
        const API_KEY = api

        // the url to get the weather data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request

        setWeather(response.data.main)
        setCityName(response.data.name)
        setDes(response.data.weather[0].main)
        setIcon(response.data.weather[0].icon)
        setErrMsg(null)
    }

    return (
        <div>
            {errMsg && <ErrorMessage errMsg={errMsg} />}

            <Contents>
                <Context.Provider value={{ api_call, weather, cityName, des, icon }}>
                    <TimeDate />
                    <WeatherSearch />
                    {weather && <Data />}
                </Context.Provider>
                <Footer />
            </Contents>
        </div>
    )
}

export default Main