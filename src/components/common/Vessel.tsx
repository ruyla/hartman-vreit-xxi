/* This is a basic container that has a flex display with automatic centering of children. */
import styles from './Vessel.module.css'
import React from 'react'

interface IVessel {
    children: React.ReactNode
    flexDirection: "column" | "row" | undefined
}

const Vessel = ({ children, flexDirection = "column" }: Partial<IVessel>) => {
    return (
        <div className={styles.vessel}
            style={{ flexDirection: flexDirection }}>
            {children}
        </div>
    )
}
export default Vessel