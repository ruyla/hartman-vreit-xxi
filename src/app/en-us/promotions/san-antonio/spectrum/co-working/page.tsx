import { Metadata } from "next";
import styles from "./Page.module.css"
import Footer from "@/components/footers/Footer";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Co-Working'
}
const Page = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                {/* Cover Image */}
                {/* Heading */}
                {/* Button */}
                {/*Form*/}
                {/* Button and Form will be a seperate component that is a modal and form */}
            </header>
            <main className={styles.main}>
                <section className={styles.sectionOne}>
                    <span className={styles.span}>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                            <li>Item 5</li>
                        </ul>
                    </span>
                    <span className={styles.span}>
                        <Image
                            src="https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/200/image+(1).jpg"
                            alt=""
                            height={1080}
                            width={1920}
                            quality={100}
                            style={{ objectFit: "fill", height: "100%", width: "100%" }} />
                    </span>
                </section>
                <section className={styles.sectionTwo}>
                    SectionTwo
                </section>
            </main>
            <footer className={styles.footer}>
                <Footer>

                </Footer>
            </footer>
        </div>
    )
}
export default Page