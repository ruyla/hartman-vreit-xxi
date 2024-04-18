"use client"

import styles from './Slideshow.module.css'
import { useEffect, useState } from 'react'
import Slide from './slides/Slide'
import { motion, Variants } from 'framer-motion'

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

const Slideshow = ({ values }: any) => {
    const [current, setCurrent] = useState(0)
    const [paused, setPaused] = useState(false)

    /* This will update the index of our slideshow. */
    const updateIndex = (index: number) => {
        if (index < 0) {
            index = values.length - 1
        } else if (index >= values.length) {
            index = 0
        }
        setCurrent(index)
    }

    /* This is our timer function for the automatic play of our slideshow, with an added pause check. */
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(current + 1)
            }
        }, 3000)
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    return (
        <motion.div className={styles.slideshow}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={scrollIn}>
            <div className={styles.slides}
                style={{ transform: `translateX(-${current * 100}%)`, transition: 'translate 0.3' }}>
                {values.map((value: any, index: number) => {
                    return (
                        <Slide
                            key={index}
                            value={value} />
                    )
                })}
            </div>
            {/* Previous Button */}
            <div className={`${styles.wrapper} ${styles.previous} bg-black/70`}>
                <button
                    onClick={() => {
                        updateIndex(current - 1)
                    }}>
                    &#8249;
                </button>
            </div>
            {/* Dots */}
            <div className={`${styles.wrapper} ${styles.dots}  bg-black/70`}>
                {values.map((value: any, index: number) => {
                    return (
                        <button className={`${index === current ? styles.current : ""} ${styles.dot}`}
                            key={index}
                            onClick={() => setCurrent(index)} />
                    )
                })}
            </div>
            {/* Next Button */}
            <div className={`${styles.wrapper} ${styles.next}  bg-black/70`}>
                <button
                    onClick={() => {
                        updateIndex(current + 1)
                    }}>
                    &#8250;
                </button>
            </div>
        </motion.div>
    )
}
export default Slideshow