"use client"

import { motion, Variants } from 'framer-motion'
import styles from './Full.module.css'
import Image from 'next/image'
import Video from '../common/slideshows/Video'

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

const Full = ({ children }: Partial<IComponent>) => {
    return (
        <motion.header className={styles.header}
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={fadeIn}>
            <Video />
            {/*
            <Image className={styles.image}
                src={"https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Entrance-3-LargeHighDefinition.jpg"} //https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-1400-Broadfield-Blvd-1-Large.jpg
                alt=" "
                fill
                priority
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 20vw, 80vw"
                style={{ objectPosition: "center" }}
            />
    */}
            {children}
        </motion.header>
    )
}
export default Full