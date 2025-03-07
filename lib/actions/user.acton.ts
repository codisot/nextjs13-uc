'use server'

import User from '@/database/user.model'
import { connectToDatabase } from '../mongoose'

export async function getUserById (params: any): Promise<any> {
  try {
    await connectToDatabase()

    const { userId } = params

    const user = await User.findOne({ clerkId: userId })

    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}
