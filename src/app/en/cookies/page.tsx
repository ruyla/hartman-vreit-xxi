import Vessel from "@/components/common/Vessel"
import Title from "@/components/headers/Title"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Cookies'
}

const Page = () => {
    return (
        <Vessel>
            <Title title='Cookie Settings' />
        </Vessel>
    )
}
export default Page