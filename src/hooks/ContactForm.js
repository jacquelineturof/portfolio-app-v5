import React, { useState } from 'react'

import Button from '../components/UI/Button'

import axios from '../axios-firebase'

import classes from './ContactForm.module.css'

const Input = ({ value, setValue, isTextArea, placeholder, type }) => {
    let field = (
        <input 
            value = { value }
            onChange = { e => setValue(e.target.value) }
            placeholder = { placeholder }
            className = { classes.Input }
            type = { type } />
    )

    if (isTextArea) {
        field = (
            <textarea
                value = { value } 
                onChange = { e => setValue(e.target.value )}
                className = { classes.TextArea }
                placeholder = { placeholder }>
            </textarea>
        )
    }

    return field
}

export default function ContactForm() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')

    const submitHandler = async e => {
        e.preventDefault()
        const contactMessage = { name, email, message }

        try {
            await axios.post('/message.json', contactMessage)
        } catch (e) {
            console.log(e)
        }

        resetForm()
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <form 
            className = { classes.Form }
            onSubmit = { submitHandler }>
            <Input 
                value = { name } 
                setValue = { setName }
                type = "text"
                placeholder = "Your Name" />
            <Input 
                value = { email } 
                setValue = { setEmail }
                type = "email"
                placeholder = "Your Email" />
            <Input 
                value = { message } 
                setValue = { setMessage }
                isTextArea = { true }
                placeholder = "Message" />
            <Button buttonClass = "Contact">
                Submit
            </Button>
        </form>
    )
}