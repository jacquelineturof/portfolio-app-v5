import React from 'react'

import '../App.css'

export default function SkillProgress({ percentage }) {
    const classNameString = `Skill_Progress ${percentage}`
    return (
        <div className = { classNameString }>

        </div>
    )
}