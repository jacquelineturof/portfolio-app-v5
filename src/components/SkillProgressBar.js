import React from 'react'

import Label from './SkillLabel'
import Progress from './SkillProgress'
import Percent from './SkillPercentage'

import '../App.css'

export default function SkillProgressBar({ name, percent }) {
    let cssPercent
    let percentage = `${percent}%`

    switch (percent) {
        case(80):
            cssPercent = "Skill_Eight"
            break
        case(75):
            cssPercent = "Skill_Seven_Five"
            break
        case(65):
            cssPercent = "Skill_Six_Five"
            break
        case(55):
            cssPercent = "Skill_Five_Five"
            break
        case(45):
            cssPercent = "Skill_Four_Five"
            break
        default:
            cssPercent = null // error 
    }

    return (
        <div className = "Bar">
            <Label title = { name } />
            <Progress percentage = { cssPercent } />
            <Percent percent = { percentage } />
        </div>
    )
}