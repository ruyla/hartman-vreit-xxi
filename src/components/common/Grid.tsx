import styles from './Grid.module.css'

const Grid = ({ children }: Partial<IComponent>) => {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}
export default Grid