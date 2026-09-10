import { Stack } from 'expo-router'
import { ScrollView, Text } from 'react-native'

export default function Search() {
	return (
		<>
			<Stack.Title>Поиск</Stack.Title>
			<Stack.SearchBar
				placement='automatic'
				placeholder='Поиск'
				onChangeText={() => {}}
			/>
			<ScrollView>
				<Text>Результаты</Text>
			</ScrollView>
		</>
	)
}
