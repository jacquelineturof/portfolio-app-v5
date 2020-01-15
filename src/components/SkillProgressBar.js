import React from 'react'

import Label from './SkillLabel'
import Progress from './SkillProgress'

import '../App.css'

export default function SkillProgressBar() {
    return (
        <div className = "Bar">
            <Label title = "Javascript" />
            <Progress percentage = "Skill_Eight" />
        </div>
    )
}