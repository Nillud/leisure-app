import { Bookmark, Share, Star } from 'lucide-react-native'
import { StyleSheet, View } from 'react-native'

import { REVIEW_RATING } from '@app/constants'

import { space } from '@app/tokens'

import { ActionButton } from '../ui'

import { useLibraryStatus, useProtectedPush } from '@/hooks'

export function TitleActions({ titleKey }: { titleKey: string }) {
  const pushProtected = useProtectedPush()
  const { rating } = useLibraryStatus(titleKey)

  return (
    <View style={styles.actions}>
      <ActionButton
        icon={Bookmark}
        label='Библиотека'
        onPress={() => {}}
      />
      <ActionButton
        icon={Star}
        label={rating ? `${rating} / ${REVIEW_RATING.max}` : 'Оценить'}
        onPress={() => pushProtected(`/review/${titleKey}`)}
        isActive={!!rating}
      />
      <ActionButton
        icon={Share}
        label='Поделиться'
        onPress={() => pushProtected(`/share/${titleKey}`)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    marginTop: space[6]
  }
})
