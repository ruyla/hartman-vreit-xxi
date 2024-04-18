import styles from './Slide.module.css'
import Image from "next/image"

const Slide = ({ value }: any) => {
    return (
        <Image className={styles.slide}
            src={value}
            alt=""
            height={1080}
            width={1920}
            quality={100}
            style={{ objectFit: "fill", height: "100%", width: "100%" }} />
    )
}
export default Slide