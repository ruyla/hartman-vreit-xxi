"use client"

import styles from './Contact.module.css'
import Set from './inputs/Set'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Variants, motion } from 'framer-motion'

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
}
const initialErrors = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}

const scrollIn: Variants = {
    hide: {
        opacity: 0,
        y: 250,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

const Contact = () => {
    const [values, setValue] = useState(initialValues)
    const [message, setMessage] = useState("")
    const [errors] = useState(initialErrors)
    const [sent, isSent] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValue({
            ...values, [name]: value,
        });
    }
    const validate = () => {
        let isValid = true
        if (!values.firstName.trim()) {
            errors.firstName = "First name is required."
            isValid = false
        } else {
            errors.firstName = ""
        }
        if (!values.lastName.trim()) {
            errors.lastName = "Last name is required."
            isValid = false
        } else {
            errors.lastName = ""
        }
        if (!values.email.trim()) {
            errors.email = "Email address is required."
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Invalid email address provided."
            isValid = false
        } else {
            errors.email = ""
        }
        if (!message.trim()) {
            errors.message = "A message is required."
            isValid = false
        } else {
            errors.message = ""
        }
        return isValid
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validate()) {
            if (!sent) {
                let params = ({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    message: message
                })
                const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
                const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
                const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
                console.log(publicKey, serviceID, templateID)
                emailjs.send(serviceID, templateID, params, publicKey)
                    .then((result) => {
                        console.log("Success with EmailJS: " + result.text)
                    }, (error) => {
                        console.log("Error with EmailJs: " + error.txt)
                    });
                isSent(true)
            }
        }
    }

    /* Once they send the form, this will appear instead. */
    if (sent) {
        return (
            <div className={styles.form}>
                <h3>Your message has been sent!</h3>
            </div>
        )
    }
    /* This is our form that appears on the page. */
    return (
        <motion.form className={styles.form}
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={scrollIn}
            onSubmit={handleSubmit}>
            <h3></h3>
            <div className={styles.group}>
                <Set
                    error={errors.firstName}
                    htmlFor='firstName'
                    id='firstName'
                    label='First Name'
                    name='firstName'
                    onChange={handleChange}
                    placeholder='What is your first name?'
                    value={values.firstName}
                />
                <Set
                    error={errors.lastName}
                    htmlFor='lastName'
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    onChange={handleChange}
                    placeholder='What is your last name?'
                    value={values.lastName} />
            </div>
            <Set
                error={errors.email}
                htmlFor='email'
                id='email'
                label='Email Address'
                name='email'
                onChange={handleChange}
                placeholder='What is your email address?'
                type2='email'
                value={values.email} />
            <div className={styles.wrapper}>
                <label className={styles.label}
                    htmlFor='message'>
                    Message
                </label>
                <textarea className={styles.textarea}
                    id='message'
                    name='message'
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='What is your inquiry?'
                    value={message} />
                {errors.message === "" ? "" : <span className={styles.span}>{errors.message}</span>}
            </div>
            <button className={styles.button}
                type="submit">
                Submit
            </button>
        </motion.form>
    )
}
export default Contact