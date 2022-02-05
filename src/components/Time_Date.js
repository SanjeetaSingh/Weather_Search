import React from "react";

import '../styles/pages/timedate.css'
const Time_Date = () => {

    const dates = new Date()

    return (
        <div className="timedate">
            <h2> {`${dates.toLocaleDateString()} - ${dates.toLocaleTimeString()}`}</h2>
        </div>
    )
}

export default Time_Date