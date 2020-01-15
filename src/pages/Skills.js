import React from 'react'

import ContentPage from '../components/ContentPage'
import Skills from '../components/SkillsContainer'

import '../App.css'

export default function SkillsPage() {
    return (
        <ContentPage center = { true }>
            <Skills />
        </ContentPage>
    )
}