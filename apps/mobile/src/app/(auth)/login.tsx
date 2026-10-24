import { useQueryClient } from '@tanstack/react-query'
import { type Href, router, useLocalSearchParams } from 'expo-router'

import { useAuthMobileLogin } from '@app/api'

import { AuthForm } from '@/components/auth/AuthForm'

import { saveTokens } from '@/lib/token'

export default function Login() {
  const queryClient = useQueryClient()
  const { redirect } = useLocalSearchParams<{
    redirect?: Extract<Href, string>
  }>()

  const { mutate, isPending, error } = useAuthMobileLogin({
    mutation: {
      onSuccess: async ({ data: { accessToken, refreshToken } }) => {
        await saveTokens(accessToken, refreshToken)

        queryClient.clear()
        await queryClient.resetQueries()

        if (redirect) {
          router.back()
          router.push(redirect)
          return
        }

        router.replace('/')
      }
    }
  })

  return (
    <AuthForm
      type='login'
      error={error}
      isPending={isPending}
      onSubmit={data => mutate({ data })}
    />
  )
}
