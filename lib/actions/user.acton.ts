'use server'

import User, { IUser } from '@/database/user.model'
import { connectToDatabase } from '../mongoose'

export async function getUserById (params: any): Promise<IUser | null> {
  try {
    connectToDatabase()

    const { userId } = params

    const user = await User.findOne({ clerkId: userId })

    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}
