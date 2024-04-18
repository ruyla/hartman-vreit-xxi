import Box from "@/components/common/Box"
import Vessel from "@/components/common/Vessel"
import Title from "@/components/headers/Title"
import { Metadata } from "next"
import styles from './Page.module.css'

export const metadata: Metadata = {
    title: 'About'
}

const Page = () => {
    return (
        <Vessel>
            <Title title='About Us' />
            <Box>
                <p className={styles.text}>Hartman is a leading commercial real estate management company within Texas. With over a decade of industry experience, our team has a proven track record of providing exceptional property management services to our clients.</p>
                <p className={styles.text}>We specialize in managing all types of commercial properties, including office buildings, retail centers, industrial parks, and more. Our comprehensive services range from leasing and tenant management to maintenance and property improvement projects.</p>
                <p className={styles.text}>At Hartman, we pride ourselves on our commitment to client satisfaction and delivering results that exceed expectations. We understand that every property is unique and we tailor our services to meet the specific needs of each client.</p>
                <p className={styles.text}> We are dedicated to the success and growth of our clients&apos; businesses and strive to develop long-term relationships with each of them. Our team is passionate about what we do and we are proud to play a key role in the success of the properties we manage.</p>
            </Box>
        </Vessel>
    )
}
export default Page