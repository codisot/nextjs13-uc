import Question from '@/components/forms/question'
import { getUserById } from '@/lib/actions/user.acton'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function page (): Promise<React.JSX.Element> {
  // const { userId } = auth()

  const userId = 'clerk12345'
  if (!userId) redirect('/sign-in')

  const mongoUser = await getUserById({ userId })
  console.log(mongoUser)

  return (
    <div>
      <h1 className='h1-bold text-dark100_light900'>Ask a Question</h1>
      <div className='mt-9'>
        <Question mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  )
}
