import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RenderTag from './render-tag'

const hotQuestions = [
  { _id: '1', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex vel voluptas.' },
  { _id: '2', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex vel voluptas.' },
  { _id: '3', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex vel voluptas.' },
  { _id: '4', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex vel voluptas.' }
]

const popularTags = [
  { _id: '1', name: 'JS', totalQuestions: 5 },
  { _id: '2', name: 'react', totalQuestions: 5 },
  { _id: '3', name: 'next', totalQuestions: 5 },
  { _id: '4', name: 'vue', totalQuestions: 5 }
]

export default function RightSidebar (): React.JSX.Element {
  return (
    <section className='background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px] custom-scrollbar'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className='flex cursor-pointer items-center justify-between gap-7'
            >
              <p className='bodey-medium text-dark500_light700'>
                {question.title}
              </p>
              <Image
                src='/assets/icons/chevron-right.svg'
                alt='chevron right'
                width={20}
                height={20}
                className='invert-colors'
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showConut
            />
          ))}
        </div>
      </div>
    </section>
  )
}
