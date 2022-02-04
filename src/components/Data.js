import React, { useContext } from "react";

import Context from "../Context";


const Data = () => {

    const { weather, cityName } = useContext(Context)
    const { temp, humidity, pressure } = weather

    return (
        <div>
            <span>
                <div>
                    <p>Weather forecast for <span>{cityName}</span></p>
                </div>
            </span>

            <div>
                <span>
                    <p>Temperature</p>
                    <p>{temp}</p>
                </span>
            </div>
            <div>
                <span>
                    <p>Humidity</p>
                    <p>{humidity}</p>
                </span>
            </div>
            <div>
                <span>
                    <p>Pressure</p>
                    <p>{pressure}</p>
                </span>
            </div>
        </div>


    )
}

export default Data