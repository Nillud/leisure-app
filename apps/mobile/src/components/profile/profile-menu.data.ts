import { router } from 'expo-router'
import { Bell, CreditCard, Heart, Users } from 'lucide-react-native'

export const PROFILE_MENU = [
  {
    icon: CreditCard,
    label: 'Subscription',
    value: 'Free',
    onPress: () => router.push('/plans')
  },
  {
    icon: Heart,
    label: 'Watchlist',
    onPress: () => router.push('/(tabs)/library')
  },
  {
    icon: Users,
    label: 'Friends',
    onPress: () => {}
  },
  {
    icon: Bell,
    label: 'Notifications',
    onPress: () => {}
  }
]
