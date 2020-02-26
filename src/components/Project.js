import React from 'react'

import Image from './ProjectImage'
import Body from './ProjectBody'


import classes from './Project.module.css'

export default function Project({ CSSClass, name, description, url }) {
    return (
        <div className = { classes.Project }>
            <Image CSSClass = { CSSClass } />
            <Body 
                name = { name } 
                description = { description }
                url = { url } />
        </div>
    )
}