import React from "react";

import '../styles/timedate.css'

/**
 * Function returns current date and time
 * of the users. 
 * 
 * @returns time and data
 */
const Time_Date = () => {

    const dates = new Date()

    return (
        <div className="timedate">
            <h2> {`${dates.toLocaleDateString()} - ${dates.toLocaleTimeString()}`}</h2>
        </div>
    )
}

export default Time_Date