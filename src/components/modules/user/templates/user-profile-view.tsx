import { auth } from '@/lib/auth'
import UpdateProfileForm from '../components/update-profile-form'
import { headers } from 'next/headers'

type Props = {}

const UserProfileView = async (props: Props) => {
  return (
    <UpdateProfileForm />
  )
}

export default UserProfileView
