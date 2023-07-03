import {useCurrentUser} from 'sanity'
import {useMemo} from 'react'

const useUserRoles = (): string[] => {
  // get current user from sanity
  const currentUser = useCurrentUser()
  // extract roles from the current user
  const userRoles = useMemo(() => currentUser?.roles.map((role) => role.name) || [], [currentUser])
  return userRoles
}

export default useUserRoles
