import Vessel from "@/components/common/Vessel"
import { Metadata } from "next"
import { PEOPLE } from '../../../../data/People'
import styles from './Page.module.css'
import Image from "next/image"
import Grid from "@/components/common/Grid"
import Title from "@/components/headers/Title"

export const metadata: Metadata = {
    title: 'Executives'
}

const Page = () => {
    return (
        <Vessel>
            <Title
                title='Executives' />
            <Grid>
                {PEOPLE.map((value, index) => {
                    return (
                        <div className={styles.wrapper}
                            key={index}>
                            <Image className={styles.image}
                                src={value.image}
                                alt={value.name}
                                height="1080"
                                width="1920"
                                quality={100}
                                style={{ objectFit: "fill", height: "100%", width: "100%" }} />
                            <div className={styles.text}>
                                <h3>{value.name}</h3>
                                <h5>{value.title}</h5>
                            </div>
                        </div>
                    )
                })}
            </Grid>
        </Vessel>
    )
}
export default Page