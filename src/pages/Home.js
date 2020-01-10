import React from 'react'

import MainHeader from '../components/MainHeader'
import Nav from '../components/Nav'

import '../App.css'

export default function Home() {
    return (
        <section className = "Page">
            <MainHeader />
            <Nav />
        </section>
    )
}
