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
                    <input type="text" class="col-auto my-1" name="location" placeholder="Search a City"></input>
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="gray" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
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