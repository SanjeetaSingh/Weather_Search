import React, { useContext } from "react";
import '../styles/search.css'
import Context from "../Context";

const WeatherSearch = () => {

    const { api_call } = useContext(Context)

    return (
        <div className="search">
            <div class="input-group">
               
                <form class="form-inline" onSubmit={api_call}>
                    <input type="search" class="inputSearch" name="location" placeholder="Search a City..."></input>
                </form>
     

            </div>
        </div>


    )

}

export default WeatherSearch