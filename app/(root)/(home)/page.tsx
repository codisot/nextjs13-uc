import QuestionCards from '@/components/cards/question-cards'
import HomeFilters from '@/components/home/home-filters'
import Filter from '@/components/shared/filter'
import NoResult from '@/components/shared/no-result'
import LocalSearchBar from '@/components/shared/search/local-search-bar'
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constants/filters'
import Link from 'next/link'

const questions = [
  {
    _id: '1',
    title: 'Cascading',
    tags: [
      { _id: '1', name: 'python' },
      { _id: '2', name: 'sql' }
    ],
    author: {
      _id: '1',
      name: 'John',
      picture: 'https://example.com/john.jpg'
    },
    upvotes: 10,
    views: 100,
    answers: [{}], // Assuming answers are objects, add as needed
    createdAt: new Date('2021-09-01T12:00:00.000Z')
  },
  {
    _id: '2',
    title: 'HTML',
    tags: [
      { _id: '1', name: 'python' },
      { _id: '2', name: 'sql' }
    ],
    author: {
      _id: '1',
      name: 'John',
      picture: 'https://example.com/john.jpg'
    },
    upvotes: 10,
    views: 100,
    answers: [{}], // Assuming answers are objects, add as needed
    createdAt: new Date('2021-09-01T12:00:00.000Z')
  }
]

export default function Home (): JSX.Element {
  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>
        <Link href='/ask-question' className='flex justify-end max-sm:w-full'>
          <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center '>
        <LocalSearchBar
          route='/'
          iconPosition='left'
          imgSrc='assets/icons/search.svg'
          placeHolder='Search for questions'
          otherClasses='flex-1'
        />
        <Filter
          filters={HomePageFilters}
          otherClasses='min-h[56px] sm:min-w-[170px]'
          containerClasses='hidden max-md:flex'
        />
      </div>

      <HomeFilters />

      <div className='mt-10 flex w-full flex-col gap-6'>
        {
          questions.length > 0
            ? questions.map((question) => (
              <QuestionCards
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            ))
            : <NoResult
                title="There's no question to show"
                description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod magnam repudiandae rerum eligendi saepe incidunt nemo tenetur excepturi odit pariatur?'
                link='/ask-question'
                linkTitle='Ask a Question'
              />
        }
      </div>
    </>
  )
}
