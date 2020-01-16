import React from 'react'

import classes from './ProjectImage.module.css'

export default function ProjectImage({ CSSClass }) {
    return (
        <div className = { [ classes.Image_Container, classes[CSSClass] ].join(' ')}>

        </div>
    )
}