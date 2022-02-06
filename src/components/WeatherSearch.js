import React, { useContext } from "react";
import '../styles/search.css'
import Context from "../Context";

const WeatherSearch = () => {

    const { api_call } = useContext(Context)

    return (
        <div className="search">
            <div class="input-group">
                {/* <div class="input-append"> */}
                <form class="form-inline" onSubmit={api_call}>
                    <input type="text" class="col-auto my-1" name="location" placeholder="Search a City"></input>
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                            </svg>
                        </button>
                    </span>
                </form>
                {/* </div> */}

            </div>
        </div>


    )

}

export default WeatherSearch