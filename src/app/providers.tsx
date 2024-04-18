"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as string}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: 'head',
                nonce: undefined
            }}>
            {children}
        </GoogleReCaptchaProvider>
    )
}
export default Providers