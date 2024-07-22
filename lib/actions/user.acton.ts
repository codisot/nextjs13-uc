'use server'

import User from '@/database/user.model'
import { connectToDatabase } from '../mongoose'
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from './shared.types'
import { revalidatePath } from 'next/cache'
import Question from '@/database/question.model'

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

export async function createUser (userData: CreateUserParams): Promise<any> {
  try {
    await connectToDatabase()

    const nweUser = await User.create(userData)
    return nweUser
  } catch (error) {
    console.log(error)
    throw error
  }
}
export async function updateUser (params: UpdateUserParams): Promise<any> {
  try {
    await connectToDatabase()

    const { clerkId, updateData, path } = params

    await User.findOneAndUpdate({ clerkId }, updateData, { new: true })

    revalidatePath(path)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function deleteUser (params: DeleteUserParams): Promise<any> {
  try {
    await connectToDatabase()

    const { clerkId } = params

    const user = await User.findOneAndDelete({ clerkId })

    if (!user) {
      throw new Error('user not found')
    }

    const userQuestionIds = await Question.find({ author: user._id }).distinct('_id')

    await Question.deleteMany({ author: user._id })

    const deleteUser = await User.findOneAndDelete(user._id)
    return deleteUser
  } catch (error) {
    console.log(error)
    throw error
  }
}
