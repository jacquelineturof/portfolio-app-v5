import React from 'react'

import '../App.css'

export default function MainHeader() {
    return (
        <div className = "Header">
            <h1 className = "Header_Name">
                <span className = "Highlight_1">Jacqueline</span> Turof
            </h1>
            <h5 className = "Header_Description">
                Full Stack <span className = "Highlight">Developer</span>
            </h5>
        </div>
    )
}