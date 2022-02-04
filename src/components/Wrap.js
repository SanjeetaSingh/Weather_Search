import React from "react"

const Wrap = (props) => {

    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default Wrap