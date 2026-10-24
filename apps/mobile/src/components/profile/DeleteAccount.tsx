import { useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'
import { Alert, Pressable, Text } from 'react-native'

import { fontSize, space } from '@app/tokens'

import { useUserDeleteMe } from '@app/api'

import { clearTokens } from '@/lib/token'

export function DeleteAccount() {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useUserDeleteMe({
    mutation: {
      onSuccess: async () => {
        await clearTokens()
        await queryClient.resetQueries()
        router.replace('/')
      }
    }
  })

  const onDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Your library, reviews and collections will be deleted. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => mutate() }
      ]
    )
  }

  return (
    <Pressable
      onPress={onDeleteAccount}
      style={{
        marginTop: space[2],
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: 'white', opacity: 0.2, fontSize: fontSize.sm }}>
        {isPending ? 'Deleting...' : 'Delete account'}
      </Text>
    </Pressable>
  )
}
