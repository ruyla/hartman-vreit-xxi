import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid or missing enviroment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
    let globalWithMongoDB = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>
    }
    if (!globalWithMongoDB._mongoClientPromise) {
        client = new MongoClient(uri, options)
        globalWithMongoDB._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongoDB._mongoClientPromise
} else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}
export default clientPromise

/**
 * Usage: Import the clientPromise, and use either getStaticProps() or getServerProps() to fetch data depending on use.
 */