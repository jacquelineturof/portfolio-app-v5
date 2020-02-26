import React from 'react'

import Link from './UI/Link'

import classes from './ProjectBody.module.css'

export default function ProjectBody({ name, description, url }) {
    return (
        <div className = { classes.Project_Body }>
            <h1 className = { classes.Project_Name }>
                { name }
            </h1>
            <p className = { classes.Project_Description }>
                { description }
            </p>
            <div className = { classes.Button_Container }>
                <Link
                    url = { url }
                    label = "Go To" />
            </div>
        </div>
    )
}