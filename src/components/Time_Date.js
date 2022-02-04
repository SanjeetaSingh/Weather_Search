import React from "react";

import '../styles/pages/timedate.css'
const Time_Date = () => {

    const dates = new Date()

    return (
        <div className="timedate">
            {`${dates.toLocaleDateString()} - ${dates.toLocaleTimeString()}`}
        </div>
    )
}

export default Time_Date