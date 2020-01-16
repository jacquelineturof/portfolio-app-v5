import React from 'react'

import Project from './Project'

import classes from './ProjectsContainer.module.css'

const PROJECTS = [
    { 
        class: 'Nasa_Image', 
        name: 'Nasa Image Viewer', 
        description: "A UI connected to NASA's backend database."
    },
    { 
        class: 'Books_Image', 
        name: 'Book List Manager', 
        description: "A interface to help a user keep track of their reading last."
    },
]
export default function ProjectsContainer() {
    return (
        <div className = { classes.Projects_Container }>
            { PROJECTS.map(project => 
                <Project 
                    CSSClass = { project.class }
                    name = { project.name }
                    description = { project.description } /> )}
        </div>
    )
}