import React from "react"

/**
 * Contents component works as a provider 
 * for the dashbord.
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