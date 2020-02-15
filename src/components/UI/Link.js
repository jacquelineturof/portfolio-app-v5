import React from 'react'

import classes from './Link.module.css'

/*
    Link Component.
    target = "_blank" to open in new window, rel for security reasons.
    props: 
        url => the url of the link
        label => the label for the link
*/
export default function Link({ url, label }) {
    return (
        <a 
            target = "_blank"
            rel="noopener noreferrer" 
            href = { url }
            className = { classes.Link }>
            { label }
        </a>
    )
}