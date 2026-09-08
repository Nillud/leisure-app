import { NativeTabs } from 'expo-router/unstable-native-tabs'

import { colors } from '@app/tokens'

export default function TabsLayout() {
	return (
		<NativeTabs
			minimizeBehavior='onScrollDown'
			tintColor={colors.text.primary}
			iconColor={{
				default: colors.text['little-muted'],
				selected: colors.text.primary
			}}
			labelStyle={{ color: colors.text.primary }}
		>
			<NativeTabs.Trigger name='index'>
				<NativeTabs.Trigger.Icon
					sf={{ default: 'house', selected: 'house.fill' }}
					md={'home'}
				/>
				<NativeTabs.Trigger.Label>Главная</NativeTabs.Trigger.Label>
			</NativeTabs.Trigger>
			<NativeTabs.Trigger name='library'>
				<NativeTabs.Trigger.Icon
					sf={{ default: 'heart', selected: 'heart.fill' }}
					md={'favorite'}
				/>
				<NativeTabs.Trigger.Label>Библиотека</NativeTabs.Trigger.Label>
			</NativeTabs.Trigger>
			<NativeTabs.Trigger name='profile'>
				<NativeTabs.Trigger.Icon
					sf={{ default: 'person.circle', selected: 'person.circle.fill' }}
					md={'account_circle'}
				/>
				<NativeTabs.Trigger.Label>Аккаунт</NativeTabs.Trigger.Label>
			</NativeTabs.Trigger>
			<NativeTabs.Trigger
				name='search'
				role='search'
			>
				<NativeTabs.Trigger.Label>Поиск</NativeTabs.Trigger.Label>
			</NativeTabs.Trigger>
		</NativeTabs>
	)
}
