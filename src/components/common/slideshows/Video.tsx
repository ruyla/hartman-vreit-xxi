import styles from "./Video.module.css"

export default function Video() {
    return (
        <video className={`${styles.video}`} autoPlay muted loop>
            <source className={`${styles.video}`} src={"https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/Ashford-on-the-Bayou"} type="video/mp4" />
        </video>

    )
}
