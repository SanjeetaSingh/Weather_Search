import React, { useContext } from 'react'

import Context from "../Context";
import '../styles/pages/description.css'

const Description = () => {
    const { des } = useContext(Context)

    return (
        <div class="containers">
            <div class="col-6 col-sm-2">
                <h4><strong>Description</strong></h4>
                <div className="dec">
                    <p className="decVal">{des}</p>
                </div>

            </div>
        </div>
    )
}

export default Description