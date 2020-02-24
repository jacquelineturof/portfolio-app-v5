import React from 'react'

import SVG from '../components/HomeSVG'
import MainHeader from '../components/MainHeader'
import Nav from '../components/UI/Nav'

import '../App.css'

export default function Home() {
    return (
        <section className = "Page Center">
            <SVG />
            <MainHeader />
            <Nav />
        </section>
    )
}
