import { router } from 'expo-router'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated'

import { space } from '@app/tokens'

import { useDiscoverGetTrending } from '@app/api'

import { SectionCarousel, TitleCard } from '@/components/elements'
import { HomeHeader } from '@/components/home/HomeHeader'
import { HomeHeroSlider } from '@/components/home/HomeHeroSlider'
import { Screen } from '@/components/ui/Screen'

export default function Index() {
  const scrollY = useSharedValue(0)
  const { data } = useDiscoverGetTrending({ take: 20 })

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.set(e.contentOffset.y)
  })

  const items = data?.data ?? []
  const heroItems = items.slice(0, 5)
  const topPicksForYouItems = items.slice(5, 12)
  const trendingItems = items.slice(12, 20)

  return (
    <Screen edges={[]}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: space[24] }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {!!heroItems.length && <HomeHeroSlider items={heroItems} />}

        <SectionCarousel
          title='Подборка для вас'
          onPressArrow={() => {}}
        >
          {topPicksForYouItems.map(title => (
            <TitleCard
              onPress={() => router.push(`/title/${title.key}`)}
              title={title}
              key={title.key}
            />
          ))}
        </SectionCarousel>

        <SectionCarousel
          title='Сейчас популярно'
          onPressArrow={() => {}}
        >
          {trendingItems.map(title => (
            <TitleCard
              onPress={() => router.push(`/title/${title.key}`)}
              title={title}
              key={title.key}
            />
          ))}
        </SectionCarousel>
      </Animated.ScrollView>

      <HomeHeader scrollY={scrollY} />
    </Screen>
  )
}
