import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DarkTheme, ThemeProvider } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { RootNavigator } from '@/components/navigation/RootNavigator'

import '@/lib/api'

import { OnboardingProvider } from '@/providers/OnboardingProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 60_000 // 1 minute
    }
  }
})

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider value={DarkTheme}>
          <StatusBar style='light' />
          <OnboardingProvider>
            <RootNavigator />
          </OnboardingProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
