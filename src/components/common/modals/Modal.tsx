"use client"

import { useEffect, useState } from 'react'
import styles from './Modal.module.css'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface IModal {
    buttonText: string
    imageURL: string | StaticImport
    statistics: any
}

const Modal = ({ buttonText, imageURL, statistics }: IModal) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleEscapeKey = (e: { key: string }) => {
            if (e.key === 'Escape') {
                setOpen(false)
            }
        }
        window.addEventListener('keydown', handleEscapeKey)

        return () => {
            window.removeEventListener('keydown', handleEscapeKey)
        }
    })
    return (
        <div className={styles.modal}>
            <button className={styles.button}
                type='button'
                onClick={() => setOpen(!open)}>
                {buttonText}
            </button>
            {/* If the modal is open, display it. */}
            {open ?
                <div className={styles.background}>
                    <div className={styles.box}>
                        <Image className={styles.image}
                            src={imageURL}
                            alt=""
                            height={1080}
                            width={1920}
                            quality={100}
                            style={{ objectFit: "fill", height: "100%", width: "100%" }} />
                        <div className={styles.closeButtonContainer}>
                            <button className={styles.closeButton}
                                type='button'
                                onClick={() => setOpen(false)}>
                                X
                            </button>
                        </div>
                        <div className={styles.statistics}>
                            {statistics}
                        </div>
                    </div>
                </div> : ''}
        </div>
    )
}
export default Modal