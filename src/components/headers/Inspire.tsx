"use client"

import { motion, Variants } from 'framer-motion'
import styles from './Inspire.module.css'
import BetterLink from '../common/buttons/BetterLink'
import Link from 'next/link'

const fadeIn: Variants = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Inspire = () => {
    return (
        <motion.div className={styles.inspire}
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={fadeIn}>
            <div className={styles.div}>
                <div className={styles.wrapper}>
                    <h1>FREE RENT!</h1>
                    <h3>Refer a business to lease and receive a free month of rent!</h3>
                </div>
                <div className={styles.wrapper}>
                    <Link className={styles.link} href='/en/support/contact-us'>Refer Now!</Link>
                </div>
            </div>
        </motion.div>
    )
}
export default Inspire