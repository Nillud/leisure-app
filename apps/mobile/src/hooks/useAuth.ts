import { useUserFindMe } from '@app/api'

export const useAuth = () => {
  const { data: me } = useUserFindMe()
  const isAuthorized = me?.status === 200

  return {
    isAuthorized,
    user: isAuthorized ? me.data : null
  }
}
