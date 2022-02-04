import React from "react"

import '../styles/pages/wrap.css'
const Wrap = (props) => {

    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default Wrap