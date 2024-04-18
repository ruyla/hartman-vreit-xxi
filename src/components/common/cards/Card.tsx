'use client'

import styles from './Card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'

const scrollIn: Variants = {
    hide: {
        opacity: 0,
        y: 100,
    },
    leave: {
        opacity: 0,
        y: -100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
        }
    }
}

const Card = ({ children, image, link }: Partial<IComponent>) => {
    return (
        <motion.div className={styles.div}
            initial="hide"
            whileInView="show"
            exit="leave"
            variants={scrollIn}>
            <Link className={styles.card}
                href={`${link}`}>
                <div className={styles.wrapper}>
                    <div className={styles.imageContainer}>
                        <Image className={styles.image}
                            src={`${image}` || ""}
                            alt=""
                            fill
                            priority
                            sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 20vw, 80vw"
                            style={{ objectPosition: "center" }} />
                    </div>
                    <div className={styles.textContainer}>
                        {children}
                    </div>
                </div>
            </Link>
        </motion.div>

    )
}
export default Card