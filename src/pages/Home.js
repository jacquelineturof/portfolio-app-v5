import React from 'react'

import MainHeader from '../components/MainHeader'
import Nav from '../components/Nav'
import Animation from '../components/HomeAnimation2'

import '../App.css'

export default function Home() {
    return (
        <section className = "Page">
            <Animation />
            <MainHeader />
            <Nav />
        </section>
    )
}
