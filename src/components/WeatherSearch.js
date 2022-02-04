import React, { useContext } from "react";
import '../styles/pages/search.css'
import Context from "../Context";

const WeatherSearch = () => {

    const { api_call } = useContext(Context)

    return (
        <div className="search">
            <form onSubmit={api_call}>
                <input name="location"></input>
                <button>&rarr;</button>
            </form>
        </div>
    )
}

export default WeatherSearch