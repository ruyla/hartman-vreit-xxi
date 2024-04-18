import Grid from '@/components/common/Grid'
import Vessel from '@/components/common/Vessel'
import Card from '@/components/common/cards/Card'
import Title from '@/components/headers/Title'
import { PROPERTIES } from '@/data/Properties'
import { ResolvingMetadata } from 'next'

type Props = {
    params: { city: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

/*
export async function generateMetadata({ params, searchParams }: Props, parent?: ResolvingMetadata) {
    let id = params.city
    if (id === 'san-antonio') {
        id = 'San Antonio'
    } else if (id === 'houston') {
        id = 'Houston'
    } else if (id === 'dallas') {
        id = 'Dallas'
    }
    return {
        title: id
    }
}

/* This will populate our routes. */
export async function generateStaticParams() {
    return getPaths()
}

/* This function will return the ids used in the generateStaticParams() function. */
async function getPaths() {
    const paths: string[] = []

    paths.push('dallas')
    paths.push('houston')
    paths.push('san-antonio')

    return paths
}

/* This is what is displayed on each page as pulled from the params. */
const Page = ({ params, searchParams }: Props) => {
    let id = params.city
    if (id === 'san-antonio') {
        id = 'San Antonio'
    } else if (id === 'houston') {
        id = 'Houston'
    } else if (id === 'dallas') {
        id = 'Dallas'
    }

    const properties: any[] = []
    PROPERTIES.map((value) => {
        if (value.address.city === id) {
            properties.push(value)
        }
        if (params.city === 'dallas') {
            if (value.address.city === 'The Colony' || value.address.city === 'Richardson') {
                properties.push(value)
            }
        }
    })
    return (
        <Vessel>
            <Title title={id} />
            <Grid>
                {properties.map((value) => {
                    return (
                        <Card
                            key={value.id}
                            image={value.images[0]}
                            link={value.links.url}>
                            <h5>{value.displayName}</h5>
                            <h6>{value.address.street}<br />{value.address.city}, {value.address.state} {value.address.zipCode}</h6>
                        </Card>
                    )
                })}
            </Grid>
        </Vessel>
    )
}
export default Page