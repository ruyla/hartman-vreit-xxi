/* This is a basic container that has a flex display with automatic centering of children. */
import styles from './Box.module.css'
import React from 'react'

interface IBox {
    children: React.ReactNode
    flexDirection: "column" | "row" | undefined
}

const Box = ({ children, flexDirection = 'column' }: Partial<IBox>) => {
    return (
        <div className={styles.box}
            style={{ flexDirection: flexDirection }}>
            {children}
        </div>
    )
}
export default Box