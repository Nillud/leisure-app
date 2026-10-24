import { router, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors, fontSize, space } from '@app/tokens'

import { getReleaseYear } from '@app/utils'

import { useDiscoverFindByKey } from '@app/api'

import { Input, ScreenTitle, SheetFooter } from '@/components/ui'

import { FriendAvatar, SHARE_FRIENDS } from '@/components/detail'
import { SectionCarousel } from '@/components/elements'

export default function ShareSheet() {
  const { key } = useLocalSearchParams<{ key: string }>()
  const { data } = useDiscoverFindByKey(key)
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const title = data?.status === 200 ? data.data : null
  const heading = [title?.name, getReleaseYear(title?.releaseDate ?? null)]
    .filter(Boolean)
    .join(' ')

  const toggleFriend = (id: string) => {
    setSelectedIds(ids =>
      ids.includes(id) ? ids.filter(item => item !== id) : [...ids, id]
    )
  }

  const recipients = SHARE_FRIENDS.filter(friend =>
    selectedIds.includes(friend.id)
  )
    .map(friend => friend.name)
    .join(', ')

  return (
    <View style={styles.root}>
      <View style={styles.inset}>
        <ScreenTitle>Поделиться с друзьями</ScreenTitle>
        <View style={styles.divider} />
      </View>

      <SectionCarousel title={heading}>
        {SHARE_FRIENDS.map(friend => (
          <FriendAvatar
            key={friend.id}
            name={friend.name}
            avatarUrl={friend.avatarUrl}
            isSelected={selectedIds.includes(friend.id)}
            onPress={() => toggleFriend(friend.id)}
          />
        ))}
      </SectionCarousel>

      <View style={[styles.inset, styles.form]}>
        <Text style={styles.to}>Кому: {recipients || 'Выберите друзей'}</Text>

        <Input
          placeholder='Посмотрите на это!'
          multiline
        />

        <SheetFooter
          submitLabel='Отправить'
          onSubmit={() => router.back()}
          onCancel={() => router.back()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: space[6],
    paddingBottom: space[8]
  },
  inset: {
    paddingHorizontal: space['layout-horizontal']
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border
  },
  form: {
    gap: space[4]
  },
  to: {
    color: colors.text.muted,
    fontSize: fontSize.sm
  }
})
