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
      'Удаление аккаунта',
      'Ваша библиотека, отзывы и коллекции будут удалены. Это действие нельзя отменить.',
      [
        { text: 'Отмена', style: 'cancel' },
        { text: 'Удалить', style: 'destructive', onPress: () => mutate() }
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
        {isPending ? 'Удаляем…' : 'Удалить аккаунт'}
      </Text>
    </Pressable>
  )
}
