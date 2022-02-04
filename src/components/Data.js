import React, { useContext } from "react";

import Context from "../Context";
import '../styles/pages/data.css'

const Data = () => {

    const { weather, cityName } = useContext(Context)
    const { temp, humidity, pressure } = weather

    return (
        <div>
            <div className="container">
                <p>Weather forecast for <span>{cityName}</span></p>
            </div>

            <div className="temp">
                <p>Temperature &emsp;&emsp;&emsp;&emsp; Humidity  &emsp;&emsp;&emsp;&emsp;Pressure<br />
                <span>&emsp;&nbsp;&nbsp;{temp} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  {humidity}  &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;{pressure}</span></p>
            </div>
        </div>
    )
}

export default Data