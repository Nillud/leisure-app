import { Redirect, router } from 'expo-router'
import { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import type { TLibraryStatus } from '@app/types'

import { colors, fontSize, space } from '@app/tokens'

import { useLibraryFindAll, useUserFindMe } from '@app/api'

import { TitleCard } from '@/components/elements'
import { StatusFilter } from '@/components/library/StatusFilter'
import { Screen } from '@/components/ui/Screen'
import { ScreenTitle } from '@/components/ui/ScreenTitle'

export default function Library() {
  const { data: me, isLoading, isError } = useUserFindMe()

  const [status, setStatus] = useState<TLibraryStatus | null>(null)

  const { data, isPending } = useLibraryFindAll(
    {
      status: status ? [status] : undefined,
      take: 27
    },
    {
      query: { enabled: !!me }
    }
  )

  const entries = data?.status === 200 ? data.data.items : []

  if (isLoading) return <Screen />

  if (isError || !me) return <Redirect href='/login' />

  return (
    <Screen>
      <View style={styles.header}>
        <ScreenTitle>Библиотека</ScreenTitle>
      </View>

      <StatusFilter
        value={status}
        onChange={setStatus}
      />

      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TitleCard
            title={item.title}
            onPress={() => {
              if (item.title?.key) {
                router.push(`/title/${item.title.key}`)
              }
            }}
          />
        )}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          isPending ? null : <Text style={styles.empty}>Здесь пока пусто</Text>
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: space['layout-horizontal']
  },
  list: {
    gap: space[3],
    padding: space['layout-horizontal']
  },
  row: { gap: space[3] },
  empty: {
    color: colors.text.muted,
    fontSize: fontSize.sm,
    textAlign: 'center'
  }
})
