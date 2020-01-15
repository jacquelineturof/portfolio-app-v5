import React from 'react'

import SkillBar from './SkillProgressBar'

import '../App.css'

const SKILLS = [
    { name: 'Javascript', percent: 80 },
    { name: 'Reactjs', percent: 75 },
    { name: 'ReactNative', percent: 55 },
    { name: 'Angular', percent: 45 },
    { name: 'Java', percent: 45 },
    { name: 'APIs & REST', percent: 65 },
    { name: 'SQL/NoSQL', percent: 65 },
    { name: 'Firebase', percent: 55 }
]

export default function SkillsContainer() {
    return (
        <div className = "Skills_Container">
            { SKILLS.map((skill, index ) => 
                <SkillBar
                    key = { index } 
                    name = { skill.name } 
                    percent = { skill.percent }
                     />)}
        </div>
    )
}