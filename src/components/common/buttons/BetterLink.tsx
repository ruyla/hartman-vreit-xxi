import styles from './BetterLink.module.css'
import Link from 'next/link'

/* This is a general button for linking to other pages. You can have the target go to an external URL by declaring the target prop as 'external'. */
const BetterLink = ({ display, link, target = 'internal' }: Partial<IComponent>) => {
    if (target === 'internal') {
        return (
            <Link className={styles.wrapper}
                href={`${link}`}>
                {display}
            </Link>
        )
    } else {
        return (
            <a className={styles.wrapper}
                href={`${link}`}>
                {display}
            </a>
        )
    }
}
export default BetterLink