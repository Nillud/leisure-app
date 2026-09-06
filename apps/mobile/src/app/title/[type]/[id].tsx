import { router, useLocalSearchParams } from 'expo-router'
import { Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import type { TMediaType } from '@app/types'

import { TYPE_LABELS } from '@app/constants'

export default function TitleDetail() {
	const { id, type } = useLocalSearchParams<{ id: string; type: TMediaType }>()

	return (
		<SafeAreaView>
			<Text>
				Тайтл {TYPE_LABELS[type]}-{id}
			</Text>
			<Pressable onPress={() => router.back()}>
				<Text>Назад</Text>
			</Pressable>
		</SafeAreaView>
	)
}
