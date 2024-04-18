import styles from './Title.module.css'

const Title = ({ children, title }: Partial<IComponent>) => {
    return (
        <div className={styles.title}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}
export default Title