import React from "react";
import "../styles/error.css"

/**
 * This function return an error message 
 * when a error occurs. 
 * 
 * @param {*} errMsg the message 
 * @returns the error 
 */
const ErrorMessage = ({ errMsg }) => {
    return (
        <div class="alert alert-danger" role="alert">
            {errMsg}
        </div>
    )
}

export default ErrorMessage