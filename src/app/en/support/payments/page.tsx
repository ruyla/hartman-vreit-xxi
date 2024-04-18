import Box from "@/components/common/Box"
import Vessel from "@/components/common/Vessel"
import Title from "@/components/headers/Title"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Payments'
}

const Page = () => {
    return (
        <Vessel>
            <Title title='Payment Information' />
            <Box>
                <p>At this we can only accept payments via ACH or check.<br />For ACH information, please contact your property management office for details.<br />
                    Otherwise, please direct all payments to: <br />Attn: Margaret Hartman<br />11211 Katy Freeway Ste. 309<br />Houston, TX 77079</p>
            </Box>
        </Vessel >
    )
}
export default Page