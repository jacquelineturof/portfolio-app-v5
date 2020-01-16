import React from 'react'

import classes from './ProjectBody.module.css'

export default function ProjectBody({ name, description }) {
    return (
        <div className = { classes.Project_Body }>
            <h1 className = { classes.Project_Name }>
                { name }
            </h1>
            <p className = { classes.Project_Description }>
                { description }
            </p>
        </div>
    )
}