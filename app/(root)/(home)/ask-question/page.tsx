import Question from '@/components/forms/question'
import React from 'react'

export default function page (): JSX.Element {
  return (
    <div>
      <h1 className='h1-bold text-dark100_light900'>Ask a Question</h1>
      <div className='mt-9'>
        <Question />
      </div>
    </div>
  )
}
