import { auth } from '@/lib/auth'
import UpdateProfileForm from '../components/update-profile-form'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = {}

const UserProfileView = async (props: Props) => {

  const mySession = await auth.api.getSession({
    headers: await headers(),
  })

  if (!mySession) {
    redirect('/sign-in')
  }

  const { user, session } = mySession

  return (
    <UpdateProfileForm user={user} session={session} />
  )
}

export default UserProfileView
