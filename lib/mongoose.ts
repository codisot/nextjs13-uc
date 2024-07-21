import mongoose from 'mongoose'

let isConnected: boolean = false

export const connectToDatabase = async (): Promise<void> => {
  mongoose.set('strictQuery', true)

  const mongoDbUrl = process.env.MONGODB_URL

  if (mongoDbUrl === undefined || mongoDbUrl === '') {
    console.log('MISSING MONGODB_URL')
    return
  }

  if (isConnected) {
    return console.log('MongoDB is already connected')
  }

  try {
    await mongoose.connect(mongoDbUrl, {
      dbName: 'UC'
    })

    isConnected = true

    console.log('MongoDB is connected')
  } catch (error) {
    console.log('MongoDB connection failed', error)
  }
}
