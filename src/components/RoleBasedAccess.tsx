import type React from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../store"
import type { UserRole } from "../store/authSlice"

interface RoleBasedAccessProps {
  allowedRoles: UserRole[]
  children: React.ReactNode
}

const RoleBasedAccess: React.FC<RoleBasedAccessProps> = ({ allowedRoles, children }) => {
  const userRole = useSelector((state: RootState) => state.auth.role)

  if (userRole && allowedRoles.includes(userRole)) {
    return <>{children}</>
  }

  return null
}

export default RoleBasedAccess

