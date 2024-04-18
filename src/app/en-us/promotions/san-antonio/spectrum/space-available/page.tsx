import { Metadata } from "next";
import styles from "./Page.module.css"
import Footer from "@/components/footers/Footer";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Space Available'
}

export default function Page() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image className={styles.image}
                    src="https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Main-Lobby-9-LargeHighDefinition.jpg"
                    alt=""
                    priority
                    height={1080}
                    width={1920}
                    style={{ height: "50vh", objectPosition: "center", width: "100%" }} />
                <h1>Co-Working Space Available</h1>
                <div>
                    <h3>Spectrum</h3>
                    <p>613 NW Loop 410, San Antonio, TX 78216</p>
                </div>
                <div>
                    {/* Button for Form */}
                </div>
            </header>
            <main className={styles.main}>
                <section>
                    <div>
                        <ul>
                            <li>Flexible Lease Terms</li>
                            <li>Free Parking Included</li>
                            <li>24-hour Conrolled Building Access</li>
                            <li>Break Area Access</li>
                            <li>Complimentary water, tea, and coffee</li>
                            <li>Ideally located near North Star Mall</li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src="https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/200/922-The+Spectrum+Building+Cubicle+Stations+2.jpg"
                            alt=""
                            height={1080}
                            width={1920}
                            quality={100}
                            style={{ objectFit: "fill", height: "100%", width: "100%" }} />
                    </div>


                </section>
                <section>
                    {/* Break Room https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/200/922-The+Spectrum+Building+Break+Area.jpg */}
                    {/* Cubicles https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/200/922-The+Spectrum+Building+Cubicle+Stations+2.jpg */}
                    {/* Building Lobby https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Main-Lobby-9-LargeHighDefinition.jpg */}
                    <div>
                        KAILA BRODEUR
                        210-769-4546
                        kbrodeur@hartman-properties.com
                        613 NW Loop 410, San Antonio, Texas 78216
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                <Footer>

                </Footer>
            </footer>
        </div>
    )
}