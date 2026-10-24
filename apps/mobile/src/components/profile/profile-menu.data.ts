import { router } from 'expo-router'
import { Bell, CreditCard, Heart, Users } from 'lucide-react-native'

export const PROFILE_MENU = [
  {
    icon: CreditCard,
    label: 'Подписка',
    value: 'Бесплатная',
    onPress: () => router.push('/plans')
  },
  {
    icon: Heart,
    label: 'Библиотека',
    onPress: () => router.push('/(tabs)/library')
  },
  {
    icon: Users,
    label: 'Друзья',
    onPress: () => {}
  },
  {
    icon: Bell,
    label: 'Уведомления',
    onPress: () => {}
  }
]
