import Vessel from "@/components/common/Vessel"
import Contact from "@/components/common/forms/Contact"
import Title from "@/components/headers/Title"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Us'
}

const Page = () => {
    return (
        <Vessel>
            <Title title='Contact Us' />
            <Contact />
        </Vessel>
    )
}
export default Page