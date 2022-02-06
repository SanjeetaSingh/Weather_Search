import React from "react";
import "../styles/error.css"

const ErrorMessage = ({ errMsg }) => {
    return (
        <div class="alert alert-danger" role="alert">
            {errMsg}
        </div>
    )
}

export default ErrorMessage