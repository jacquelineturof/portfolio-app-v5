import React from 'react'

import '../App.css'

export default function SkillProgress({ percentage }) {
    console.log('p: ', percentage)
    const classNameString = `Skill_Progress ${percentage}`
    console.log(classNameString)
    return (
        <div className = { classNameString }>

        </div>
    )
}