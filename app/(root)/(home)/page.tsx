import Navbar from '@/components/Navbar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Home (): JSX.Element {
  return (
    <>
      <Navbar />
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <h1 className='h1-bold'>
        Hi!!!
      </h1>
    </>
  )
}
