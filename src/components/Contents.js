import React from "react"

/**
 * Contents component that works with usecontext
 * to make it easier to work with states and props.
 * 
 * @param {*} props the passed in prop 
 * @returns the prop
 */
const Contents = (props) => {

    return (
        <div className="content">
            {props.children}
        </div>
    )
}

export default Contents