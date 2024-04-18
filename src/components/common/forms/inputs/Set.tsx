import styles from './Set.module.css'

const Set = ({ className, error, htmlFor, id, label, name, onChange, placeholder, type2, value }: Partial<IComponent>) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <label className={styles.label}
                htmlFor={htmlFor}>
                {label}
            </label>
            <input className={styles.input}
                id={id}
                name={name}
                type={type2}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
            {error === "" ? "" : <span className={styles.span}>{error}</span>}
        </div>
    )
}
export default Set