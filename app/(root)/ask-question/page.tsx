import Question from '@/components/forms/question'
import { getUserById } from '@/lib/actions/user.acton'
import { redirect } from 'next/navigation'
import React from 'react'

function isValidUserId (userId: string | undefined | null): boolean {
  return typeof userId === 'string' && userId.trim() !== ''
}

export default async function page (): Promise<React.JSX.Element> {
  // const { userId } = auth()

  const userId = 'clerk12345'
  if (!isValidUserId(userId)) {
    redirect('/sign-in')
  }

  const mongoUser = await getUserById({ userId })

  console.log(mongoUser)

  return (
    <div>
      <h1 className='h1-bold text-dark100_light900'>Ask a question</h1>

      <div className='mt-9'>
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  )
}
