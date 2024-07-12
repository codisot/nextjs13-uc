import Link from 'next/link'
import React from 'react'

interface QuestionProps {
  _id: string
  title: string
  tags: Array<{
    _id: string
    name: string
  }>
  author: {
    _id: string
    name: string
    picture: string
  }
  upvotes: number
  views: number
  answers: object[]
  createdAt: Date
}

export default function QuestionCards (
  {
    _id,
    title,
    tags,
    author,
    upvotes,
    views,
    answers,
    createdAt
  }: QuestionProps
): JSX.Element {
  return (
    <div className='card-wrapper rounded-[10px] p-9 sm:px-11'>
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
        <div>
          <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>
            {String(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1 '>
              {title}
            </h3>
          </Link>
        </div>
      </div>
    </div>
  )
}
