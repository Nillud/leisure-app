import { zodResolver } from '@hookform/resolvers/zod'
import { type Href, router, useLocalSearchParams } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import { Controller, useForm } from 'react-hook-form'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { AUTH_FORM_CONTENT } from '@app/constants'

import { colors, fontSize, fontWeight, space } from '@app/tokens'

import { type TAuthForm, authSchema } from '@app/schemas'

import { Button } from '../ui/Button'
import { FloatingButton } from '../ui/FloatingButton'
import { Input } from '../ui/Input'
import { Screen } from '../ui/Screen'

interface Props {
  type: keyof typeof AUTH_FORM_CONTENT
  isPending: boolean
  error: unknown
  onSubmit: (data: TAuthForm) => void
}

export function AuthForm({ error, isPending, onSubmit, type }: Props) {
  const content = AUTH_FORM_CONTENT[type]
  const errorMessage = error instanceof Error ? error.message : null

  const { control, handleSubmit } = useForm<TAuthForm>({
    resolver: zodResolver(authSchema)
  })

  const { redirect } = useLocalSearchParams<{
    redirect?: Extract<Href, string>
  }>()

  return (
    <Screen>
      <FloatingButton
        onPress={() => {
          router.push('/')
        }}
        side='left'
        icon={ChevronLeft}
        iconOffset={-2}
      />
      <View style={styles.root}>
        <View style={styles.center}>
          <Text style={styles.title}>{content.title}</Text>

          <View style={styles.form}>
            <Controller
              control={control}
              name='email'
              render={({ field, fieldState }) => (
                <Input
                  placeholder='Электронная почта'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  value={field.value}
                  onChangeText={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name='password'
              render={({ field, fieldState }) => (
                <Input
                  placeholder='Пароль'
                  isPassword
                  value={field.value}
                  onChangeText={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />

            {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

            <Button
              size='lg'
              onPress={handleSubmit(onSubmit)}
              isDisabled={isPending}
            >
              {isPending ? content.pending : content.submit}
            </Button>
          </View>
        </View>

        <Pressable
          onPress={() =>
            router.replace({
              pathname: content.footerHref,
              params: { redirect }
            })
          }
        >
          <Text style={styles.link}>
            {content.footerText}{' '}
            <Text style={styles.linkAccent}>{content.footerAction}</Text>
          </Text>
        </Pressable>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: space['layout-horizontal'],
    paddingBottom: space[6]
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    gap: space[10]
  },
  title: {
    color: colors.text.primary,
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.bold,
    textAlign: 'center'
  },
  form: {
    gap: space[3]
  },
  error: {
    color: colors.status.error,
    fontSize: fontSize.sm,
    textAlign: 'center'
  },
  link: {
    color: colors.text.primary,
    fontSize: fontSize.sm,
    textAlign: 'center'
  },
  linkAccent: {
    fontWeight: fontWeight.semibold,
    textDecorationLine: 'underline'
  }
})
