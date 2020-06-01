import React from 'react'

import github from '../Assets/github.svg'

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
            <a 
                href = "https://github.com/jacquelineturof" 
                target = "_blank"
                className = "Header_Link"
                rel="noopener noreferrer">
                <img className = "Header_Image" alt = "github" src = { github }/>
            </a>
        </div>
    )
}