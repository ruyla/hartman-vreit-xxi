import Vessel from '@/components/common/Vessel'
import Slideshow from '@/components/common/slideshows/Slideshow'
import { PROPERTIES } from '@/data/Properties'
import { ResolvingMetadata } from 'next'
import styles from './Page.module.css'
import Link from 'next/link'
import Modal from '@/components/common/modals/Modal'

type Props = {
    params: { property: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
/*
export async function generateMetadata({ params, searchParams }: Props, parent?: ResolvingMetadata) {
    const id = params.property
    let data = ''
    console.log(parent)
    PROPERTIES.map((value) => {
        if (value.id === id) {
            data = value.displayName
        }
    })
    return {
        title: data
    }
}

/* This will populate our routes. */
export async function generateStaticParams() {
    return getPaths()
}

/* This function will return the ids used in the generateStaticParams() function. */
async function getPaths() {
    const paths: string[] = []

    PROPERTIES.map((value) => {
        paths.push(value.id)
    })

    return paths
}

/* This is what is displayed on each page as pulled from the params. */
const Page = ({ params, searchParams }: Props) => {
    return (
        <Vessel>
            {PROPERTIES.map((value) => {
                if (params.property === value.id) {
                    return (
                        <div className={styles.wrapper}
                            key={value.id}>
                            {/* This is our heading. */}
                            <div className={styles.header}>
                                <h5>{value.displayName}</h5>
                                <h6>{value.address.street}, {value.address.city}, {value.address.state} {value.address.zipCode}</h6>
                            </div>
                            {/* This is our slideshow. */}
                            <div className={styles.slideshow}>
                                <Slideshow
                                    values={value.images} />
                            </div>
                            {/* This is our overview. */}
                            {value.toggle.description ?
                                <div className={styles.overview}>
                                    <h5>Overview</h5>
                                    <p>{value.description}</p>
                                </div> : ''}
                            {/* These are our property managers and engineers. */}
                            {value.toggle.staff ?
                                <div className={styles.staff}>
                                    <h5>Staff</h5>
                                </div> : ''}
                            {/* These are our available spaces. */}
                            {value.toggle.suites ?
                                <div className={styles.availableSpaces}>
                                    <h6>Available Spaces</h6>
                                    {value.suites?.map((v, i) => {
                                        if (v.available) {
                                            return (
                                                <Modal
                                                    key={v.id}
                                                    buttonText={`Suite ${v.id}`}
                                                    imageURL={v.images[0]}
                                                    statistics={
                                                        <div className={styles.statistics}>
                                                            <span>
                                                                <p>{v.sqft} sqft.</p>
                                                            </span>
                                                            <span>
                                                                <p>{v.psf} psf.</p>
                                                            </span>
                                                            <span>
                                                                <Link href={`${v.pdf}`} target='_blank' rel='noreferrer noopener'>&#10515;</Link>
                                                            </span>
                                                        </div>
                                                    } />
                                            )
                                        }
                                    })}
                                </div> :
                                <div className={styles.availableSpaces}>
                                    <h6>Available Spaces</h6>
                                    <p>No spaces are currently available.</p>
                                </div>}
                            {/* These are our reviews. */}
                            {value.toggle.reviews ?
                                <div className={styles.reviews}>
                                    <h5>Reviews</h5>
                                </div> : ''}
                            {/* These are our amenities. */}
                            {value.toggle.amenities ?
                                <div className={styles.amenities}>
                                    <h5>Amenities</h5>
                                    <ul>
                                        {value.amenities?.map((v, i) => {
                                            return (
                                                <li
                                                    key={i}>
                                                    {v}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div> : ''}
                            {value.toggle.schedules.building || value.toggle.schedules.security ?
                                <div className={styles.hours}>
                                    {value.toggle.schedules.building ?
                                        <div className={styles.building}>
                                            <h5>Building Hours</h5>
                                            <span>
                                                <p>Monday</p>
                                                <p>{value.schedules?.building.monday}</p>
                                            </span>
                                            <span>
                                                <p>Tuesday</p>
                                                <p>{value.schedules?.building.tuesday}</p>
                                            </span>
                                            <span>
                                                <p>Wednesday</p>
                                                <p>{value.schedules?.building.wednesday}</p>
                                            </span>
                                            <span>
                                                <p>Thursday</p>
                                                <p>{value.schedules?.building.thursday}</p>
                                            </span>
                                            <span>
                                                <p>Friday</p>
                                                <p>{value.schedules?.building.friday}</p>
                                            </span>
                                            <span>
                                                <p>Saturday</p>
                                                <p>{value.schedules?.building.saturday}</p>
                                            </span>
                                        </div> : ''}
                                    {value.toggle.schedules.security && value.schedules?.security !== undefined ?
                                        <div className={styles.security}>

                                            <h5>Security Hours</h5>
                                            <span>
                                                <p>Monday</p>
                                                <p>{value.schedules?.security.monday}</p>
                                            </span>
                                            <span>
                                                <p>Tuesday</p>
                                                <p>{value.schedules?.security.tuesday}</p>
                                            </span>
                                            <span>
                                                <p>Wednesday</p>
                                                <p>{value.schedules?.security.wednesday}</p>
                                            </span>
                                            <span>
                                                <p>Thursday</p>
                                                <p>{value.schedules?.security.thursday}</p>
                                            </span>
                                            <span>
                                                <p>Friday</p>
                                                <p>{value.schedules?.security.friday}</p>
                                            </span>
                                            <span>
                                                <p>Saturday</p>
                                                <p>{value.schedules?.security.saturday}</p>
                                            </span>
                                        </div> : ''}
                                </div> : ''}
                            <div className={styles.resources}>
                                <Link href={`${value.links.loopnet}`} target='_blank' rel='noreferrer noopener'>Loopnet</Link>
                                <Link href={`${value.links.flyer}`} target='_blank' rel='noreferrer noopener'>Official Property Flyer</Link>
                            </div>
                        </div>
                    )
                }
            })}
        </Vessel>
    )
}
export default Page