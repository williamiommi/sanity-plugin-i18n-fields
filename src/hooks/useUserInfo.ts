import {CurrentUser, useCurrentUser} from 'sanity'
import {useMemo} from 'react'

interface useUserInfoResponse {
  currentUser: CurrentUser | null
  userRoles: string[]
}

const useUserInfo = (): useUserInfoResponse => {
  // get current user from sanity
  const currentUser = useCurrentUser()
  // extract roles from the current user
  const userRoles = useMemo(() => currentUser?.roles.map((role) => role.name) || [], [currentUser])
  return {currentUser, userRoles}
}

export default useUserInfo
