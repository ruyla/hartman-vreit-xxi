import styles from './Banner.module.css'

const Banner = ({ children, title }: Partial<IComponent>) => {
    return (
        <header className={styles.header}>
            {title}
            {children}
        </header>
    )
}
export default Banner