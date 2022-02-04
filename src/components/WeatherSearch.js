import React, { useContext } from "react";


import Context from "../Context";

const WeatherSearch = () => {

    const { api_call } = useContext(Context)

    return (
        <div>
            <form onSubmit={api_call}>
                <input name="location"></input>
                <button>&rarr;</button>
            </form>
        </div>
    )
}

export default WeatherSearch