import React from 'react'

import Nav from './Nav'
import Header from './MainHeader'

import '../App.css'

/*
    A content page wrapper.
*/
export default function ContentPage({ children }) {
    return (
        <section className = "Page Top">
            <Nav />
            <Header />
            { children }
        </section>
    )
}