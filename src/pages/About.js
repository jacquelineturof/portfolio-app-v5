import React from 'react'

import ContentPage from '../components/ContentPage'
import Image from '../components/MyImage'
import Description from '../components/MyDescription'

import '../App.css'

export default function About() {
    return (
            <ContentPage>
                <Image />
                <Description />
            </ContentPage>
    )
}