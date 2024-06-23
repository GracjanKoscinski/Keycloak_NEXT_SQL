import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import MainPage from '@/components/mainPage/MainPage'
export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return <div className='italic text-center'>
      It seems you are not logged in. To log in or to create a new account click button in the top right corner.
    </div>
  }
  return (
    <div>
      <MainPage />
    </div>
  )
}