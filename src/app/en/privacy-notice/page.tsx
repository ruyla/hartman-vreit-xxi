import Box from "@/components/common/Box"
import Vessel from "@/components/common/Vessel"
import { Metadata } from "next"
import styles from './Page.module.css'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Privacy Notice'
}

const Page = () => {
    return (
        <Vessel>
            <Box>
                <div className={styles.wrapper}>
                    <h1>Privacy Notice</h1>
                    <p>Last updated: August 09, 2023</p>
                    <p>
                        Hartman VReit XXI values the privacy and security of any personal information we collect from our customers, visitors, and users. This policy explains what data we may collect, how we use it, and how we protect your personal information.
                    </p>
                    <h5>1. What information do we collect?</h5>
                    <p>
                        We may collect personal information from you when you visit our website, use our services, or interact with our staff. This information may include your name, email address, phone number, mailing address, payment information, or any other information you provide to us voluntarily.
                    </p>
                    <h5>2. How do we use your information?</h5>
                    <p>
                        We may use your personal information for the following purposes:
                    </p>
                    <ul>
                        <li>To provide the services you have requested</li>
                        <li>To communicate with you about your account or the services we provide</li>
                        <li>To respond to your inquiries or requests</li>
                        <li>To improve our services and customer experience</li>
                        <li>To comply with legal or regulatory requirements</li>
                    </ul>
                    <p>
                        We will not sell, share, or distribute your personal information to third parties unless we have your permission or are required by law to do so.
                    </p>
                    <h5>3. How do we protect your information?</h5>
                    <p>
                        We use reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. We follow industry-standard practices to ensure that your data is stored securely and encrypted when necessary.
                    </p>
                    <h5>4. Your rights and choices</h5>
                    <p>
                        You have certain rights regarding your personal information, including the right to access, correct, or delete any personal data we have collected about you. If you would like to exercise any of these rights, please contact us using the contact information provided below.
                    </p>
                    <h5>5. Changes to this policy</h5>
                    <p>
                        We may update this privacy notice policy from time to time to reflect changes in our use of personal information. We will notify you of any material changes to this policy by posting the updated version on our website.
                    </p>
                    <h5>Contact Us</h5>
                    <p>
                        If you have any questions or concerns about our privacy notice policy, please visit <Link href='/en/support/contact-us'>https://www.hartman-properties.com/en/support/contact-us</Link>
                    </p>
                </div>
            </Box>
        </Vessel>
    )
}
export default Page