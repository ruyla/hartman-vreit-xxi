const baseURL = '/en/leasing/properties/'
export const PROPERTIES = [
    /* ------------------- */
    /*        DALLAS       */
    /* ------------------- */

    /* THE COLONY */
    {
        address: {
            city: 'The Colony',
            state: 'Texas',
            street: '5651 Highway 121',
            zipCode: '75056'
        },
        displayName: 'The Colony',
        id: 'the-colony',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/the-colony/5651-State-Highway-121-The-Colony-TX-Primary-Photo-1-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/the-colony/The+Colony+Retail+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/5651-State-Highway-121-The-Colony-TX/13744752/',
            url: baseURL + 'dallas/the-colony',
        },
        toggle: {
            address: true,
            amenities: false,
            class: false,
            description: false,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            reviews: false,
            schedules: {
                building: false,
                security: false
            },
            size: false,
            staff: false,
            suites: false,
            type: false,
            year: false,
        },
    },
    /* RICHARDSON TECH CENTER */
    {
        address: {
            city: 'Richardson',
            state: 'Texas',
            street: '651 North Plano Rd',
            zipCode: '75081'
        },
        amenities: ['Professional Ownership and Management', 'Building Signage Available', 'Easy Access to Restaurants, Post Office, Retail Centers', 'Dock High and Grade Loading', 'After-hours, Direct and Controlled Suite Access', 'Surveillance Cameras', '14\' Clear Height', '100% Tenant-controlled HVAC'],
        description: ['Richardson Tech Center is a Class B four-building top-tier flex showroom property conveniently located two miles east of Highway 75. This property is minutes away from some of Dallas\' most popular, high-end retail, entertainment and fine dining establishments with excellent access to the Lyndon B. Johnson Freeway, George Bush Turnpike and Highway 75 interchange.'],
        displayName: 'Richardson Tech Center',
        id: 'richardson-tech-center',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/richardson-tech-center/651-N-Plano-Rd-Richardson-TX-921-richardson-tech-center-01-1-Large.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/richardson-tech-center/Richardson+Tech+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/651-N-Plano-Rd-Richardson-TX/17555491/',
            url: baseURL + 'dallas/richardson-tech-center',
        },
        schedules: {
            building: {
                monday: '7:00 AM - 6:00 PM',
                tuesday: '7:00 AM - 6:00 PM',
                wednesday: '7:00 AM - 6:00 PM',
                thursday: '7:00 AM - 6:00 PM',
                friday: '7:00 AM - 6:00 PM',
                saturday: '8:00 AM - 1:00 PM',
                sunday: '---'
            },
        },
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            reviews: false,
            schedules: {
                building: true,
                security: false
            },
            size: false,
            staff: false,
            suites: false,
            type: false,
            year: false,
        },
    },
    /* -------------------- */
    /*        HOUSTON       */
    /* -------------------- */

    /* 11211 KATY FREEWAY */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '11211 Katy Freeway',
            zipCode: '77079'
        },
        amenities: ['Katy Freeway Frontage Location (Energy Corridor)', 'On-site Management and Leasing', 'After-hours Controlled Access', 'Reserved and Covered Parking', 'On-site Conference Room', 'Tenant Lounge', 'Newly Renovated Car Ports', 'New HVAC', 'Monitored Surveillance', 'Renovated Lobby', 'NeedlePoint Bipolar Ionization installed October 2020'],
        description: ['Located in the Energy Corridor on the south side of the Katy Freeway between Kirkwood and Wilcrest. 11211 Katy Freeway offers convenient access to Interstate 10, Beltway 8, and Memorial Drive. 11211 Katy Freeway has numerous restauraunts and retailers nearby providing abundant amenities for its tenants. This building has had over $1,000,000 in common area updates, making this the perfect location for your business.'],
        displayName: '11211 Katy Freeway',
        id: '11211-katy-freeway',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-11211-Katy-Fwy-1-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-11211-Katy-Fwy-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-11211-Katy-Fwy-Alternate-2-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-11211-Katy-Fwy-Entrance-3-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-9x6a9624-9x6a9628-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-9x6a9634-9x6a9638-7-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-9x6a9639-9x6a9643-6-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-9X6A9828-8-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211-Katy-Fwy-Houston-TX-9x6a9965-9x6a9969-10-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/11211+Katy+Freeway+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/11211-Katy-Fwy-Houston-TX/15045777/',
            url: baseURL + 'houston/11211-katy-freeway',
        },
        schedules: {
            building: {
                monday: '8:00 AM - 6:00 PM',
                tuesday: '8:00 AM - 6:00 PM',
                wednesday: '8:00 AM - 6:00 PM',
                thursday: '8:00 AM - 6:00 PM',
                friday: '8:00 AM - 6:00 PM',
                saturday: '8:00 AM - 12:00 PM',
                sunday: '---'
            },
        },
        suites: [
            {
                available: false,
                id: '115-B104',
                images: [''],
                pdf: '',
                psf: 'Upon Request',
                sqft: '805'
            },
            {
                available: false,
                id: '115-B111',
                images: [''],
                pdf: '',
                psf: 'Upon Request',
                sqft: '346'
            },
            {
                available: false,
                id: '222',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/222/92311211+Katy+Fwy+Suite+222+02022021.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/222/92311211+Katy+Fwy+Suite+222+02022021.pdf',
                psf: '$14.00',
                sqft: '1,239'
            },
            {
                available: true,
                id: '224',
                images: [''],
                pdf: '',
                psf: '$14.00',
                sqft: '1,281'
            },
            {
                available: true,
                id: '230',
                images: [''],
                pdf: '',
                psf: '$14.00',
                sqft: '866'
            },
            {
                available: true,
                id: '260',
                images: [''],
                pdf: '',
                psf: '$14.00',
                sqft: '651'
            },
            {
                available: true,
                id: '290',
                images: [''],
                pdf: '',
                psf: '$14.00',
                sqft: '510'
            },
            {
                available: true,
                id: '380',
                images: [''],
                pdf: '',
                psf: '$14.00',
                sqft: '1,101'
            },
            {
                available: true,
                id: '440-F',
                images: [''],
                pdf: '',
                psf: 'Upon Request',
                sqft: '259'
            },
            {
                available: false,
                id: '415',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/415/923-11211+Katy+Fwy+Suite+415+-+1%2C834+nra+10.31.2022+(demo).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/415/923-11211+Katy+Fwy+Suite+415+-+1%2C834+nra+10.31.2022+(demo).pdf',
                psf: '$12.00',
                sqft: '1,834 - 3,122'
            },
            {
                available: false,
                id: '420',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/420/923-11211+Katy+Fwy+Suite+420+-+1%2C288+nra+10.31.2022+(demo).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/420/923-11211+Katy+Fwy+Suite+420+-+1%2C288+nra+10.31.2022+(demo).pdf',
                psf: '$12.00',
                sqft: '1,288 - 3,122'
            }, 
            {
                available: true,
                id: '224',
                images: [''],
                pdf: '',
                psf: '$14.00',
                sqft: '1,281'
            },
            {
                available: true,
                id: '690',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/690/923-11211+Katy+Fwy+Suite+690+-+1%2C201+nra+01.18.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/11211-katy-freeway/690/923-11211+Katy+Fwy+Suite+690+-+1%2C201+nra+01.18.2023+(existing).pdf',
                psf: '$12.00',
                sqft: '1,201'
            },
        ],
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true
            },
            reviews: false,
            schedules: {
                building: true,
                security: false
            },
            size: false,
            staff: false,
            suites: true,
            type: false,
            year: true,
        },
        year: '1982',
    },
    /* 16420 PARK TEN */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '16420 Park Ten Place',
            zipCode: '77084'
        },
        amenities: ['Free Initial Test Fits', 'Professional Management and Leasing', 'On-site Building Engineer', 'On-site Courtesy Guard', 'Free Garage Parking with Reserved Options Available', 'After-hours Controlled Access', 'On-site Monthly Tenant Appreciation Events', 'Move-in Ready Suites'],
        description: ['16420 Park Ten is a five-story, top-tier Class office property conveniently located in the western sector of the dynamic Energy Corridor, Houston\'s third largest submarket.This property offers excellent access to Highway 6, Interstate 10, and Sam Houston Tollway, benefitting from the current path of suburban development to Houston\'s western sector. 16420 Park Ten boasts an aesthetically pleasing exterior with an equally unique interior with abundant natural light and amenities for its tenants.'],
        displayName: '16420 Park Ten',
        id: '16420-park-ten',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Alternate-Exterior-View-2-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Beautiful-Landscaping-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Courtyard-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Entrance-6-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Exterior-Facade-1-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420-Park-Ten-Place-Dr-Houston-TX-Front-Lobby-7-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/16420+Park+Ten+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/16420-Park-Ten-Place-Dr-Houston-TX/17526177/',
            url: baseURL + 'houston/16420-park-ten',
        },
        schedules: {
            building: {
                monday: '7:00 AM - 6:00 PM',
                tuesday: '7:00 AM - 6:00 PM',
                wednesday: '7:00 AM - 6:00 PM',
                thursday: '7:00 AM - 6:00 PM',
                friday: '7:00 AM - 6:00 PM',
                saturday: '7:00 AM- 1:00 PM',
                sunday: '---'
            },
            security: {
                monday: '6:00 AM - 6:00 PM',
                tuesday: '6:00 AM - 6:00 PM',
                wednesday: '6:00 AM - 6:00 PM',
                thursday: '6:00 AM - 6:00 PM',
                friday: '6:00 AM - 6:00 PM',
                saturday: '---',
                sunday: '---'
            }
        },
        suites: [
            {
                available: true,
                id: '205',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/205/927%2B%2B16420%2BPark%2BTen%2BSuite%2B205%2B%2B2980%2Bnra.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/205/927++16420+Park+Ten+Suite+205++2980+nra.pdf',
                psf: '$9.00',
                sqft: '2,980'
            },
            {
                available: true,
                id: '230',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/230/927%2B%2B16420%2BPark%2BTen%2BSuite%2B230%2B%2B2949%2Bnra.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/230/927++16420+Park+Ten+Suite+230++2949+nra.pdf',
                psf: '$11.00',
                sqft: '2,949'
            },
            {
                available: true,
                id: '530',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/530/927%2B%2B16420%2BPark%2BTen%2BSuite%2B530%2B%2B2563%2Bnra.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/530/927++16420+Park+Ten+Suite+530++2563+nra.pdf',
                psf: '$11.00',
                sqft: '2,563'
            },
            {
                available: false,
                id: '540',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/540/927+-+16420+Park+Ten+Suite+540+-+1%2C365+nra+01.19.2023+(existing).jpg'],
                pdf: '',
                psf: '$10.00 - $12.00',
                sqft: '1,365'
            },
            {
                available: false,
                id: '560',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/560/927+-+16420+Park+Ten+Suite+560+-+1%2C330+nra+02.03.2022.jpg'],
                pdf: '',
                psf: '$10.00 - $12.00',
                sqft: '1,330'
            },
            {
                available: false,
                id: '570',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/16420-park-ten/570/927+-+16420+Park+Ten+Suite+570+-+1%2C095+nra+02.03.2022.jpg'],
                pdf: '',
                psf: '$10.00 - $12.00',
                sqft: '1,095'

            }
        ],
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            reviews: false,
            schedules: {
                building: true,
                security: true
            },
            size: false,
            staff: false,
            suites: true,
            type: false,
            year: false,
        },
    },
    /* 1400 BROADFIELD */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '1400 Broadfield Boulevard',
            zipCode: '77084'
        },
        amenities: ['Free Initial Test Fits', 'On-site Management and Leasing', 'On-site Building Engineer', 'On-site Courtesy Guard', 'Live 24-hour Video Surveillance', 'After-hours Controlled Access', 'Free Garage Parking with Reserved Options Available', 'On-site Monthly Tenant Appreciation Events', 'Move-in Ready Suites'],
        description: ['1400 Broadfield is a six-story, op-tier Class B property conveniently located in the dynamic Energy Corridor, Houston\'s third largest submarket.This property offers excellent access to Highway 6, Interstate 10, and Sam Houston Toilway, benefitting from the current path of suburban development to Houston\'s western sector. 1400 Broadfield boasts an aesthetically pleasing exterior with an qually unique interior that provides natural light.'],
        displayName: '1400 Broadfield',
        id: '1400-broadfield',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-1400-Broadfield-Blvd-1-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-9x6a8554-9x6a8558-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-9x6a8589-9x6a8593-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-9x6a8599-9x6a8603-6-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-9x6a8644-9x6a8648-2-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400-Broadfield-Blvd-Houston-TX-9x6a8699-9x6a8703-3-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/1400+Broadfield+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/1400-Broadfield-Blvd-Houston-TX/17526174/?gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oIJIDtYmu-IsqD40ljbk7JjxwWL5flDZmwh_d_lQm4Ibp2-kj8JnxAaAssrEALw_wcB',
            url: baseURL + 'houston/1400-broadfield',
        },
        schedules: {
            building: {
                monday: '7:00 AM - 6:00 PM',
                tuesday: '7:00 AM - 6:00 PM',
                wednesday: '7:00 AM - 6:00 PM',
                thursday: '7:00 AM - 6:00 PM',
                friday: '7:00 AM - 6:00 PM',
                saturday: '7:00 AM - 12:00 PM',
                sunday: '---'
            },
            security: {
                monday: '6:00 AM - 8:00 PM',
                tuesday: '6:00 AM - 8:00 PM',
                wednesday: '6:00 AM - 8:00 PM',
                thursday: '6:00 AM - 8:00 PM',
                friday: '6:00 AM - 8:00 PM',
                saturday: '---',
                sunday: '---'
            }
        },
        suites: [
            {
                available: true,
                id: '225',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/225/Suite+225++2327.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/225/Suite+225++2327.pdf',
                psf: '$11.50',
                sqft: '2,327'
            },
            {
                available: true,
                id: '330',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/330/926%2B1400%2BBroadfield%2BSuite%2B3303221%2Bsqft.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/330/926+1400+Broadfield+Suite+3303221+sqft.pdf',
                psf: '$13.50',
                sqft: '3,221'
            },
            {
                available: true,
                id: '375',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/375/926%2B%2B1400%2BBroadfield%2BSuite%2B325%2Band%2BSuite%2B3755547%2Bsqft.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/375/926++1400+Broadfield+Suite+325+and+Suite+3755547+sqft.pdf',
                psf: '$13.50',
                sqft: '2,847'
            },
            {
                available: true,
                id: '400',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/400/926+-+1400+Broadfield+Suite+400+-+5%2C361+nra+02.13.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/400/926++1400+Broadfield+Suite+400++5361+nra+12122022+existing.pdf',
                psf: '$13.50',
                sqft: '5,361'
            },
            {
                available: false,
                id: '410',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/410/926+-+1400+Broadfield+Suite+410+-+8%2C203+nra+01.04.2023+(existing).jpg'],
                pdf: '',
                psf: '$13.50 - $15.50',
                sqft: '8,203'
            },
            {
                available: false,
                id: '625',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/625/926+-+1400+Broadfield+Suite+625+-+6%2C540+nra+01.20.2023+(existing).jpg'],
                pdf: '',
                psf: '$13.50 - $15.50',
                sqft: '6,540'
            },
            {
                available: true,
                id: '640',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/640/926+-+1400+Broadfield+Suite+640+-+1%2C546+nra+02.02.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/1400-broadfield/640/926++1400+Broadfield+Suite+640++1546+nra+08042022.pdf',
                psf: '$13.50',
                sqft: '1,546'
            },
        ],
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            reviews: false,
            schedules: {
                building: true,
                security: true
            },
            size: false,
            staff: false,
            suites: true,
            type: false,
            year: false,
        },
    },
    /* ASHFORD ON THE BAYOU */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '1001 S. Dairy Ashford Rd',
            zipCode: '77077'
        },
        amenities: ['On-site Security Guard', 'Garage Parking with Reserved Options', 'Shared Amenity Floor', 'Tenant Lounge', 'Conference Room', 'On-site Leasing and Management', 'Executive Suites Available', 'Move-in Ready Suites', 'Newly Installed Showers', 'Food Trucks Weekly'],
        description: "Dairy Ashford Drive is a major traffic artery that connects I-10 West, Westchase and Westwood with US Highway 59, north of Sugar Land, providing excellent access to Houston’s commerce centers. The property is nestled in the trees along beautiful Buffalo Bayou, which winds its way through the west side of Houston, furnishing beautiful views of the natural beauty of native Texas landscaping.",
        displayName: 'Ashford on the Bayou',
        id: 'ashford-on-the-bayou',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Primary-Property-View-1-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Alternate-Property-View-2-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Lobby-Seating-7-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Lobby-Entrance-6-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Property-Entrance-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/1001-S-Dairy-Ashford-Rd-Houston-TX-Tenant-Lounge-9-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/ashford-on-the-bayou/Ashford+on+the+Bayou+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/1001-S-Dairy-Ashford-Rd-Houston-TX/28268827/',
            url: baseURL + 'houston/ashford-on-the-bayou',
        },
        schedules: {
            building: {
                monday: '7:00 AM - 6:00 PM',
                tuesday: '7:00 AM - 6:00 PM',
                wednesday: '7:00 AM - 6:00 PM',
                thursday: '7:00 AM - 6:00 PM',
                friday: '7:00 AM - 6:00 PM',
                saturday: '08:00 AM - 12:00 PM',
                sunday: '---'
            },
            security: {
                monday: '7:00 AM - 6:00 PM',
                tuesday: '7:00 AM - 6:00 PM',
                wednesday: '7:00 AM - 6:00 PM',
                thursday: '7:00 AM - 6:00 PM',
                friday: '7:00 AM - 6:00 PM',
                saturday: '---',
                sunday: '---'
            }
        },
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: false,
                url: true,
            },
            reviews: false,
            schedules: {
                building: false,
                security: false
            },
            size: false,
            staff: false,
            suites: false,
            type: false,
            year: true,
        },
        year: '1985'
    },
    /* ONE PARK TEN */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '16365 Park Ten Place',
            zipCode: '77084'
        },
        amenities: ["Professional Management and Leasing", "On-site Building Engineer", "On-site Courtesy Officer", "Live 24-Hour Video Surveillance", "Katy Freeway Access", "After-hours Controlled Access", "Free Covered Parking with Reserved Options Available", "3.32:1000 Parking Ratio", "$50.00 After-hour HVAC"],
        description: "One Park Ten is a three-story, atrium style Class B officer property conveniently located in the Katy Freeway West/Energy Corridor submarket. This property offers excellent access to I-10, Highway 6 and Beltway 8, making this a convenient location for your business. One Park Ten is in close proximity to several high-end dining establishments, hotels and shopping centers, including Memorial City Mall and City Centre. Come make One Park Ten your new business location today!",
        displayName: 'One Park Ten',
        id: 'one-park-ten',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/one-park-ten/16365-Park-Ten-Place-Dr-Houston-TX-1-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/one-park-ten/One+Park+Ten+Flyer.pdf',
            loopnet: 'https://www.loopnet.ca/portfolio-property/16365-Park-Ten-Place-Dr-Houston-TX/240069/',
            url: baseURL + 'houston/one-park-ten',
        },
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            reviews: false,
            schedules: {
                building: false,
                security: false
            },
            size: false,
            staff: false,
            suites: false,
            type: false,
            year: false,
        },
    },
    /* TIMBERWAY II */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '15995 N. Barkers Landing Road',
            zipCode: '77079'
        },
        amenities: ['Free Initial Test Fits', 'Professional Management and Leasing', 'On-site Building Engineer', 'On-site Courtesy Guard', 'Live 24-hour Video Surveillance', 'After-hours Controlled Access', 'Free Parking with Reserved Options Available', 'Park-like Enviorment surrounding area', '2018 Energy Star Level', 'Move-in Ready Suites Available'],
        description: ['Timberway II is a three-story, Class B office property conveniently located in the Katy Freeway West / Energy Corridor submarket. This property offers convenient access to Interstate 10, Beltway 8 and Highway 6. Timberway II is located near numerous banks, hotels, and restuarants, and is in close proximity to the prestigious Westlake shopping center.'],
        displayName: 'Timberway II',
        id: 'timberway-II',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Property-Exterior-2-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Lobbt-Atrium-26-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Newly-renovated-lobby-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Parking-and-Property-Exterior-21-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Property-Entrance-20-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Parking-and-Property-Exterior-22-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/15995-N-Barkers-Landing-Rd-Houston-TX-Office-Space-12-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/timberway-II/Timberway+II+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/15995-N-Barkers-Landing-Rd-Houston-TX/5800463/?gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oJoc-rXsLlIvgUZb4DjZzCqHTygbRCfFBymMa_aBoywl8tWGBWphh0aAl-iEALw_wcB',
            url: baseURL + 'houston/timberway-II',
        },
        schedules: {
            building: {
                monday: '7:00 AM - 6:00 PM',
                tuesday: '7:00 AM - 6:00 PM',
                wednesday: '7:00 AM - 6:00 PM',
                thursday: '7:00 AM - 6:00 PM',
                friday: '7:00 AM - 6:00 PM',
                saturday: '8:00 AM - 1:00 PM',
                sunday: '---'
            },
            security: {
                monday: '7:00 AM - 6:00 PM',
                tuesday: '7:00 AM - 6:00 PM',
                wednesday: '7:00 AM - 6:00 PM',
                thursday: '7:00 AM - 6:00 PM',
                friday: '7:00 AM - 6:00 PM',
                saturday: '08:00 AM - 1:00 PM',
                sunday: '---'
            }
        },
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            reviews: false,
            schedules: {
                building: true,
                security: true
            },
            size: false,
            staff: false,
            suites: false,
            type: false,
            year: false,
        },
    },
    /* TWO PARK TEN */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '16300 Katy Freeway',
            zipCode: '77094'
        },
        amenities: ["Professional Management and Leasing", "On-site Building Engineer", "On-site Courtesy Officer", "Live 24-Hour Video Surveillance", "Katy Freeway Access", "After-hours Controlled Access", "Free Covered Parking with Reserved Options Available", "3.12:1000 Parking Ratio", "$50.00 After-hour HVAC"],
        description: "Two Park Ten is a three-story, atrium style Class B office property conveniently located in the heart of the Katy West Freeway/ Energy Corridor submarket. This property offers excellent access to Interstate 10, Highway 6 and Sam Houston Tollway, benefiting from the current path of suburban development to Houston’s western sector.",
        displayName: 'Two Park Ten',
        id: 'two-park-ten',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/two-park-ten/16300-Katy-Fwy-Houston-TX-16300-Katy-Fwy-1-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/two-park-ten/16300-Katy-Fwy-Houston-TX-16300-Katy-Fwy-Alternate-3-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/two-park-ten/16300-Katy-Fwy-Houston-TX-StudioRaheel_RAH_8056-Edit-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/two-park-ten/16300-Katy-Fwy-Houston-TX-Two-Park-Ten-hargrove-suite-6-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/two-park-ten/Two+Park+Ten+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/16300-Katy-Fwy-Houston-TX/5800460/',
            url: baseURL + 'houston/two-park-ten',
        },
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            reviews: false,
            schedules: {
                building: false,
                security: false
            },
            size: true,
            staff: false,
            suites: false,
            type: false,
            year: false,
        },
    },
    /* WESLAYAN */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '3100 Weslayan St.',
            zipCode: '77027'
        },
        amenities: ['Move-in Ready Suites', 'Free Initial Test Fits', 'Professional Ownership and Management', 'After-hours Controlled Access', 'Live 24-hour Monitored Surveillance Cameras', 'Free Garage Parking', 'On-site Courtesy Officer', 'Parks Pantry Market', 'On-site Day Porter'],
        description: ['3100 Weslayan is a four-story, top tier Class B property conveniently located right in the heart of Greenway Plaza. This property is in close proximity to some of Houston\'s most popular high - end hotels, retail, and fine dining establishments, and has easy access to Highway 59 and Loop 610. 3100 Weslayan boasts an aesthetically pleasing exterior featuring a courtyard and patio areas with an equally unique interior with abundant natural light and amenities for its tenants.'],
        displayName: 'Weslayan',
        id: 'weslayan',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Striking-Entrance-13-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-3100-Weslayan-Street-1-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Atrium-Courtyard-10-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Common-Conference-Rooms-18-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Covered-Entrance-8-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Easy-Access-to-US-59-and-Loop-610-5-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Elegant-Courtyard-9-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Multi-Level-Parking-Garage-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/3100-Weslayan-St-Houston-TX-Proximity-to-High-End-Restaurants-7-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/Weslayan+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/3100-Weslayan-St-Houston-TX/21956362/',
            url: baseURL + 'houston/weslayan',
        },
        schedules: {
            building: {
                monday: '6:00 AM - 6:00 PM',
                tuesday: '6:00 AM - 6:00 PM',
                wednesday: '6:00 AM - 6:00 PM',
                thursday: '6:00 AM - 6:00 PM',
                friday: '6:00 AM - 6:00 PM',
                saturday: '7:00 AM - 12:00 PM',
                sunday: '---'
            },
            security: {
                monday: '6:00 AM - 6:00 PM',
                tuesday: '6:00 AM- 6:00 PM',
                wednesday: '6:00 AM - 6:00 PM',
                thursday: '6:00 AM - 6:00 PM',
                friday: '6:00 AM - 6:00 PM',
                saturday: '7:00 AM - 12:00 PM',
                sunday: '---'
            }
        },
        suites: [
            {
                available: true,
                id: '230',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/230/695-3100+Weslayan+Suite+230+-+1%2C576+nra+01.26.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/230/695-3100+Weslayan+Suite+230+-+1%2C576+nra+01.26.2023+(existing).pdf',
                psf: '$12.50',
                sqft: '1,576'
            },
            {
                available: true,
                id: '250',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/250/695-3100+Weslayan+Suite+250+-+2%2C428+nra+01.26.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/250/695-3100+Weslayan+Suite+250+-+2%2C428+nra+01.26.2023+(existing).pdf',
                psf: '$10.50',
                sqft: '2,428'
            },
            {
                available: true,
                id: '253',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/253/695-3100+Weslayan+Suite+253+-+1%2C522+nra+01.13.2022.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/253/695-3100+Weslayan+Suite+253+-+1%2C522+nra+01.13.2022.pdf',
                psf: '$12.50',
                sqft: '1,522'
            },
            {
                available: true,
                id: '255',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/255/255.png'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/255/255.png',
                psf: '$12.50',
                sqft: '1,488'
            },
            {
                available: true,
                id: '300',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/300/695-3100+Weslayan+Suite+300+-+2%2C992+nra+03.15.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/300/695-3100+Weslayan+Suite+300+-+2%2C992+nra+03.15.2023+(existing).pdf',
                psf: '$12.50',
                sqft: '2,558'
            },
            {
                available: true,
                id: '304',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/304/695-3100+Weslayan+Suite+304+-+2%2C558+nra+03.15.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/304/695-3100+Weslayan+Suite+304+-+2%2C558+nra+03.15.2023+(existing).pdf',
                psf: '$10.50',
                sqft: '2,992'
            },
            {
                available: true,
                id: '310',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/310/695-3100+Weslayan+Suite+310+-+2%2C379+nra+01.26.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/310/695-3100+Weslayan+Suite+310+-+2%2C379+nra+01.26.2023+(existing).pdf',
                psf: '$12.50',
                sqft: '2,379'
            },
            {
                available: true,
                id: '350',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/350/695-3100+Weslayan+Suite+350+-+1%2C975+nra+02.28.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/350/695-3100+Weslayan+Suite+350+-+1%2C975+nra+02.28.2023+(existing).pdf',
                psf: '$12.50',
                sqft: '1,975'
            },
            {
                available: true,
                id: '374',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/374/695-3100+Weslayan+Suite+374+-+1%2C502+nra+11.02.2021.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/374/695-3100+Weslayan+Suite+374+-+1%2C502+nra+11.02.2021.pdf',
                psf: '$12.50',
                sqft: '1,502'
            },
            {
                available: true,
                id: '377',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/377/695-3100+Weslayan+Suite+377+-+1%2C593+nra+01.26.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/weslayan/377/695-3100+Weslayan+Suite+377+-+1%2C593+nra+01.26.2023+(existing).pdf',
                psf: '$12.50',
                sqft: '1,593'
            },
        ],
        toggle: {
            address: true,
            amenities: true,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            reviews: false,
            schedules: {
                building: true,
                security: true
            },
            size: false,
            staff: false,
            suites: true,
            type: false,
            year: true,
        },
        year: '1978',
    },
    /* WILLOWBROOK */
    {
        address: {
            city: 'Houston',
            state: 'Texas',
            street: '7915 FM 1960 West',
            zipCode: '77070'
        },
        amenities: ['Free Initial Test Fits', 'Professional Management and Leasing', 'On-site Building Engineer', 'On-site Courtesy Guard', 'Live 24-hour Video Surveillance', 'After-hours Controlled Access', 'Free Parking with Reserved Options Available', 'Move-in Ready Suites'],
        class: 'B',
        description: ['7915 FM 1960 "The Willowbrook Building" is a three-story, top tier Class B property conveniently located in the FM 1960 submarket. This property offers convenient access to Highway 249, FM 1960 and Beltway 8 and is located near several high-end restaurants, hotels and retail centers. This property shares a parking lot with Willowbrook Mall, providing several retail shops and food options within walking distance. 7915 FM 1960 also provides quick access to George Bush Intercontinental Airport, making this property an ideal location for your business. The property has several amenities, including free parking, on-site building engineer, on-site courtesy guard, 24-hour monitored surveillance, and after-hours controlled access. The Willowbrook Building also has move-in ready suites, making it an easy transition when you are ready to make the move. Come discover 7915 FM 1960 today!'],
        displayName: 'Willowbrook',
        id: 'willowbrook',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Entrance-3-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Primary-1-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Lobby-Elevator-8-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Lobby-6-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Interior-View-7-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Entrance-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Entrance-3-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Alternate-3-Large.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915+FM-1960+W%2C+Houston%2C+TX+77070+-+The+Willowbrook+Building+_+LoopNet_files/'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/Willowbrook+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/7915-FM-1960-W-Houston-TX/21917626/?gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oJSloeC9iCmxg-yNlpmWffctlcSKrSm5vqzwH3FAWgc1EUWkd-B9ZwaAuZwEALw_wcB',
            url: baseURL + 'houston/willowbrook',
        },
        schedules: {
            building: {
                monday: '7:00 AM - 6:00 PM',
                tuesday: '7:00 AM - 6:00 PM',
                wednesday: '7:00 AM - 6:00 PM',
                thursday: '7:00 AM - 6:00 PM',
                friday: '7:00 AM - 6:00 PM',
                saturday: '8:00 AM - 1:00 PM',
                sunday: '---'
            },
            reviews: false,
            security: {
                monday: '7:00 AM - 6:00 PM',
                tuesday: '7:00 AM - 6:00 PM',
                wednesday: '7:00 AM - 6:00 PM',
                thursday: '7:00 AM - 6:00 PM',
                friday: '7:00 AM - 6:00 PM',
                saturday: '8:00 AM - 1:00 PM',
                sunday: '---'
            }
        },
        suites: [
            {
                available: true,
                id: '101',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/101/928+-+7915+FM+1960+Willowbrook+Suite+101+01.13.2021+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/101/928+-+7915+FM+1960+Willowbrook+Suite+101+01.13.2021+(existing).pdf',
                psf: '$8.00 - $10.00',
                sqft: '1,945'
            },
            {
                available: false,
                id: '105',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/105/928+-+7915+FM+1960+Willowbrook+Suite+105+01.26.2023.jpg'],
                pdf: '',
                psf: '$8.00 - $10.00',
                sqft: '2,757'
            },
            {
                available: false,
                id: '115',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/115/928+-+7915+FM+1960+Willowbrook+Suite+115+-+1%2C055+nra+02.03.2023+(existing).jpg'],
                pdf: '',
                psf: '$8.00 - $10.00',
                sqft: '1,055'
            },
            {
                available: true,
                id: '201',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/201/928+-+7915+FM+1960+Willowbrook+Suite+201+-+1%2C368+nra+03.02.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/201/928++7915+FM+1960+Willowbrook+Suite+201++1368+nra+03022023+existing.pdf',
                psf: '$8.00 - $10.00',
                sqft: '1,368'
            },
            {
                available: false,
                id: '209',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/209/928+-+7915+FM+1960+Willowbrook+Suite+209+-+490+nra+02.01.2023+(existing).jpg'],
                pdf: '',
                psf: '$8.00 - $10.00',
                sqft: '490'
            },
            {
                available: true,
                id: '210',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/210/928+-+7915+FM+1960+Willowbrook+Suite+210+-+4%2C352+nra+01.31.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/210/928++7915+FM+1960+Willowbrook+Suite+210++4352+nra+01312023+existing.pdf',
                psf: '$8.00 - $10.00',
                sqft: '4,352'
            },
            {
                available: false,
                id: '226',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/226/928+-+7915+FM+1960+Willowbrook+Suite+226+-+330+nra+01.27.2023+(existing).jpg'],
                pdf: '',
                psf: '$8.00 - $10.00',
                sqft: '330'
            },
            {
                available: true,
                id: '365',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/365/928+-+7915+FM+1960+Willowbrook+Suite+365+-+1%2C321+nra+01.12.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/365/928++7915+FM+1960+Willowbrook+Suite+365++1321+nra+01122023+existing.pdf',
                psf: '$8.00 - $10.00',
                sqft: '1,321'
            },
            {
                available: true,
                id: '380',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/380/928+-+7915+FM+1960+Willowbrook+Suite+380+-+997+nra+02.01.2023+(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/380/928++7915+FM+1960+Willowbrook+Suite+380++997+nra+02012023+existing.pdf',
                psf: '$8.00 - $10.00',
                sqft: '997'
            },
            {
                available: false,
                id: '390',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/390/928+-+7915+FM+1960+Willowbrook+Suite+390+-+1%2C542+nra+02.01.2023+(existing).jpg'],
                pdf: '',
                psf: '$8.00 - $10.00',
                sqft: '1,542'
            }
        ],
        toggle: {
            address: true,
            amenities: true,
            class: true,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            reviews: false,
            schedules: {
                building: true,
                security: true
            },
            size: false,
            staff: false,
            suites: true,
            type: false,
            year: false,
        },
    },

    /* -------------------- */
    /*      SAN ANTONIO     */
    /* -------------------- */

    /* SPECTRUM */
    {
        address: {
            city: 'San Antonio',
            state: 'Texas',
            street: '613 NW Loop 410',
            zipCode: '78216'
        },
        amenities: ['On-site Property Management', 'Conference Room', 'Garage Parking with Reserved Options', 'Tenant Lounge with Fresh Pantry Market', 'Recently Renovated Restrooms', 'After-Hours Controlled Access', 'Live Video Surveillance', 'NeedlePoint Bipolar Ionization Installed October 2020', '3 Miles from San Antonio International Airport', 'On-site Security Guard'],
        class: 'A',
        description: ['The Spectrum Building at 613 NW Loop 410 is a 10-story, highly visible, Class A office building with a premier location in the North Central San Antonio submarket. Comprised of 175,314 square feet, the building features recent renovations to the lobby and common area restrooms, and a Needlepoint Bipolar Ionization system was installed in October 2020. This state-of-the-art air cleaning technology eliminates over 96% of airborne pathogens, mold, and viruses. Additional safety features include an on-site courtesy officer, 24-hour live video surveillance, and after-hours controlled access. Besides the on-site leasing and management team, Spectrum also offers several on-site amenities for tenants, including a conference room, deli, and tenant lounge with a fresh pantry market. Opportunities for top-of-building signage are available, presenting exceptional exposure for tenants. This desirable San Antonio address sits less than three miles from the San Antonio International Airport. There are over 80 restaurants and numerous popular residential areas within a two-mile radius. Spectrum is also close to hotels, bars, and shopping destinations, which are easily accessible by car or on foot in minutes. Commuters enjoy 440 parking spaces in the attached parking garage, with reserved options available, and easy access to Loop 410, which quickly connects to I-10 and the McAllister Freeway. With its recent renovations, numerous on-site amenities, and convenient San Antonio address, Spectrum is sure to meet all business needs.'],
        displayName: 'Spectrum',
        id: 'spectrum',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Highly-Visible-Class-A-Office-Building-1-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Highly-Visible-Class-A-Office-Building-3-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Main-Entrance-4-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Main-Lobby-10-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Main-Lobby-Elevators-11-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Main-Lobby-Information-Desk-8-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Market-16-LargeHighDefinition.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/613-NW-Loop-410-San-Antonio-TX-Market-Seating-18-LargeHighDefinition.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/Spectrum+Flyer.pdf',
            loopnet: 'https://www.loopnet.com/Listing/613-NW-Loop-410-San-Antonio-TX/28268831/',
            url: baseURL + 'san-antonio/spectrum',
        },
        schedules: {
            building: {
                monday: '7:00 AM - 7:00 PM',
                tuesday: '7:00 AM - 7:00 PM',
                wednesday: '7:00 AM - 7:00 PM',
                thursday: '7:00 AM - 7:00 PM',
                friday: '7:00 AM - 7:00 PM',
                saturday: '7:00 AM - 1:00 PM',
                sunday: '---'
            },
            security: {
                monday: '7:00 AM - 11:00 PM',
                tuesday: '7:00 AM - 11:00 PM',
                wednesday: '7:00 AM - 11:00 PM',
                thursday: '7:00 AM - 11:00 PM',
                friday: '7:00 AM - 11:00 PM',
                saturday: '---',
                sunday: '---'
            }
        },
        size: '176,786 SF',
        suites: [
            {
                available: true,
                id: '100',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/100/Suite+100.png'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/100/Suite+100.pdf',
                psf: '$23.50 - $25.50',
                sqft: '4,988',
            },
            {
                available: false,
                id: '195',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/195/195.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/195/922Spectrum+Suite+195++2603+nra+10072021.pdf',
                psf: '$23.50 - $25.50',
                sqft: '2,603'
            },
            {
                available: true,
                id: '200',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/200/922-Spectrum%2BLevel%2B02%2B05.27.2022%2B(existing-cubicles).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/200/922-Spectrum+Level+02+05.27.2022+(existing-cubicles).pdf',
                psf: '$23.50 - $25.50',
                sqft: '18,345'
            },
            {
                available: false,
                id: '300',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/300/922-Spectrum%2BLevel%2B03%2B02.15.2023%2B(existing).jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/300/922-Spectrum+Level+03+02.15.2023+(existing).pdf',
                psf: '$23.50 - $25.50',
                sqft: '17,994'
            },
            {
                available: true,
                id: '400',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/400/400.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/400/922Spectrum+Level+04+04012022+existing.pdf',
                psf: '$23.50 - $25.50',
                sqft: '17,730'
            },
            {
                available: false,
                id: '515',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/515/515.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/515/922Spectrum+Suite+515++693+nra+10072022+existing.pdf',
                psf: '$23.50 - $25.50',
                sqft: '693'
            },
            {
                available: true,
                id: '530',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/530/530.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/530/922Spectrum+Suite+530++4441+nra+01142022+existing.pdf',
                psf: '$23.50 - $25.50',
                sqft: '4,441'
            },
            {
                available: false,
                id: '610',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/610/610.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/610/Floor+Plan+922Spectrum+Suite+610++1258+nra+11282022+existing.pdf',
                psf: '$23.50 - $25.50',
                sqft: '1,258'
            },
            {
                available: true,
                id: '620',
                images: [''],
                pdf: '',
                psf: '$23.50 - $25.50',
                sqft: '2,903',
            },
            {
                available: true,
                id: '625',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/625/625.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/625/922Spectrum+Suite+625++1248+nra+08092022.pdf',
                psf: '$23.50 - $25.50',
                sqft: '1,248'
            },
            {
                available: true,
                id: '875',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/875/875.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/875/922Spectrum+Suite+875++4177+10142022+existing.pdf',
                psf: '$23.50 - $25.50',
                sqft: '4,177'
            },
            {
                available: false,
                id: '900',
                images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/900/Suite%2B900%2BFloor%2BPlan.jpg'],
                pdf: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/spectrum/900/Suite+900+Floor+Plan.pdf',
                psf: '$23.50 - $25.50',
                sqft: '17,900'
            },
        ],
        toggle: {
            address: true,
            amenities: true,
            class: true,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: true,
                url: true,
            },
            reviews: false,
            schedules: {
                building: true,
                security: true
            },
            size: true,
            staff: false,
            suites: true,
            type: false,
            year: true,
        },
        year: '1983',
    },
    /* VILLAGE POINTE */
    {
        address: {
            city: 'San Antonio',
            state: 'Texas',
            street: '15665 San Pedro Ave.',
            zipCode: '78232'
        },
        description: ['Village Pointe is a large neighborhood shopping center located on San Pedro Avenue. With many anchor tenants, the shopping center has continuous traffic.'],
        displayName: 'Village Pointe',
        id: 'village-pointe',
        images: ['https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/village-pointe/attachment-24.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/village-pointe/attachment-25.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/village-pointe/attachment-26.jpg', 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/village-pointe/attachment-28.jpg'],
        links: {
            flyer: 'https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/village-pointe/Village+Pointe+Flyer.pdf',
            url: baseURL + 'san-antonio/village-pointe',
        },
        toggle: {
            address: true,
            amenities: false,
            class: false,
            description: true,
            displayName: true,
            id: true,
            images: true,
            links: {
                flyer: true,
                loopnet: false,
                url: true,
            },
            reviews: false,
            schedules: {
                building: false,
                security: false
            },
            size: false,
            staff: false,
            suites: false,
            type: false,
            year: false,
        },
    }
]
