import React from "react";

import '../styles/footer.css'

/**
 * This function return the footer which inludes
 * my githib, linkedin and name.
 * 
 * @returns my details
 */
const Footer = () => {
    return (
        <div class="footer">
            <p>
                <a href="https://github.com/SanjeetaSingh" target="_blank" rel="noreferrer">Github</a> &emsp; 
                <a>| Sanjeeta Singh |</a> &emsp;
                <a href="https://www.linkedin.com/in/sanjeeta-singh-471784209/" target="_blank" rel="noreferrer">Linkedin</a>
            </p>
        </div>
    )
}

export default Footer