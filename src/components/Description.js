import React, { useContext } from 'react'

import Context from "../Context";
import '../styles/pages/description.css'

const Description = () => {
    const { des, icon, cityName } = useContext(Context)

    const source = 'http://openweathermap.org/img/wn/' + icon + '.png'

    return (
        <div>
            <span>
                <div className="element">
                    <h4>Weather forecast for <span><strong>{cityName}</strong></span></h4>
                </div>
            </span>
            <div class="containers">
                <div class="row align-items-center">
                    <div class="col-6 col-sm">
                        <img src={source}></img>
                    </div>
                    <div class="col-6 col-sm">
                        <div className="dec">
                            <p className="decVal">{des}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Description