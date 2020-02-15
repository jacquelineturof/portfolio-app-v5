import React from 'react'

import ContentPage from '../components/ContentPage'
import ContactForm from '../hooks/ContactForm'

import classes from './Contact.module.css'

const Header = () => (
    <div className = { classes.ContactHeader }>
        <h1 className = { classes.Heading }>
            Contact
        </h1>
        <p className = { classes.SubHeading }>
            Have a question or a project for me?
        </p>
    </div>
)

export default function Contact() {
    return (
        <ContentPage>
            <Header />
            <ContactForm />
        </ContentPage>
    )
}