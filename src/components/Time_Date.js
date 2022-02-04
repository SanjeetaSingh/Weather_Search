import React from "react";

const Time_Date = () => {

    const dates = new Date()

    return (
        <div>
            {`${dates.toLocaleDateString()} - ${dates.toLocaleTimeString()}`}
        </div>
    )
}

export default Time_Date