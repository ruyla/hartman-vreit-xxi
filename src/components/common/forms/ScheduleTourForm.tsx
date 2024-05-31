"use client"

import { useState } from "react"
import emailjs from '@emailjs/browser'
import styles from './ScheduleTourForm.module.css'

const ScheduleTourForm = () => {
    const [values, setValue] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        message: '',
    });
    const [message, setMessage] = useState("");
    const [errors] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        message: '',
    })
    const [sent, isSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue({ ...values, [name]: value });
    }

    const validate = () => {
        let isValid = true;
        if (!values.firstName.trim()) {
            errors.firstName = "First name is required."
        }
        if (!values.lastName.trim()) {
            errors.lastName = "Last name is required."
        }
        if (!values.phoneNumber.trim()) {
            errors.phoneNumber = "Phone number is required."
        }
        if (!values.emailAddress.trim()) {
            errors.emailAddress = "Email address is required."
        } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
            errors.emailAddress = "Invalid email address provided."
            isValid = false
        }
        return isValid;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            if (!sent) {
                let params = ({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phoneNumber: values.phoneNumber,
                    emailAddress: values.emailAddress,
                    message: values.message,
                });
                // const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
                // const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
                // const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SCHEDULE_FORM as string;
                const publicKey = "tCeWU-i5CTIVGm3QM"
                const serviceID = "service_52tr916"
                const templateID = "template_regoji7"
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

    //TODO: Make a simple box appear instead of the form indiciating the form has been sent.
    if (sent) {
        return (
            <div className={``}>
                <p>A representative will contact you soon to schedule your tour. Thank you for your interest!</p>
            </div>
        )
    }

    //TODO: Design a simple form to handle the desired information.
    return (
        <form className={`h-full w-full flex items-between justify-center flex-col text-cyan-900`}
            onSubmit={handleSubmit}>
            <fieldset className={`flex items-center justify-between my-2`}>
                <div className={`flex flex-col`}>
                    <label className={`text-white`}
                        htmlFor='firstName'>
                        First Name
                    </label>
                    <input className={`rounded-sm placeholder-gray-500 pl-2 bg-gray-300 border border-solid border-cyan-900/50`}
                        id='firstName'
                        name='firstName'
                        type='text'
                        placeholder='John'
                        value={values.firstName}
                        onChange={handleChange} />
                    {errors.firstName === "" ? "" : <span className={styles.span}>{errors.firstName}</span>}
                </div>
                <div className={`flex flex-col`}>
                    <label className={`text-white`}
                        htmlFor='lastName'>
                        Last Name
                    </label>
                    <input className={`rounded-sm placeholder-gray-500 pl-2 bg-gray-300 border border-solid border-cyan-900/50`}
                        id='lastName'
                        name='lastName'
                        type='text'
                        placeholder='Smith'
                        value={values.lastName}
                        onChange={handleChange} />
                    {errors.lastName === "" ? "" : <span className={styles.span}>{errors.lastName}</span>}
                </div>
            </fieldset>
            <div className={`flex flex-col my-2`}>
                <label className={`text-white`}
                    htmlFor='phoneNumber'>
                    Phone Number
                </label>
                <input className={`rounded-sm placeholder-gray-500 pl-2 bg-gray-300 border border-solid border-cyan-900/50`}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    required
                    id='phoneNumber'
                    name='phoneNumber'
                    type='tel'
                    value={values.phoneNumber}
                    onChange={handleChange} />
                {errors.phoneNumber === "" ? "" : <span className={styles.span}>{errors.phoneNumber}</span>}
            </div>
            <div className={`flex flex-col my-2`}>
                <label className={`text-white`}
                    htmlFor='emailAddress'>
                    Email Address
                </label>
                <input className={`rounded-sm placeholder-gray-500 pl-2 bg-gray-300 border border-solid border-cyan-900/50`}
                    id='emailAddress'
                    name='emailAddress'
                    type='email'
                    placeholder='johnsmith@website.com'
                    value={values.emailAddress}
                    onChange={handleChange} />
                {errors.emailAddress === "" ? "" : <span className={styles.span}>{errors.emailAddress}</span>}
            </div>
            <div className={`my-2 flex flex-col `}>
                <label className={`text-white`}
                    htmlFor='message'>
                    Message
                </label>
                <textarea className={`min-h-16 min-w-32 rounded-sm placeholder-gray-500 pl-2 bg-gray-300 border border-solid border-cyan-900/50`}
                    id='message'
                    name='message'
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Any comments, concerns, or questions?'
                    value={message} />
                {errors.message === "" ? "" : <span className={styles.span}>{errors.message}</span>}
            </div>
            <button className={`bg-red-500 border-2 border-solid border-red-800/70 px-4 py-1 rounded-lg`} type="submit">Submit</button>
        </form>
    )
}

export default ScheduleTourForm;