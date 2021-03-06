import React, { useContext } from "react";

import Context from "../Context";
import "../styles/data.css"


/**
 * This file returns the data that is pulled from the 
 * api and shows it on the dashboard. 
 * 
 * @returns the data from the API
 */
const Data = () => {

    // The weather data pull from the api for the given location
    const { weather } = useContext(Context)
    const { temp, humidity, pressure } = weather
    const { des, icon, cityName } = useContext(Context)

    // The icon for the weather description pulled from the API
    const source = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'

    return (

        <div>
            <div class="container">
                <div>
                    <div class="row align-items-center">
                        <div>
                            <h4><strong>Temperature</strong></h4>
                            <div className="temperture">
                                <p className="tempVal">{temp}&deg;C</p>
                            </div>
                        </div>
                        <div>
                            <h4><strong>Humidity</strong></h4>
                            <div className="hum">
                                <p className="humVal">{humidity}%</p>
                            </div>
                        </div>
                        <div>
                            <h4><strong>Pressure</strong></h4>
                            <div className="pressure">
                                <p className="pressureVal">{pressure}</p>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
            <div>
                <span>
                    <div className="element">
                        <h2><span><strong>{cityName}</strong></span></h2>
                    </div>
                </span>
                <div class="containers">
                    <div class="col align-items-center">
                        <div>
                            <img src={source}></img>
                        </div>
                        <div>
                            <div className="dec">
                                <p className="decVal">{des}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>





    )
}

export default Data