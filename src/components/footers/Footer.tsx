"use client"

import { Variants, motion } from 'framer-motion'
import styles from './Footer.module.css'
import Link from "next/link"

const Footer = ({ children }: { children: React.ReactNode }) => {
    const scrollIn: Variants = {
        hide: {
            opacity: 0,
            x: -200,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
            }
        }
    }
    return (
        <footer className={styles.footer}>
            <motion.ul className={styles.ul}
                initial="hide"
                whileInView="show"
                exit="show"
                variants={scrollIn}>
                <Link className={styles.link} href="/en/support/contact-us">Contact Us</Link>
                <Link className={styles.link} href="/en/terms-of-use">Terms of Use</Link>
                <Link className={styles.link} href="/en/privacy-notice">Privacy Notice</Link>
                {/*<Link className={styles.link} href="/en/cookies">Cookie Settings</Link>*/}
            </motion.ul>
            <span className={styles.copyright}>Copyright © 2023 Hartman VReit XXI. All rights reserved.</span>
        </footer>
    )
}
export default Footer