import {ROLE_ADMIN} from './constants'

const userCan = (userRoles: string[], restrictedRoles?: string[]): boolean => {
  if (!restrictedRoles || restrictedRoles.length === 0) return true
  let userCanFlag = false
  // split restrictedRoles in 2 Set
  const canRolesSet = new Set()
  const cannotRolesSet = new Set()
  // always adding admin to canRolesSet
  canRolesSet.add(ROLE_ADMIN)
  restrictedRoles.forEach((role) => {
    if (role.startsWith('!')) cannotRolesSet.add(role.substring(1, role.length))
    else canRolesSet.add(role)
  })

  if (canRolesSet.size !== 0) {
    const canRolesArray = Array.from(canRolesSet)
    userCanFlag = userRoles.some((role) => canRolesArray.includes(role))
  }

  if (!userCanFlag && cannotRolesSet.size !== 0) {
    const cannotRolesArray = Array.from(cannotRolesSet)
    userCanFlag = userRoles.some((role) => !cannotRolesArray.includes(role))
  }

  return userCanFlag
}

export default userCan
