import React from 'react'
import { NavLink } from 'react-router-dom'

import '../App.css'

export default function Nav() {
    return (
        <nav className = "Nav">
            <NavLink to ="/" className = "Nav_Link">
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "link_text">ABOUT</span>
            </NavLink>
            <NavLink to ="/" className = "Nav_Link">
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "link_text">SKILLS</span>
            </NavLink>
            <NavLink to ="/" className = "Nav_Link">
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "link_text">PROJECTS</span>
            </NavLink>
            <NavLink to ="/" className = "Nav_Link">
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "hover_animate"></span>
                <span className = "link_text">CONTACT</span>
            </NavLink>
        </nav>
    )
}