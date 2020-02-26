import React from 'react'

import Project from './Project'

import classes from './ProjectsContainer.module.css'

const PROJECTS = [
    { 
        class: 'Nasa_Image', 
        name: 'Nasa Image Viewer', 
        description: "A UI connected to NASA's backend database.",
        url: 'https://thawing-beyond-21625.herokuapp.com'
    },
    { 
        class: 'Books_Image', 
        name: 'Book List Manager', 
        description: "A interface to help a user keep track of their reading last.",
        url: 'https://google.com'
    },
    {
        class: 'Weather_Image',
        name: 'Forecast App',
        description: 'A small app that presents a forecast based on an entered zip code.',
        url: 'https://sleepy-lowlands-66314.herokuapp.com'
    }
]
export default function ProjectsContainer() {
    return (
        <div className = { classes.Projects_Container }>
            { PROJECTS.map(project => 
                <Project
                    key = { project.class } 
                    CSSClass = { project.class }
                    name = { project.name }
                    description = { project.description }
                    url = { project.url } /> )}
        </div>
    )
}