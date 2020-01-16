import React from 'react'

import classes from './Button.module.css'

export default function Button({ children, buttonClass }) {
    return (
        <button className = { classes[buttonClass] }>
            { children }
        </button>
    )
}