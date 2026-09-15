import { Play, Plus } from 'lucide-react-native'
import { StyleSheet, View } from 'react-native'

import { Button, HomeHeader, Screen } from '@/components'

export default function Index() {
	return (
		<Screen>
			<HomeHeader />

			<View style={{ marginTop: 60 }}>
				<Button
					icon={Play}
					onPress={() => {}}
				>
					Смотреть фильм
				</Button>

				<Button
					variant='secondary'
					icon={Plus}
					onPress={() => {}}
				/>
			</View>
		</Screen>
	)
}

const styles = StyleSheet.create({})
