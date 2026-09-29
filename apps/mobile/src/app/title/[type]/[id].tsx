import { router, useLocalSearchParams } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import { Pressable, Text, View } from 'react-native'

import type { TitleListItemResponseType } from '@app/api'

import { TYPE_LABELS } from '@app/constants'

import { FloatingButton } from '@/components/ui/FloatingButton'
import { Screen } from '@/components/ui/Screen'

export default function TitleDetail() {
	const { id, type } = useLocalSearchParams<{
		id: string
		type: TitleListItemResponseType
	}>()

	return (
		<Screen>
			<FloatingButton
				onPress={() => router.back()}
				side='left'
				icon={ChevronLeft}
				iconOffset={-2}
			/>
			<View style={{ marginTop: 60 }}>
				<Text>
					Тайтл {TYPE_LABELS[type]}-{id}
				</Text>
				<Pressable onPress={() => router.back()}>
					<Text>Назад</Text>
				</Pressable>
			</View>
		</Screen>
	)
}
