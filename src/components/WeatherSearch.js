import React, { useContext } from "react";
import '../styles/pages/search.css'
import Context from "../Context";

const WeatherSearch = () => {

    const { api_call } = useContext(Context)

    return (
        <div className="search">
            <div class="input-group">
                {/* <div class="input-append"> */}
                <form class="form-inline" onSubmit={api_call}>
                    <input type="text" class="col-auto my-1" name="location"></input>
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="btn">&rarr;</button>
                    </span>
                </form>
                {/* </div> */}

            </div>
        </div>


    )

}

export default WeatherSearch