import { colors, space } from '@app/tokens'
import type { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
	children: ReactNode
	edges?: ('top' | 'bottom')[]
}

export function Screen({ children, edges }: Props) {
	return (
		<SafeAreaView
			style={styles.root}
			edges={edges}
		>
			{children}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
        flex: 1,
        backgroundColor: colors.bg.base,
        paddingHorizontal: space[6]
    }
})
