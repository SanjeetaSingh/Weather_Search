import React, { useContext } from "react";

import Context from "../Context";
import "../styles/data.css"

const Data = () => {

    const { weather } = useContext(Context)
    const { temp, humidity, pressure } = weather

    return (
        <div>
        
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-6 col-sm-2">
                        <h4><strong>Temperature</strong></h4>
                        <div className="temperture">
                            <p className="tempVal">{temp}</p>
                        </div>
                    </div>
                    <div class="col-6 col-sm-2">
                        <h4><strong>Humidity</strong></h4>
                        <div className="hum">
                            <p className="humVal">{humidity}</p>
                        </div>
                    </div>
                    <div class="col-6 col-sm-2">
                        <h4><strong>Pressure</strong></h4>
                        <div className="pressure">
                            <p className="pressureVal">{pressure}</p>
                        </div>

                    </div>
                   
                </div>
            </div>
        </div>



    )
}

export default Data