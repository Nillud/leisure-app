import { router, useLocalSearchParams } from 'expo-router'
import { Pressable, Text } from 'react-native'
import { Screen } from '@/components/Screen'

import type { TMediaType } from '@app/types'

import { TYPE_LABELS } from '@app/constants'

export default function TitleDetail() {
	const { id, type } = useLocalSearchParams<{ id: string; type: TMediaType }>()

	return (
		<Screen>
			<Text>
				Тайтл {TYPE_LABELS[type]}-{id}
			</Text>
			<Pressable onPress={() => router.back()}>
				<Text>Назад</Text>
			</Pressable>
		</Screen>
	)
}
